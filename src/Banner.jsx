import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner=()=>{
  
    return(
        <Carousel className='banner'>
            <Carousel.Item interval={4000} className="banner-content">
                <img
                    className="d-block w-100"
                    src="./img/banner/white_flowers_branches_in_white_background_hd_white_aesthetic.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="banner-heading"></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="banner-content">
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1584610482853-0b47043c4ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tyb3VuZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h1 className="banner-heading"></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner-content">
                <img
                    className="d-block w-100"
                    src="https://burst.shopifycdn.com/photos/hand-holds-daisies-through-paper.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h1 className='banner-heading'></h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner;