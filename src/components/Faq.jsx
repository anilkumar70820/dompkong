import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import twitter from '../assets/images/svg/faq_twitter.svg'
import discord from '../assets/images/svg/discord.svg'
import diamond from '../assets/images/svg/diamond.svg'
import ship from '../assets/images/svg/ship.svg'
import medium from '../assets/images/svg/medium.svg'
import telegram from '../assets/images/svg/telegram.svg'

const Faq = () => {
    return (
        <section className='bg-black faq_bg py-5 position-relative'>
            <div className="faq_ellipse_2 d-none d-md-block"></div>
            <Container className='mb-lg-5 pb-lg-5'>
                <h2 className='headings text-center mb-5 pb-2'data-aos="fade-up" data-aos-duration="2000">FAQs</h2>
                <div className='d-flex justify-content-center mb-5 pb-5'>
                    <Accordion defaultActiveKey="0" className='width-896 mb-5 pb-5'data-aos="zoom-in" data-aos-duration="2000">
                        <Accordion.Item eventKey="1" className='w-100 bg-transparent'>
                            <Accordion.Header>Arcu faucibus diam feugiat magna etiam.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='w-100 bg-transparent'>
                            <Accordion.Header>Fermentum tortor aenean.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='w-100 bg-transparent'>
                            <Accordion.Header>Dictum est amet sollicitudin.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='w-100 bg-transparent'>
                            <Accordion.Header>Sed vulputate mi faucibus.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='w-100 bg-transparent'>
                            <Accordion.Header>Commodo placerat ultricies.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='w-100 bg-transparent'>
                            <Accordion.Header>Nunc amet cursus morbi donec.</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_sm fw-normal ff_montserrat'>
                                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            <div className='pt-lg-5 mt-lg-4 d-flex gap-4 justify-content-center mb-4'>
                <img className='social_icon' src={twitter} alt="twitter" />
                <img className='social_icon' src={ship} alt="ship" />
                <img className='social_icon' src={diamond} alt="diamond" />
                <img className='social_icon' src={discord} alt="discord" />
                <img className='social_icon' src={medium} alt="medium" />
                <img className='social_icon' src={telegram} alt="telegram" />
            </div>
            <div className='faq_line'></div>
            <div className="faq_ellipse d-none d-md-block"></div>
        </section>
    )
}

export default Faq