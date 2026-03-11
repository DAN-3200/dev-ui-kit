			// ── Copy HTML ──────────────────────────────────────────────────────
			document.querySelectorAll('.copy-btn').forEach((btn) => {
				btn.addEventListener('click', () => {
					const html = btn.getAttribute('data-html');
					navigator.clipboard.writeText(html).then(() => {
						const orig = btn.textContent;
						btn.textContent = '✓ Copied!';
						btn.classList.add('copied');
						setTimeout(() => {
							btn.textContent = orig;
							btn.classList.remove('copied');
						}, 1600);
					});
				});
			});

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

			// ── Tabs ───────────────────────────────────────────────────────────
			function switchTab(btn, targetId) {
				const container =
					btn.closest('.component-card') || btn.closest('section');
				container
					.querySelectorAll('.tab-btn')
					.forEach((b) => b.classList.remove('active'));
				document.getElementById(targetId).classList.remove('hidden');
			}

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

			// ── Number Input ──────────────────────────────────────────────────
			function stepNum(id, dir) {
				const el = document.getElementById(id);
				if (!el) return;
				const min = el.min !== '' ? parseFloat(el.min) : -Infinity;
				const max = el.max !== '' ? parseFloat(el.max) : Infinity;
				const val = (parseFloat(el.value) || 0) + dir;
				el.value = Math.min(max, Math.max(min, val));
			}

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

			// ── Button Group ──────────────────────────────────────────────────
			function activateBtn(btn) {
				const group = btn.closest('.btn-group');
				group
					.querySelectorAll('button')
					.forEach((b) => b.classList.remove('active'));
				btn.classList.add('active');
			}

			// ── Context Menu ──────────────────────────────────────────────────
			function showCtx(e, id) {
				e.preventDefault();
				// hide all context menus first
				document
					.querySelectorAll('.ctx-menu')
					.forEach((m) => m.classList.add('hidden'));
				const menu = document.getElementById(id);
				if (!menu) return;
				menu.classList.remove('hidden');
				// position relative to its container (component-preview)
				const container = menu.parentElement.getBoundingClientRect();
				const x = e.clientX - container.left;
				const y = e.clientY - container.top;
				menu.style.left = x + 'px';
				menu.style.top = y + 'px';
			}
			document.addEventListener('click', () => {
				document
					.querySelectorAll('.ctx-menu')
					.forEach((m) => m.classList.add('hidden'));
			});

			// ── Menu Bar ──────────────────────────────────────────────────────
			function toggleMenuBar(id) {
				const item = document.getElementById(id);
				const isOpen = item.classList.contains('open');
				document
					.querySelectorAll('.menubar-item')
					.forEach((i) => i.classList.remove('open'));
				if (!isOpen) item.classList.add('open');
			}
			document.addEventListener('click', (e) => {
				if (!e.target.closest('.menubar-item')) {
					document
						.querySelectorAll('.menubar-item')
						.forEach((i) => i.classList.remove('open'));
				}
			});

			// ── Command Palette ───────────────────────────────────────────────
			document.addEventListener('keydown', (e) => {
				if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
					e.preventDefault();
					const pal = document.getElementById('cmdPalette');
					pal.classList.toggle('open');
					if (pal.classList.contains('open')) {
						setTimeout(() => document.getElementById('cmdSearch').focus(), 50);
					}
				}
				if (e.key === 'Escape') {
					document.getElementById('cmdPalette').classList.remove('open');
				}
			});
			function filterCmd(val) {
				const q = val.toLowerCase();
				document.querySelectorAll('#cmdResults .cmd-item').forEach((item) => {
					const label = (
						item.getAttribute('data-label') || item.textContent
					).toLowerCase();
					item.style.display = label.includes(q) ? '' : 'none';
				});
				// hide group labels if all items below them are hidden
				document
					.querySelectorAll('#cmdResults .cmd-group-label')
					.forEach((lbl) => {
						let next = lbl.nextElementSibling;
						let hasVisible = false;
						while (next && !next.classList.contains('cmd-group-label')) {
							if (next.style.display !== 'none') hasVisible = true;
							next = next.nextElementSibling;
						}
						lbl.style.display = hasVisible ? '' : 'none';
					});
			}

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

			// ── Password toggle ───────────────────────────────────────────────
			function togglePwd(id, btn) {
				const input = document.getElementById(id);
				if (!input) return;
				const show = input.type === 'password';
				input.type = show ? 'text' : 'password';
				btn.innerHTML = show
					? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>'
					: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
			}

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
						files.length === 1
							? files[0].name
							: files.length + ' files selected';
					label.style.color = '#111';
				}
			}

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
					opt.classList.toggle(
						'selected',
						opt.getAttribute('data-value') === value,
					);
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

			// ── Sheet ──────────────────────────────────────────────────────────
			function openSheet(id) {
				const backdrop = document.getElementById(id);
				if (!backdrop) return;
				backdrop.classList.add('open');
				document.body.style.overflow = 'hidden';
			}
			function closeSheet(id) {
				const backdrop = document.getElementById(id);
				if (!backdrop) return;
				backdrop.classList.remove('open');
				document.body.style.overflow = '';
			}
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					document.querySelectorAll('.sheet-backdrop.open').forEach((el) => {
						el.classList.remove('open');
						document.body.style.overflow = '';
					});
				}
			});