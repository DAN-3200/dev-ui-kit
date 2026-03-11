// ── Tag input ─────────────────────────────────────────────────────
function addTag(e, wrapId) {
	if (e.key !== 'Enter' && e.key !== ',') return;
	e.preventDefault();
	const input = e.target;
	const val = input.value.trim().replace(/,$/, '');
	if (!val) return;
	const wrap = document.getElementById(wrapId);
	const tag = document.createElement('span');
	tag.className =
		'inline-flex items-center gap-1 bg-gray-100 border border-gray-300 text-xs font-medium px-2 py-1';
	tag.innerHTML =
		val +
		'<button type="button" onclick="this.parentElement.remove()" class="ml-0.5 text-gray-400 hover:text-black leading-none">×</button>';
	wrap.insertBefore(tag, input);
	input.value = '';
}
function updateFileLabel(input, labelId) {
	const label = document.getElementById(labelId);
	if (!label) return;
	if (input.files && input.files.length > 0) {
		label.textContent =
			input.files.length === 1
				? input.files[0].name
				: input.files.length + ' files selected';
		label.style.color = '#111';
	}
}
function handleDrop(e, zoneId, labelId) {
	e.preventDefault();
	const zone = document.getElementById(zoneId);
	const label = document.getElementById(labelId);
	if (!zone) return;
	zone.classList.remove('dragover');
	const files = e.dataTransfer.files;
	if (files && files.length > 0 && label) {
		label.textContent =
			files.length === 1 ? files[0].name : files.length + ' files selected';
		label.style.color = '#111';
	}
}
