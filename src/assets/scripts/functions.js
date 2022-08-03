// Arquivo suportará funções que poderão ser reutilizadas em toda a aplicação

// Identifica se o usuário está no mobile
export const isMobile = () => {
  return window.innerWidth <= 767 ? true : false;
};

// Mask - Tranformador para real (R$)
export const convertToReal = a => {
  a = parseFloat(a);
  a = a.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return a;
};
