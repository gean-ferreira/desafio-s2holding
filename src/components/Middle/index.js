import './style.css'
import img1 from '../../assets/imgs/middle/middle-1.jpg'
import img2 from '../../assets/imgs/middle/middle-2.jpg'
import img3 from '../../assets/imgs/middle/middle-3.jpg'
import img4 from '../../assets/imgs/middle/middle-4.jpg'

export const Middle = () => {

    // Array com o caminho relativo das imagens
    const imgsMiddle = [img1, img2, img3, img4]

    // Lista os itens da sessão Middle
    function itemsMiddle() {
        return (
            imgsMiddle.map((res, index) => {
                return (
                    <li key={index} className="middle__items">
                        <a href="http://cantao.com.br" target="_blank" rel="noopener noreferrer">
                            <img width="100%" height="auto" src={res} alt={`Imagem do meio ${index}`} />
                        </a>
                    </li>    
                )
            })
        )
    }

    // Função que observa se o usuário está no mobile
    // Mobile: a função renderiza as imagens dentro de uma lib de Carousel
    // Desktop: renderiza a sessão em duas colunas
    function renderSection() {
        return isMobile() ?
            <Carousel
                autoplay={true}
                dragThreshold={0.1}
                wrapAround={true}
                defaultControlsConfig={{
                    pagingDotsStyle: { display: 'none' },
                    nextButtonStyle: stylebuttons.rightButton(),
                    nextButtonText: '>',
                    prevButtonStyle: stylebuttons.leftButton(),
                    prevButtonText: '<',
                }} >
                {itemsMiddle()}
            </Carousel> :
            (<ul className="middle__menu-list px-1">
                {itemsMiddle()}
            </ul>)
    }

    return (
        <section id="middle" className="middle__area container space">
            <h2 className='title'>Middle</h2>
            {renderSection()}
        </section>
    )
}