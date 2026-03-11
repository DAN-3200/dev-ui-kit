// ── Number Input ──────────────────────────────────────────────────
function stepNum(id, dir) {
	const el = document.getElementById(id);
	if (!el) return;
	const min = el.min !== '' ? parseFloat(el.min) : -Infinity;
	const max = el.max !== '' ? parseFloat(el.max) : Infinity;
	const val = (parseFloat(el.value) || 0) + dir;
	el.value = Math.min(max, Math.max(min, val));
}
