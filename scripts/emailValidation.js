// ── Email Validation ──────────────────────────────────────────────
function validateEmail(input) {
	const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
	const icon = document.getElementById('emailIcon');
	const msg = document.getElementById('emailMsg');
	if (input.value.trim() === '') {
		input.style.borderColor = '#d1d5db';
		input.style.background = '#fff';
		icon.innerHTML = '';
		icon.classList.add('hidden');
		msg.textContent = 'Enter a valid email to continue.';
		msg.className = 'text-xs mono text-gray-400';
	} else if (valid) {
		input.style.borderColor = '#16a34a';
		input.style.background = '#f0fdf4';
		icon.innerHTML =
			'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>';
		icon.classList.remove('hidden');
		msg.textContent = 'Looks good!';
		msg.className = 'text-xs mono text-green-600';
	} else {
		input.style.borderColor = '#dc2626';
		input.style.background = '#fef2f2';
		icon.innerHTML =
			'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
		icon.classList.remove('hidden');
		msg.textContent = 'Invalid email address.';
		msg.className = 'text-xs mono text-red-600';
	}
}
