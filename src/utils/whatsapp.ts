/**
 * Gera URL do WhatsApp comercial com mensagem pré-preenchida
 * @param message - Mensagem personalizada (opcional)
 * @returns URL formatada para WhatsApp
 */
export const getWhatsAppComercialUrl = (message?: string): string => {
  const phoneNumber = '552433531581';
  const defaultMessage =
    message ||
    'Olá, estava no site de vocês e estou entrando em contato.';
  const baseUrl = `https://wa.me/${phoneNumber}`;
  return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
};

