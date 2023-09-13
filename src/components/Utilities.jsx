import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { File } from './Icons'
// import File from '../assets/images/svg/document.svg'
import { CardMaping } from './CardMaping'

const Utilities = () => {
    return (
        <section className='bg-black py-5'>
            <Container>
                <h2 className='headings text-center mb-5 pb-2'data-aos="fade-right" data-aos-duration="2000">UTILITIES</h2>
                <Row>
                    {CardMaping.map((data) => {
                        return (

                            <Col key={data.id} lg={4} md={6} className='mb-4 mb-lg-0'data-aos="flip-left" data-aos-duration="2000">
                                <div className='utilities_cards position-relative overflow-hidden'>
                                    <div className="utilities_ellipses_abs_left utilities_ellipses"></div>
                                    <div className="utilities_ellipses_abs_right utilities_ellipses"></div>
                                    <div className='mb-3 d-flex justify-content-center'>
                                        {data.img}
                                    </div>
                                    <h3 className='fs_md fw-semibold text_ffffff ff_montserrat text-center'>{data.heading}</h3>
                                    <p className='paragraphs text-center mb-0'>{data.paragraph}</p>
                                </div>
                            </Col>
                        );
                    },
                    )}
                    {/* <Col lg={4} md={6}>
                        <div className='utilities_cards'>
                            <div className='mb-3 d-flex justify-content-center'>
                                <img src={File} alt="document" />
                            </div>
                            <h3 className='fs_md fw-semibold text_ffffff ff_montserrat text-center'>Document</h3>
                            <p className='paragraphs text-center mb-0'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default Utilities