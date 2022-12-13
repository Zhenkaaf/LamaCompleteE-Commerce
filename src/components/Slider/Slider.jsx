import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState } from 'react';
import './slider.scss';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        'https://images.pexels.com/photos/257849/pexels-photo-257849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        'https://oir.mobi/uploads/posts/2019-12/1576858085_20-26.jpg',
        'https://images.pexels.com/photos/8531188/pexels-photo-8531188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    const prevSlide = () => {
        /* setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1); */
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide} >
                    <WestIcon />
                </div>
                <div className="icon" onClick={nextSlide} >
                    <EastIcon />
                </div>
            </div>
        </div>
    )
}
export default Slider;