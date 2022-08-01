import { useState } from 'react'
import './style.css'

export const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Função que verifica que o usuário passou dos 300px 
    function toggleVisible() {
        const height = document.documentElement.scrollTop
        height <= 300 ? setIsVisible(false) : setIsVisible(true);
    }

    // Função que faz subir para o topo da tela
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    // Observando o scroll do usuário
    window.addEventListener('scroll', toggleVisible)

    return (
        <button  onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
            <i id='toTopButton' className="bi bi-arrow-up-circle-fill"></i>
        </button>
    )
}