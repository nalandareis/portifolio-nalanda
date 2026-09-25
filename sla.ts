// ==========================================================
// 1. DEFINIÇÃO DE INTERFACES (Estrutura de Dados)
// ==========================================================

// Define a estrutura esperada para os dados do formulário de contacto
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ==========================================================
// 2. LÓGICA PRINCIPAL DA APLICAÇÃO
// ==========================================================

// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', (): void => {
  
  // Seleção e tipagem explícita dos elementos HTML do DOM
  const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
  const feedbackMessage = document.getElementById('feedbackMessage') as HTMLDivElement | null;

  // Verifica se os elementos realmente existem na página antes de adicionar os eventos
  if (!contactForm || !feedbackMessage) {
    console.error('Elementos do formulário não foram encontrados no HTML.');
    return;
  }

  // Adiciona o ouvinte de evento para o envio do formulário
  contactForm.addEventListener('submit', (event: SubmitEvent): void => {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // Captura e tipa os campos de entrada de texto
    const nameInput = document.getElementById('userName') as HTMLInputElement;
    const emailInput = document.getElementById('userEmail') as HTMLInputElement;
    const messageInput = document.getElementById('userMessage') as HTMLTextAreaElement;

    // Organiza os dados capturados utilizando a interface tipada
    const formData: ContactFormData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Validação simples dos dados
    if (!formData.name || !formData.email || !formData.message) {
      exibirFeedback(
        feedbackMessage, 
        'Por favor, preencha todos os campos do formulário.', 
        '#f8d7da', 
        '#721c24'
      );
      return;
    }

    // Exibe a mensagem de sucesso usando a função auxiliar
    exibirFeedback(
      feedbackMessage, 
      `Obrigado pelo contacto, ${formData.name}! A sua mensagem foi enviada com sucesso.`, 
      '#d4edda', 
      '#155724'
    );

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
function exibirFeedback(
  element: HTMLDivElement, 
  message: string, 
  bgColor: string, 
  textColor: string
): void {
  element.style.display = 'block';
  element.style.backgroundColor = bgColor;
  element.style.color = textColor;
  element.style.border = '2px solid #2b2323';
  element.textContent = message;
}