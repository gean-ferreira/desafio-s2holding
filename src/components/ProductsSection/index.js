import { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css';

export const Products = () => {

    const [products, setProducts] = useState([])
    // const urlProducts = 'https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fC:65&_from=1&_to=50'
    const urlProducts = "https://jsonplaceholder.typicode.com/users/1/albums"

    const getAnswer = async () => {
        
        //Com axios
        const response = await axios({
            url: urlProducts, method: 'GET'
            , headers: {
                "content-type": "application/json; charset=utf-8",
                'Access-Control-Allow-Origin': 'no-cors'
            }
        })
        console.log(response)

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
