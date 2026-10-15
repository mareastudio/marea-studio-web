"use strict";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const menuText = menuToggle?.querySelector(".sr-only");

function closeMenu(returnFocus = false) {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  if (menuText) menuText.textContent = "Abrir menú";
  if (returnFocus) menuToggle.focus();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  if (menuText) menuText.textContent = isOpen ? "Abrir menú" : "Cerrar menú";
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    closeMenu(true);
  }
});

document.addEventListener("click", event => {
  if (menuToggle?.getAttribute("aria-expanded") === "true" && !event.target.closest(".site-header")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) closeMenu();
});

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const submitButton = form?.querySelector('button[type="submit"]');
const submitButtonHTML = submitButton?.innerHTML || "";
const formspreeEndpoint = form?.dataset.formspreeEndpoint?.trim() || "";
const endpointIsValid = /^https:\/\/formspree\.io\/f\/[a-z0-9]{6,32}$/i.test(formspreeEndpoint);

function setFormFeedback(message, state) {
  if (!formNote) return;
  formNote.textContent = message;
  formNote.dataset.state = state;
}

// The Formspree endpoint is activated only after the owner creates and verifies a form.
// Never claim successful submission until the service returns a successful response.
if (form && submitButton) {
  submitButton.disabled = !endpointIsValid;
  if (endpointIsValid) {
    setFormFeedback(
      "Tus datos se enviarán desde esta página, sin abrir tu aplicación de correo.",
      "ready"
    );
  } else {
    setFormFeedback(
      "Estamos terminando de habilitar el envío directo. Mientras tanto, podés escribirnos a marea.studioweb@gmail.com.",
      "unavailable"
    );
  }
}

form?.addEventListener("submit", async event => {
  event.preventDefault();
  if (!endpointIsValid || !submitButton || !form.reportValidity() || submitButton.disabled) return;

  submitButton.disabled = true;
  form.setAttribute("aria-busy", "true");
  submitButton.textContent = "Enviando consulta…";
  setFormFeedback("Estamos enviando tu consulta. Esperá un momento.", "sending");

  // Formspree supports standard FormData payloads with Accept: application/json.
  // Its built-in spam checks should be configured in the form owner's dashboard.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the submission (HTTP " + response.status + ")");
    }

    form.reset();
    setFormFeedback(
      "¡Listo! Tu consulta fue recibida. Nos pondremos en contacto por el email que nos dejaste.",
      "success"
    );
  } catch (error) {
    setFormFeedback(
      "No pudimos enviar la consulta. Por favor, intentá nuevamente o escribinos a marea.studioweb@gmail.com.",
      "error"
    );
  } finally {
    clearTimeout(timeout);
    submitButton.innerHTML = submitButtonHTML;
    form.removeAttribute("aria-busy");
    submitButton.disabled = false;
  }
});
