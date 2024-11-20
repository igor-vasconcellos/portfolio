const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// funções para o formulário de contato funcionar:

class FormSubmit {
  constructor(formSelector, messageSelector) {
    this.form = document.querySelector(formSelector);
    this.messageBox = document.querySelector(messageSelector);
    this.url = "https://formspree.io/f/mbljkdby";
    this.sendForm = this.sendForm.bind(this);
  }

  // função pra mostrar a mensagem de aviso que a mensagem foi enviada:

  displayMessage() {
    this.messageBox.style.display = "block";
    setTimeout(() => {
      this.messageBox.style.display = "none";
    }, 3000);
  }

  clearForm() {
    this.form.reset();
  }

  getFormObject() {
    return new FormData(this.form);
  }

  async sendForm(event) {
    event.preventDefault();
    try {
      const response = await fetch(this.url, {
        method: "POST",
        body: this.getFormObject(),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        this.displayMessage();
        this.clearForm();
      } else {
        console.error("Erro no envio:", response.statusText);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  init() {
    if (this.form) this.form.addEventListener("submit", this.sendForm);
  }
}

const formSubmit = new FormSubmit("#form", "#form-message");
formSubmit.init();
