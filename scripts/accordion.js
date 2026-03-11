// ── Accordion ─────────────────────────────────────────────────────
function toggleAccordion(btn, singleMode) {
	const item = btn.closest('.accordion-item');
	const group = item.closest('.accordion-group') || item.parentElement;
	if (singleMode) {
		group.querySelectorAll('.accordion-item').forEach((i) => {
			if (i !== item) i.classList.remove('open');
		});
	}
	item.classList.toggle('open');
}
