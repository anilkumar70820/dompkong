import React from 'react'
import { Accordion } from 'react-bootstrap'
import twitter from '../assets/images/svg/faq_twitter.svg'
import discord from '../assets/images/svg/discord.svg'
import diamond from '../assets/images/svg/diamond.svg'
import ship from '../assets/images/svg/ship.svg'
import medium from '../assets/images/svg/medium.svg'
import telegram from '../assets/images/svg/telegram.svg'
import mint_nft_bg from '../assets/images/webp/mint_nft_bg_2.webp'

const Faq = () => {
    return (
        <section className='bg-black faq_bg py-5 position-relative'>
            <img className='mint_nft_bg_2' src={mint_nft_bg} alt="bg" />
            <div className="faq_ellipse_2 d-none d-md-block"></div>
            <div className='my_container mb-lg-5 pb-lg-5 z-1 position-relative'>
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
            </div>
            <div className='pt-lg-5 mt-lg-4 d-flex gap-4 justify-content-center mb-4'>
                <a href="https://www.twitter.com"><img className='social_icon' src={twitter} alt="twitter" /></a>
                <a href="https://www.ship.com"><img className='social_icon' src={ship} alt="ship" /></a>
                <a href="https://www.diamond.com"><img className='social_icon' src={diamond} alt="diamond" /></a>
                <a href="https://www.discord.com"><img className='social_icon' src={discord} alt="discord" /></a>
                <a href="https://www.modal.com"><img className='social_icon' src={medium} alt="medium" /></a>
                <a href="https://www.telegram.com"><img className='social_icon' src={telegram} alt="telegram" /></a>
            </div>
            <div className='faq_line'></div>
            <div className="faq_ellipse d-none d-md-block"></div>
        </section>
    )
}

export default Faq