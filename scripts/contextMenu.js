// ── Context Menu ──────────────────────────────────────────────────
function showCtx(e, id) {
	e.preventDefault();
	// hide all context menus first
	document
		.querySelectorAll('.ctx-menu')
		.forEach((m) => m.classList.add('hidden'));
	const menu = document.getElementById(id);
	if (!menu) return;
	menu.classList.remove('hidden');
	// position relative to its container (component-preview)
	const container = menu.parentElement.getBoundingClientRect();
	const x = e.clientX - container.left;
	const y = e.clientY - container.top;
	menu.style.left = x + 'px';
	menu.style.top = y + 'px';
}
document.addEventListener('click', () => {
	document
		.querySelectorAll('.ctx-menu')
		.forEach((m) => m.classList.add('hidden'));
});
