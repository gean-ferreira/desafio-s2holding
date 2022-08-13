import { useEffect, useState } from 'react';
import './style.css';
import { useViewPort } from '../../assets/scripts/hooks/useViewPort';
import { CardProduct } from '../CardProduct';
import Carousel from 'nuka-carousel';
import { style } from '../../assets/scripts/index';
import { Loading } from '../Loading';

export const Products = () => {
    const { isMobile } = useViewPort();
    // Vetor dos produtos
    const [products, setProducts] = useState([]);
    // Variavel que determina quantos produtos irão ser renderizados na aplicação
    // a partir da tela > 768px
    const [currentProducts, setCurrentProducts] = useState(8);
    // Loading
    const [loading, setLoading] = useState(true);
    // Loading do InfinityScroll
    const [infinityLoading, setInfinityLoading] = useState(null);
    // Url fornecida pelo desafio
    // Caso seja desktop irá renderizar de forma dinamica por meio do infinityScroll
    const urlProducts = isMobile
        ? 'https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=:65&_from=1&_to=50'
        : `https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=:65&_from=1&_to=${currentProducts}`;

    // Ciclo de vida do React
    // Executa esta função toda vez que o componente for carregado
    useEffect(() => {
        setInfinityLoading(true);
        // Requisição dos produtos
        fetch(urlProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
                setInfinityLoading(false);
            });
    }, [currentProducts, urlProducts]);

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
                {productList()}
            </Carousel>
        ) : (
            <ul className='products__menu-list px-1'>{productList()}</ul>
        );
    }

    // O infirtyScroll é renderizado apenas para viewports >768px
    function renderWard() {
        return !isMobile && <div id='ward'>{infinityLoading && <Loading />}</div>;
    }

    // Hook InfinityScroll
    useEffect(() => {
        if (products.length && !isMobile) {
            const intersectionObserver = new IntersectionObserver(entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    // API apenas renderiza máximo 50 produtos
                    // Por isso, caso o valor corrente da variável currentProducts for maior que 42
                    // No próximo render, irá ser 50
                    setCurrentProducts(currentProducts => (currentProducts > 42 ? 50 : currentProducts + 8));
                }
            });
            intersectionObserver.observe(document.getElementById('ward'));
            return () => intersectionObserver.disconnect();
        }
    }, [products.length, isMobile]);

    return (
        <main id='products' style={{ minHeight: style.sectionHeightOnLoading(loading) }} className='products__area container space'>
            <h1 className='title'>Produtos</h1>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {renderSection()}
                    {renderWard()}
                </>
            )}
        </main>
    );
};
