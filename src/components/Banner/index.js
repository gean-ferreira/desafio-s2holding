import mobImg from '../../assets/imgs/banners/banner-full-mobile.jpg'
import deskImg from '../../assets/imgs/banners/banner-full-desktop.jpg'
import { isMobile } from '../../assets/scripts/functions';

export const Banner = () => {

    // Coloca a imagem de acordo com o viewport do usuário
    const img = isMobile() ? mobImg : deskImg;

    return (
        <section id="banner">
            <a href="https://cantao.com.br" target="_self" rel="noopener noreferrer">
                <img src={img} width="100%" height="auto" alt="Banner do site" />
            </a>
        </section>
    )
}
