const contacts = [
  ['GitHub', '⌘', 'https://github.com/Mukul-prime'],
  ['LinkedIn', 'in', 'https://www.linkedin.com/in/mukul-vats/'],
  ['Email', '✉', 'https://mail.google.com/mail/?view=cm&fs=1&to=mukulvats200@gmail.com'],
];

const mountContactButtons = () => {
  const contact = document.getElementById('contact-details');
  if (!contact) return false;
  const buttons = contacts.map(([label, icon, href]) => `<a class="contact-action" href="${href}" target="_blank" rel="noreferrer"><span class="contact-icon">${icon}</span><span>${label}</span><b>↗</b></a>`).join('');
  contact.innerHTML = `<div class="contact-actions">${buttons}<div class="contact-action phone-display"><span class="contact-icon">☎</span><span>+91 70425 08688</span></div></div>`;
  return true;
};

let attempts = 0;
const retry = setInterval(() => {
  attempts += 1;
  if (mountContactButtons() || attempts > 30) clearInterval(retry);
}, 100);
