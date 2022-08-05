// Arquivo suportará funções de estilo da aplicação
const style = {
    // Estiliza os botões de next and previous do carousel
    stylebuttons: {
        default: { fontSize: '35px', fontWeight: 'bold' },
        rightButton: function () {
            return { ...this.default, borderRadius: '50% 0 0 50%', padding: '10px 5px 10px 15px' };
        },
        leftButton: function () {
            return { ...this.default, borderRadius: '0 50% 50% 0', padding: '10px 15px  10px 5px ' };
        },
    },

    sectionHeightOnLoading(isLoading) {
        return isLoading ? '200px' : 'auto';
    },
};

export default style;
