import './style.css';
import { convertToReal } from '../../assets/scripts/functions';

export const CardProduct = ({ link, image1, image2, name, price }) => {
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
                <span className='price__details'>{convertToReal(price)}</span>
            </div>
        </a>
    );
};
