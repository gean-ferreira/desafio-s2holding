// Arquivo suportará funções que poderão ser reutilizadas em toda a aplicação
const functions = {
    // Mask - Tranformador para real (R$)
    convertToReal(a) {
        a = parseFloat(a);
        a = a.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        return a;
    },
};

export default functions;
