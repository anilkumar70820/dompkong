import React from 'react'
import {Row, Col } from 'react-bootstrap'
import { CardMaping } from './CardMaping'

const Utilities = () => {
    return (
        <section className='bg-black py-5'>
            <div className='my_container'>
                <h2 className='headings text-center mb-5 pb-2' data-aos="fade-right" data-aos-duration="2000">UTILITIES</h2>
                <Row>
                    {CardMaping.map((data) => {
                        return (
                            <Col key={data.id} xl={4} md={6} className='mb-4 mb-xl-0 d-flex justify-content-center' data-aos="flip-left" data-aos-duration="2000">
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
                </Row>
            </div>
        </section>
    )
}

export default Utilities