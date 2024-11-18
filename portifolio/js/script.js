const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

class FormSubmit {
  constructor(formSelector, messageSelector) {
    this.form = document.querySelector(formSelector); // Seleciona o formulário
    this.messageBox = document.querySelector(messageSelector); // Caixa de mensagem
    this.url = "https://formspree.io/f/mbljkdby"; // URL do Formspree
    this.sendForm = this.sendForm.bind(this); // Garante o contexto correto no método
  }

  displayMessage() {
    this.messageBox.style.display = "block"; // Mostra a mensagem
    setTimeout(() => {
      this.messageBox.style.display = "none"; // Esconde a mensagem após 3 segundos
    }, 3000);
  }

  clearForm() {
    this.form.reset(); // Limpa os campos do formulário
  }

  getFormObject() {
    return new FormData(this.form); // Captura os dados do formulário
  }

  async sendForm(event) {
    event.preventDefault(); // Previne o envio padrão
    try {
      const response = await fetch(this.url, {
        method: "POST",
        body: this.getFormObject(),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        this.displayMessage(); // Mostra a mensagem de sucesso
        this.clearForm(); // Limpa os campos do formulário
      } else {
        console.error("Erro no envio:", response.statusText);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  init() {
    if (this.form) this.form.addEventListener("submit", this.sendForm); // Adiciona o evento de envio
  }
}

const formSubmit = new FormSubmit("#form", "#form-message");
formSubmit.init(); // Inicializa a classe
