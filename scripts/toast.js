// ── Sonner / Toast ────────────────────────────────────────────────
const toastIcons = {
	default:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
	success:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>',
	error:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
	warning:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
	info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
};
function showToast(type, title, desc, withAction) {
	const stack = document.getElementById('sonner-stack');
	const duration = 4000;
	const el = document.createElement('div');
	el.className = `toast toast-${type}`;
	el.style.setProperty('--duration', duration + 'ms');
	el.innerHTML = `
        <span class="toast-icon">${toastIcons[type] || toastIcons.default}</span>
        <div class="toast-body">
          <div class="toast-title">${title}</div>
          ${desc ? `<div class="toast-desc">${desc}</div>` : ''}
          ${withAction ? `<div class="toast-action"><button onclick="this.closest('.toast').remove()">Undo</button></div>` : ''}
        </div>
        <button class="toast-close" onclick="dismissToast(this.closest('.toast'))">×</button>
        <div class="toast-progress"></div>
      `;
	stack.appendChild(el);
	// limit stack to 5
	const toasts = stack.querySelectorAll('.toast');
	if (toasts.length > 5) dismissToast(toasts[0]);
	// auto-dismiss
	setTimeout(() => dismissToast(el), duration);
}
function dismissToast(el) {
	if (!el || !el.parentElement) return;
	el.style.animation = 'toastOut 0.22s ease forwards';
	setTimeout(() => el.remove(), 220);
}