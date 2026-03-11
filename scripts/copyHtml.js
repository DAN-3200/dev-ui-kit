// ── Copy HTML ──────────────────────────────────────────────────────
document.querySelectorAll('.copy-btn').forEach((btn) => {
	btn.addEventListener('click', () => {
		const html = btn.getAttribute('data-html');
		navigator.clipboard.writeText(html).then(() => {
			const orig = btn.textContent;
			btn.textContent = '✓ Copied!';
			btn.classList.add('copied');
			setTimeout(() => {
				btn.textContent = orig;
				btn.classList.remove('copied');
			}, 1600);
		});
	});
});
