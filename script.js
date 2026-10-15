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

// Provisional, honest fallback: a mailto link DOES NOT send a message automatically.
// A real backend/inbox endpoint must be chosen and tested before production release.
form?.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const value = key => String(data.get(key) ?? "").trim();
  const subject = "Consulta Marea Studio — " + (value("negocio") || value("nombre"));
  const body = [
    "Nombre: " + value("nombre"),
    "Negocio: " + value("negocio"),
    "Email: " + value("email"),
    "Instagram o sitio web: " + (value("instagram") || "No indicado"),
    "Objetivo: " + value("objetivo"),
    "",
    "Contanos un poco más:",
    value("contexto")
  ].join("\n");

  const mailto = "mailto:marea.studioweb@gmail.com?subject=" +
    encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  if (formNote) {
    formNote.textContent = "Abrimos tu aplicación de correo con la consulta preparada. Revisá el mensaje y presioná Enviar para completar el contacto.";
  }
  window.location.href = mailto;
});