"use strict";
// ==========================================================
// 1. DEFINIÇÃO DE INTERFACES (Estrutura de Dados)
// ==========================================================
// ==========================================================
// 2. LÓGICA PRINCIPAL DA APLICAÇÃO
// ==========================================================
// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    // Seleção e tipagem explícita dos elementos HTML do DOM
    const contactForm = document.getElementById('contactForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    // Verifica se os elementos realmente existem na página antes de adicionar os eventos
    if (!contactForm || !feedbackMessage) {
        console.error('Elementos do formulário não foram encontrados no HTML.');
        return;
    }
    // Adiciona o ouvinte de evento para o envio do formulário
    contactForm.addEventListener('submit', (event) => {
        // Impede o comportamento padrão de recarregar a página
        event.preventDefault();
        // Captura e tipa os campos de entrada de texto
        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');
        // Organiza os dados capturados utilizando a interface tipada
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        // Validação simples dos dados
        if (!formData.name || !formData.email || !formData.message) {
            exibirFeedback(feedbackMessage, 'Por favor, preencha todos os campos do formulário.', '#f8d7da', '#721c24');
            return;
        }
        // Exibe a mensagem de sucesso usando a função auxiliar
        exibirFeedback(feedbackMessage, `Obrigado pelo contacto, ${formData.name}! A sua mensagem foi enviada com sucesso.`, '#d4edda', '#155724');
        // Limpa o formulário após o envio
        contactForm.reset();
    });
});
// ==========================================================
// 3. FUNÇÕES AUXILIARES
// ==========================================================
/**
 * Função para estilizar e exibir mensagens de feedback na tela
 * @param element Elemento HTML div onde a mensagem será exibida
 * @param message Texto da mensagem
 * @param bgColor Cor de fundo da caixa
 * @param textColor Cor do texto
 */
function exibirFeedback(element, message, bgColor, textColor) {
    element.style.display = 'block';
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
    element.style.border = '2px solid #2b2323';
    element.textContent = message;
}
