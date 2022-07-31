// Arquivo suportará funções que poderão ser reutilizadas em toda a aplicação

// Identifica se o usuário está no mobile
export const isMobile = () => {
  return window.innerWidth <= 767 ? true : false;
};