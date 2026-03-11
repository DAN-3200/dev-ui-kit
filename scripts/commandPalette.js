// ── Command Palette ───────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
	if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
		e.preventDefault();
		const pal = document.getElementById('cmdPalette');
		pal.classList.toggle('open');
		if (pal.classList.contains('open')) {
			setTimeout(() => document.getElementById('cmdSearch').focus(), 50);
		}
	}
	if (e.key === 'Escape') {
		document.getElementById('cmdPalette').classList.remove('open');
	}
});

function filterCmd(val) {
	const q = val.toLowerCase();
	document.querySelectorAll('#cmdResults .cmd-item').forEach((item) => {
		const label = (
			item.getAttribute('data-label') || item.textContent
		).toLowerCase();
		item.style.display = label.includes(q) ? '' : 'none';
	});
	// hide group labels if all items below them are hidden
	document.querySelectorAll('#cmdResults .cmd-group-label').forEach((lbl) => {
		let next = lbl.nextElementSibling;
		let hasVisible = false;
		while (next && !next.classList.contains('cmd-group-label')) {
			if (next.style.display !== 'none') hasVisible = true;
			next = next.nextElementSibling;
		}
		lbl.style.display = hasVisible ? '' : 'none';
	});
}