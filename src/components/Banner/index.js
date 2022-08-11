import imgMob from '../../assets/imgs/banners/banner-full-mobile.jpg';
import imgDesk from '../../assets/imgs/banners/banner-full-desktop.jpg';
import { useViewPort } from '../../assets/scripts/hooks/useViewPort';

export const Banner = () => {
    const { isMobile } = useViewPort();

    return (
        <section id='banner'>
            <a href='https://cantao.com.br' target='_self' rel='noopener noreferrer'>
                <img
                    srcSet={`${imgMob} 767w, ${imgDesk} 768w`}
                    alt={'banner'}
                    width={'100%'}
                    style={{ minHeight: isMobile ? '620px' : '665px' }}
                />
            </a>
        </section>
    );
};
