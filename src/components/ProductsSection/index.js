import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

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

        // Com fetch
        // const resp = await fetch(urlProducts)
        // const json = await resp.json()
        // console.log(json)
    }

    useEffect(() => {
        getAnswer()
    }, [])


    return (
        <main id="products" className="products__area container space">
            <h1 className='title'>Produtos</h1>
            <ul className="products__menu-list">
                <li>produto</li>
                <li>produto</li>
                <li>produto</li>
                <li>produto</li>
            </ul>
        </main>
    )
}
