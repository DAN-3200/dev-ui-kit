// ── Menu Bar ──────────────────────────────────────────────────────
function toggleMenuBar(id) {
	const item = document.getElementById(id);
	const isOpen = item.classList.contains('open');
	document
		.querySelectorAll('.menubar-item')
		.forEach((i) => i.classList.remove('open'));
	if (!isOpen) item.classList.add('open');
}
document.addEventListener('click', (e) => {
	if (!e.target.closest('.menubar-item')) {
		document
			.querySelectorAll('.menubar-item')
			.forEach((i) => i.classList.remove('open'));
	}
});
