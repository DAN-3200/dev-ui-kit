// ── OTP input ─────────────────────────────────────────────────────
function otpNext(input) {
	input.value = input.value.replace(/[^0-9]/g, '');
	if (input.value.length === 1) {
		const next = input.nextElementSibling;
		if (next && next.classList.contains('otp-field')) next.focus();
	}
}
function otpBack(e, input) {
	if (e.key === 'Backspace' && input.value === '') {
		const prev = input.previousElementSibling;
		if (prev && prev.classList.contains('otp-field')) {
			prev.focus();
			prev.value = '';
		}
	}
}