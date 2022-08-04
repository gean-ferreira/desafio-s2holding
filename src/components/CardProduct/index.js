import './style.css';
import { functions } from '../../assets/scripts/index';

export const CardProduct = ({ link, image1, image2, name, price, installment, installmentPrice }) => {
    return (
        <a className='link__product' href={link} target='_self' rel='noopener noreferrer'>
            {/* Container pai das imagens da animação 3D */}
            <div className='flip-inner'>
                <div className='flip-front'>
                    <img className='image__product' src={image1} alt={`Fotos de ${name}`} width={'100%'} height={'auto'} />
                </div>
                <div className='flip-back'>
                    <img className='image__product' src={image2} alt={`Fotos de ${name}`} width={'100%'} height={'auto'} />
                </div>
            </div>
            {/* Imagem para dimensionar os flips */}
            <img className='image__product' src={image1} alt={`Fotos de ${name}`} width={'100%'} height={'auto'} style={{ opacity: '0' }} />
            {/* Detalhes do produto */}
            <div className='details__product'>
                <h5 className='title__details'>{name}</h5>
                <div className='price__details'>
                    {/* Preço total do produto */}
                    <span className='price__price'>{functions.convertToReal(price)}</span>
                    {/* Parcelamento */}
                    <span className='price__installments'>{installment}X {functions.convertToReal(installmentPrice)}</span>
                </div>
            </div>
        </a>
    );
};
