import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about from '../assets/images/png/about.png'
const About = () => {
    return (
        <section className='py-5 bg-black'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <h2 className='headings'data-aos="fade-right" data-aos-duration="2000">ABOUT</h2>
                        <p className='paragraphs'data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500ms">Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </Col>
                    <Col lg={6}>
                        <div className='position-relative z-2'data-aos="zoom-in" data-aos-duration="2000">
                            <img className='w-100' src={about} alt="about" />
                            <div className="about_ellipse"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About