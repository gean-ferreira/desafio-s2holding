import './style.css';
import { convertToReal } from '../../assets/scripts/functions';

export const CardProduct = ({ link, image, name, price }) => {
  return (
    <div className='product__container'>
      <a className='link__product' href={link} target='_self' rel='noopener noreferrer'>
        <img src={image} alt={`Fotos de ${name}`} width={'100%'} height={'auto'} />
        <h5 className='title__product'>{name}</h5>
        <p className='price__product'>{convertToReal(price)}</p>
      </a>
    </div>
  );
};
