// ── Button Group ──────────────────────────────────────────────────
function activateBtn(btn) {
	const group = btn.closest('.btn-group');
	group.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
	btn.classList.add('active');
}
