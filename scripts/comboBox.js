// ── Combobox ──────────────────────────────────────────────────────
function openCombobox(id) {
	document.getElementById(id).classList.add('open');
}
function toggleCombobox(id) {
	const wrap = document.getElementById(id);
	const isOpen = wrap.classList.contains('open');
	document
		.querySelectorAll('.combobox-wrap')
		.forEach((w) => w.classList.remove('open'));
	if (!isOpen) {
		wrap.classList.add('open');
		wrap.querySelector('.combobox-field').focus();
	}
}
function selectCombobox(id, value) {
	const wrap = document.getElementById(id);
	const field = document.getElementById(id + '-field');
	if (field) field.value = value;
	wrap.querySelectorAll('.combobox-option').forEach((opt) => {
		opt.classList.toggle('selected', opt.getAttribute('data-value') === value);
	});
	wrap.classList.remove('open');
}
function filterCombobox(id, query) {
	const q = query.toLowerCase();
	const wrap = document.getElementById(id);
	let hasVisible = false;
	wrap.querySelectorAll('.combobox-option').forEach((opt) => {
		const text = opt.textContent.toLowerCase();
		const show = text.includes(q);
		opt.classList.toggle('hidden', !show);
		if (show) hasVisible = true;
	});
	const empty = document.getElementById(id + '-empty');
	if (empty) empty.style.display = hasVisible ? 'none' : '';
	wrap.classList.add('open');
}
document.addEventListener('click', (e) => {
	if (!e.target.closest('.combobox-wrap')) {
		document
			.querySelectorAll('.combobox-wrap')
			.forEach((w) => w.classList.remove('open'));
	}
});
