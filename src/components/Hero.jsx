import React from 'react'
import { Container } from 'react-bootstrap'
import twitter from '../assets/images/svg/hero_twitter.svg'
import ship from '../assets/images/svg/hero_ship.svg'
import diamond from '../assets/images/svg/hero_diamond.svg'
import discord from '../assets/images/svg/hero_discord.svg'
import modal from '../assets/images/svg/hero_modal.svg'
import telegram from '../assets/images/svg/hero_telegram.svg'
import pac_kong from '../assets/images/webp/2Pac_kong.webp'
import tiger_kong from '../assets/images/webp/tiger_kong.webp'
import white_kong from '../assets/images/webp/white_kong.webp'
import left_decoration from '../assets/images/webp/decoration1.webp'
import right_decoration from '../assets/images/webp/right_decoration.webp'
const Hero = () => {
    return (
        <section className='hero_bg pb-xl-5 position-relative'>
            <img className='decoration_left_abs width_md_50'data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000" src={left_decoration} alt="decoration" />
            <img className='decoration_right_abs width_md_50'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="3000" src={right_decoration} alt="decoration" />
            <Container className='mb-xl-5 pb-xl-5 position-relative'>
                <div className='d-flex justify-content-end pt-4 mt-2 mb-4 pb-3' data-aos="fade-left" data-aos-duration="2000" data-aos-delay="3000">
                    <button className='buttons'>cONNECT wALLET</button>
                </div>
                <div className='d-flex justify-content-center gap-4 mb-4 pb-4' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="3000">
                    <a href="https://www.twitter.com"><img className='social_icon' src={twitter} alt="social_links" /></a>
                    <a href="https://www.ship.com"><img className='social_icon' src={ship} alt="social_links" /></a>
                    <a href="https://www.diamond.com"><img className='social_icon' src={diamond} alt="social_links" /></a>
                    <a href="https://www.discord.com"><img className='social_icon' src={discord} alt="social_links" /></a>
                    <a href="https://www.modal.com"><img className='social_icon' src={modal} alt="social_links" /></a>
                    <a href="https://www.telegram.com"><img className='social_icon' src={telegram} alt="social_links" /></a>
                </div>
                <div className='d-flex flex-column align-items-center mb-xl-5 pb-xl-5'>
                    <h1 className='headings mb-3 pb-1 text-center' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000">WELCOME
                        <span className='d-sm-block'> TO <span className='text_F1C85D dompkong_line'> DomPKong </span></span></h1>
                    <p className="paragraphs text-center mb-4 pb-2"data-aos="fade-left" data-aos-duration="2000" data-aos-delay="3000"><span className='d-md-block'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et.</span> Erat nam molestie. Vita</p>
                    <div className='d-flex gap-4 mb-xl-5 pb-xl-5 flex-lg-row flex-column z-3'data-aos="fade-down" data-aos-duration="2000" data-aos-delay="3000">
                        <button className='buttons me-2'>Whitepaper</button>
                        <button className='buttons me-2'>Mint</button>
                        <button className='buttons'>Opensea</button>
                    </div>
                </div>
                <img className='pac_kong_abs d-none d-xl-block' src={pac_kong} alt="kong" />
                <img className='tiger_kong_abs d-none d-xl-block' src={tiger_kong} alt="kong" />
                <img className='white_kong_abs d-none d-xl-block' src={white_kong} alt="kong" />
            </Container>
            <div className='d-flex justify-content-end align-items-end d-block d-xl-none'>
                <div className='pac_kong_abs'><img className=' width_xl_100' src={pac_kong} alt="kong" /></div>
                <div className='tiger_kong_abs '><img className='width_xl_100' src={tiger_kong} alt="kong" /></div>
                <div className='white_kong_abs'><img className=' width_xl_100' src={white_kong} alt="kong" /></div>
            </div>
        </section>
    )
}

export default Hero