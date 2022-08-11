import { useState } from 'react';

// Identifica se o viewport do usuário é menor que 768px (Mobile)
const isMobileBreakpoint = () => {
    return window.innerWidth < 768;
};

export const useViewPort = () => {
    const [isMobile, setIsMobile] = useState(isMobileBreakpoint());

    // Renderiza toda vez que o tamanho da tela é reajustada
    window.addEventListener('resize', () => {
        setIsMobile(isMobileBreakpoint());
    });

    return {
        isMobile,
    };
};
