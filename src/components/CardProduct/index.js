import './style.css';

export const CardProduct = ({ link, image, name, price }) => {
  return (
    <a
      className='link__card-product'
      href={link}
      target='_self'
      rel='noopener noreferrer'
    >
      <div className='product__container'>
        <img
          src={image}
          alt={`Fotos de ${name}`}
          width={200}
          height={300}
        />
        <h5 className='title__product'>{name}</h5>
        <p className='price__product'>{price}</p>
      </div>
    </a>
  );
};
