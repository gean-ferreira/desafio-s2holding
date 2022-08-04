import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { CardProduct } from '../CardProduct';
import Carousel from 'nuka-carousel';
import { functions, style } from '../../assets/scripts/index';

export const Products = () => {
    // Constante que armazenará todos os produtos
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(functions.isMobile());
    // Url fornecida pelo desafio
    const urlProducts = 'https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fC:65&_from=1&_to=50';

    // Função que faz a requisição dos produtos
    const getAnswer = async () => {
        await axios({
            url: urlProducts,
            method: 'GET',
        }).then(response => {
            setProducts(response.data);
        });
    };

    // Ciclo de vida do React
    // Executa esta função toda vez que o componente for carregado
    useEffect(() => {
        getAnswer();
    }, []);

    // Função lista cada produto
    function productList() {
        return products.map((response, index) => {
            const { productName, link } = response;
            const [img1, img2] = response.items[0].images;
            const { Price } = response.items[0].sellers[0].commertialOffer;
            const { Installments } = response.items[0].sellers[0].commertialOffer;
            return (
                <li key={index}>
                    <CardProduct
                        link={link}
                        image1={img1.imageUrl}
                        image2={img2.imageUrl}
                        name={productName}
                        price={Price}
                        // Verifica se há método de parcelamento
                        // Caso o array installment vier null, o número de parcelas será setado para 2
                        // E o preço da parcela será o preço total dividido por 2
                        // Apenas para fins visuais
                        installment={Installments.length >= 1 ? Installments[1].NumberOfInstallments : 2}
                        installmentPrice={Installments.length >= 1 ? Installments[1].Value : Price / 2}
                    />
                </li>
            );
        });
    }

    // Mobile: a função renderiza as imagens dentro de uma lib de Carousel
    // iPad: renderiza 3 produtos por linha
    // Desktop: renderiza 4 produtos por linha
    function renderSection() {
        return show ? (
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
                {productList()}
            </Carousel>
        ) : (
            <ul className='products__menu-list px-1'>{productList()}</ul>
        );
    }

    // Função que observa se o usuário irá diminuir a tela de tamanho
    window.addEventListener('resize', () => {
        setShow(functions.isMobile());
    });

    return (
        <main id='products' className='products__area container space'>
            <h1 className='title'>Produtos</h1>
            {renderSection()}
        </main>
    );
};
