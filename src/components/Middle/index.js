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

    return (
        <section id="middle" className="middle__area container space">
            <ul className="middle__menu-list px-1">
                {itemsMiddle()}
            </ul>
        </section>
    )
}