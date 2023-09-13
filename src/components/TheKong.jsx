import React from 'react'
import { Container } from 'react-bootstrap'
import kong from '../assets/images/png/the_kong.png'
import left_kong_1 from '../assets/images/png/left_kong_1.png'
import left_kong_2 from '../assets/images/png/left_kong_2.png'
import left_kong_3 from '../assets/images/png/left_kong_3.png'
import left_kong_4 from '../assets/images/png/left_kong_4.png'
import left_kong_5 from '../assets/images/png/left_kong_5.png'
import right_kong_1 from '../assets/images/png/right_kong_1.png'
import right_kong_2 from '../assets/images/png/right_kong_2.png'
import right_kong_3 from '../assets/images/png/right_kong_3.png'
import right_kong_4 from '../assets/images/png/right_kong_4.png'
import Slider from 'react-slick'

const TheKong = () => {
  var up_kong = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
    ],
  }
  var down_kong = {
    dots: false,
    arrows: false,
    rtl: true,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    speed: 2500,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
    ]
  }
  return (
    <section className='py-5 bg-black position-relative'>
      <Container className='mb-5 pb-5'>
        <div className='d-xl-block d-none'>
          <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" className='left_kong1_abs img z-3' src={left_kong_1} alt="kongs" />
          <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" className='left_kong2_abs img z-3' src={left_kong_2} alt="kongs" />
          <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1200" className='left_kong3_abs img z-3' src={left_kong_3} alt="kongs" />
          <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1500" className='left_kong4_abs img z-3' src={left_kong_4} alt="kongs" />
          <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1800" className='left_kong5_abs img z-3' src={left_kong_5} alt="kongs" />
        </div>
        <div className='mb-5 pb-5'>
          <h2 className='headings text-center mb-xl-0 mb-5' data-aos="fade-up" data-aos-duration="2000">THE KONGS</h2>
          <Slider {...up_kong} className='d-xl-none d-block'>
            <div><img className='left_kong1_abs img' src={left_kong_1} alt="kongs" /></div>
            <div><img className='left_kong2_abs img' src={left_kong_2} alt="kongs" /></div>
            <div><img className='left_kong3_abs img' src={left_kong_3} alt="kongs" /></div>
            <div><img className='left_kong4_abs img' src={left_kong_4} alt="kongs" /></div>
            <div><img className='left_kong5_abs img' src={left_kong_5} alt="kongs" /></div>
          </Slider>
          <div className='d-flex justify-content-center align-items-center mb-xl-5 pb-xl-5 position-relative z-2'data-aos="zoom-in" data-aos-duration="2000">
            <img className='width_md_100' src={kong} alt="kong" />
            <div className="kong_ellipse"></div>
          </div>
        </div>
        <div className='d-xl-block d-none'>
          <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500" className='right_kong1_abs img z-2' src={right_kong_1} alt="kongs" />
          <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="800" className='right_kong2_abs img z-2' src={right_kong_2} alt="kongs" />
          <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1200" className='right_kong3_abs img z-2' src={right_kong_3} alt="kongs" />
          <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500" className='right_kong4_abs img z-2' src={right_kong_4} alt="kongs" />
          <img data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1800" className='right_kong5_abs img z-2' src={left_kong_1} alt="kongs" />
        </div>
        <Slider {...down_kong} className='d-xl-none d-block'>
          <div><img className='right_kong1_abs img' src={right_kong_1} alt="kongs" /></div>
          <div><img className='right_kong2_abs img' src={right_kong_2} alt="kongs" /></div>
          <div><img className='right_kong3_abs img' src={right_kong_3} alt="kongs" /></div>
          <div><img className='right_kong4_abs img' src={right_kong_4} alt="kongs" /></div>
          <div><img className='right_kong5_abs img' src={left_kong_1} alt="kongs" /></div>
        </Slider>
      </Container>
    </section>
  )
}

export default TheKong