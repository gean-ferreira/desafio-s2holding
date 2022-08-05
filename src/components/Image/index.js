import { useRef } from 'react';
import './style.css';

export const Image = ({ classNameImg, src, alt, height, width }) => {
    const loading = useRef(true);

    // Esta função é apenas chamada quando a imagem é carregada
    function imgLoad() {
        loading.current(false);
    }

    return (
        <div onLoad={imgLoad}>
            <img height={height} width={width} className={`image-component${classNameImg ? ` ${classNameImg}` : ''}`} src={src} alt={alt} />
        </div>
    );
};
