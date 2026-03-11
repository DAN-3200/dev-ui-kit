// ── Pagination ────────────────────────────────────────────────────
function setPage(btn) {
	const group = btn.closest('.flex');
	group
		.querySelectorAll('.page-btn')
		.forEach((b) => b.classList.remove('active'));
	btn.classList.add('active');
}
function handlePage(btn, dir) {
	const group = btn.closest('.flex');
	const btns = Array.from(
		group.querySelectorAll('button.page-btn[onclick*="setPage"]'),
	);
	const activeIdx = btns.findIndex((b) => b.classList.contains('active'));
	const next = btns[activeIdx + dir];
	if (next) setPage(next);
}
