// Sends every <form data-quote> to FormSubmit without leaving the page (shared by the website and business card forms).
// Links like /start/?src=card (the business card QR code) preselect "How did you hear about us?".
  const SOURCES: Record<string, string> = { card: 'Business card', google: 'Google', ig: 'Instagram' };
  const src = SOURCES[new URLSearchParams(location.search).get('src') ?? ''];

  // Send without leaving the page. Without JavaScript the form still posts normally.
  for (const form of document.querySelectorAll<HTMLFormElement>('form[data-quote]')) {
    const source = form.querySelector<HTMLSelectElement>('select[name="source"]');
    if (source && src) source.value = src;
    const status = form.querySelector<HTMLElement>('.status')!;
    const button = form.querySelector<HTMLButtonElement>('.submit')!;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      button.disabled = true;
      status.textContent = 'Sending…';
      try {
        const body = new FormData(form);
        // Checkbox groups (name ends in []) arrive as one readable line, e.g. "Drone, Events".
        for (const key of new Set([...body.keys()].filter((k) => k.endsWith('[]')))) {
          const values = body.getAll(key).join(', ');
          body.delete(key);
          body.set(key.slice(0, -2), values);
        }
        const res = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
          method: 'POST',
          body,
          headers: { Accept: 'application/json' },
        });
        // FormSubmit answers 200 even when it refuses a message (for example before the inbox is
        // activated), so check what it says, not just the status code.
        const data = await res.json().catch(() => ({}));
        if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || String(res.status));
        form.reset();
        status.textContent = form.dataset.thanks || "Thanks! We'll get back to you within one business day.";
      } catch {
        status.textContent = `Something went wrong and your message was not sent. Please call ${form.dataset.phone} or email ${form.dataset.email}.`;
      } finally {
        button.disabled = false;
      }
    });
  }
