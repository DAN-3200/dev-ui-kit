// ── Tabs ───────────────────────────────────────────────────────────
function switchTab(btn, targetId) {
	const container = btn.closest('.component-card') || btn.closest('section');
	container
		.querySelectorAll('.tab-btn')
		.forEach((b) => b.classList.remove('active'));
	document.getElementById(targetId).classList.remove('hidden');
}
