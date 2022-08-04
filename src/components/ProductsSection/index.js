import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { CardProduct } from '../CardProduct';

export const Products = () => {
  // Constante que armazenará todos os produtos
  const [products, setProducts] = useState([]);
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
  function itemsMiddle() {
    return products.map((response, index) => {
      const { productName, link } = response;
      const [img1, img2] = response.items[0].images;
      const { Price } = response.items[0].sellers[0].commertialOffer;
      return (
        <li key={index}>
          <CardProduct link={link} image1={img1.imageUrl} image2={img2.imageUrl} name={productName} price={Price} />
        </li>
      );
    });
  }

  return (
    <main id='products' className='products__area container space'>
      <h1 className='title'>Produtos</h1>
      <ul className='products__menu-list px-1'>{itemsMiddle()}</ul>
    </main>
  );
};
