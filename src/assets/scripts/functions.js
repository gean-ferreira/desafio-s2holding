// Arquivo suportará funções que poderão ser reutilizadas em toda a aplicação
const functions = {
    // Identifica se o usuário está no mobile
    isMobile() {
        return window.innerWidth <= 767 ? true : false;
    },

    // Mask - Tranformador para real (R$)
    convertToReal(a) {
        a = parseFloat(a);
        a = a.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return a;
    },
};

export default functions;
