// ── Dropdown toggle ────────────────────────────────────────────────
function toggleDropdown(id) {
	const dd = document.getElementById(id);
	const isOpen = dd.classList.contains('open');
	// Close all
	document
		.querySelectorAll('.dropdown')
		.forEach((d) => d.classList.remove('open'));
	if (!isOpen) dd.classList.add('open');
}

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
	if (!e.target.closest('.dropdown')) {
		document
			.querySelectorAll('.dropdown')
			.forEach((d) => d.classList.remove('open'));
	}
});
