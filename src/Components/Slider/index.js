import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import { Link } from 'react-router-dom';
import tmdbApi, {MOVIETYPE, CATEGORY} from '../../api/tmdbApi';
import apiConfig from '../../api/ApiConfig';
import './slider.css';
// import './../Button/button.css'
import Button from '../Button'


const Index = () => {
    SwiperCore.use([Autoplay]);
    const random = Math.floor(Math.random() * 10)
    const [slides, setSlides] = useState([])
    useEffect(() =>{
        const getMovieSlides = async () => {
            const result = await tmdbApi.getMovieList(CATEGORY.movie, MOVIETYPE.popular, {page:1})
            setSlides(result.results.splice(random,4))
        }
        getMovieSlides()
    }, [])

    return (
        <>
            <Swiper
                spaceBetween={30} 
                centeredSlides={true} 
                autoplay={{
                "delay": 5000,
                "disableOnInteraction": false
                }} 
                // modules={[Autoplay]}
                // grabCursor={true}
                // spaceBetween={0}
                // slidesPreView={1}
                // slidesPerGroup={1}
                // autoplay={{delay: 3000}}
            >
                    {slides.map(item => (
                        <SwiperSlide key={item.id}>
                            <Slide category={CATEGORY.movie} item={item}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
        
        </>
            

    );
};

const Slide = props => {
    return(
        <div className="slider" style={{backgroundImage: `url(${apiConfig.originalImagePath(props.item.backdrop_path)})`}}>
            <div className="slider__content">
                <div className="slider__info">
                    <h1 className="slider__info-title">{props.item.original_title}</h1>
                    <p className="slider__info-overview">{props.item.overview}</p>  
                    <div className="slider__btn">
                        <Button type='btn'>
                            <Link to={`/${props.category}/detail/${props.item.id}`}>
                            Whatch Now
                            </Link>
                        </Button>
                        <Button type='btn'>
                            <Link to={`/${props.category}/detail/${props.item.id}`}>
                            View Info
                            </Link>
                        </Button>
                    </div>                                   
                </div>
                <div className="slider__poster">
                    <img className="" src={apiConfig.w500lImagePath(props.item.poster_path)} alt=""/>
                </div>
            </div>
        </div>
    )
}
  
export default Index;