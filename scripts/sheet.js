// ── Sheet ──────────────────────────────────────────────────────────
function openSheet(id) {
	const backdrop = document.getElementById(id);
	if (!backdrop) return;
	backdrop.classList.add('open');
	document.body.style.overflow = 'hidden';
}
function closeSheet(id) {
	const backdrop = document.getElementById(id);
	if (!backdrop) return;
	backdrop.classList.remove('open');
	document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		document.querySelectorAll('.sheet-backdrop.open').forEach((el) => {
			el.classList.remove('open');
			document.body.style.overflow = '';
		});
	}
});
