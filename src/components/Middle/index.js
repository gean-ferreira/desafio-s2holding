import './style.css';
import img1 from '../../assets/imgs/middle/middle-1.jpg';
import img2 from '../../assets/imgs/middle/middle-2.jpg';
import img3 from '../../assets/imgs/middle/middle-3.jpg';
import img4 from '../../assets/imgs/middle/middle-4.jpg';
import { style } from '../../assets/scripts/index';
import Carousel from 'nuka-carousel';
import { useViewPort } from '../../assets/scripts/hooks/useViewPort';

export const Middle = () => {
    const { isMobile } = useViewPort();
    // Array com o caminho relativo das imagens
    const imgsMiddle = [img1, img2, img3, img4];

    // Condicional que adiciona classe global para manipular o estilo do item
    const inTheLeft = index => (index % 2 ? '' : ' justify-content-end');

    // Lista os itens da sessão Middle
    function itemsMiddle() {
        return imgsMiddle.map((res, index) => {
            return (
                <li key={index} className={`middle__items${inTheLeft(index)}`}>
                    <div className='image__middle'>
                        <a href='http://cantao.com.br' target='_blank' rel='noopener noreferrer'>
                            <img width={'100%'} src={res} alt={`Imagem do meio ${index}`} />
                            <div className='banner-bottom__image'>
                                <span>Confira nossa categoria {index + 1}!</span>
                            </div>
                        </a>
                    </div>
                </li>
            );
        });
    }

    // Mobile: a função renderiza as imagens dentro de uma lib de Carousel
    // Desktop: renderiza a sessão em duas colunas
    function renderSection() {
        return isMobile ? (
            <Carousel
                autoplay={true}
                dragThreshold={0.1}
                wrapAround={true}
                defaultControlsConfig={{
                    pagingDotsStyle: { display: 'none' },
                    nextButtonStyle: style.stylebuttons.rightButton(),
                    nextButtonText: '>',
                    prevButtonStyle: style.stylebuttons.leftButton(),
                    prevButtonText: '<',
                }}
            >
                {itemsMiddle()}
            </Carousel>
        ) : (
            <ul className='middle__menu-list px-1'>{itemsMiddle()}</ul>
        );
    }

    return (
        <section id='middle' className='middle__area container space'>
            <h2 className='title'>Middle</h2>
            {renderSection()}
        </section>
    );
};
