import React from 'react'
import { Col, Row } from 'react-bootstrap'
import car from '../assets/images/webp/cars.webp'
import watch from '../assets/images/webp/watch.webp'
import boat from '../assets/images/webp/boats.webp'
const About = () => {
    return (
        <section className='py-5 bg-black'>
            <div className='my_container mt-lg-5 pt-lg-5'>
                <Row className='align-items-center'>
                    <Col lg={6} className='mb-5 mb-lg-0'>
                        <h2 className='headings' data-aos="fade-right" data-aos-duration="2000">ABOUT</h2>
                        <p className='paragraphs' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500ms">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra <span className='d-xl-block'>amet et. Erat nam molestie. Vitae mollis lacus senectus mattis</span> nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </Col>
                    <Col lg={6}>
                        <div id="slideshow" className='position-relative'>
                            <div className="about_ellipse"></div>
                            <div class="entire-content">
                                <div class="content-carrousel">
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={boat} alt='boat' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={watch} alt='watch' /></figure>
                                    <figure class="shadow img_border"><img className='width_sm_100' src={car} alt='car' /></figure>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About