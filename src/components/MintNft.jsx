import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import bottol from '../assets/images/webp/bottol.webp'
import glass from '../assets/images/svg/glass.svg'
import mint_nft_bg from '../assets/images/webp/mint_nft_bg_2.webp'

const MintNft = () => {
    const [plus, setPlus] = useState(0);
    function incriment() {
        setPlus(plus + 1)
    }
    function decrement() {
        if (plus > 0) {
            setPlus(plus - 1)
        } else {
            setPlus(plus)
        }
    }
    if (plus === 10) {
        document.getElementById("zero").style.display = "none"
    } else if (plus === 9) {
        document.getElementById("zero").style.display = "block"
    }

    return (
        <section className='py-5 bg-black position-relative mint_nft_bg'>
            <img className='mint_nft_bg_2' src={mint_nft_bg} alt="bg" />
            <div className="mint_nft_ellipse_1 d-none d-md-block"></div>
            <div className="mint_nft_ellipse_2 d-none d-md-block"></div>
            <div className='my_container'>
                <Row className='align-items-center z-1 position-relative'>
                    <Col lg={6} className='d-flex justify-content-center justify-content-lg-start align-items-end mb-5 mb-lg-0'>
                        <img className=' width_md_50' src={bottol} alt="bottol" />
                        <div>
                            <img className=' width_md_100' src={glass} alt="glass" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h2 className='headings mb-5 pb-1' data-aos="fade-left" data-aos-duration="2000">Mint NFT</h2>
                        <div className='d-flex justify-content-between mb-3'>
                            <div>
                                <h4 className='fw-900 fs_lg ff_montserrat text_ffffff mb-3' data-aos="fade-left" data-aos-duration="2000">9999</h4>
                                <p className='fs_sm fw-normal ff_montserrat text_ffffff mb-4 pb-2' data-aos="fade-left" data-aos-duration="2000">of 10,000 minted</p>
                                <h4 className='fw-900 fs_lg ff_montserrat text_ffffff mb-3' data-aos="fade-left" data-aos-duration="2000">Max 9</h4>
                                <p className='fs_sm fw-normal ff_montserrat text_ffffff mb-4 pb-2' data-aos="fade-left" data-aos-duration="2000">NFTs per transaction</p>
                            </div>
                            <div>
                                <h4 className='fw-900 fs_lg ff_montserrat text_ffffff mb-3' data-aos="fade-left" data-aos-duration="2000">.2 ETH</h4>
                                <p className='fs_sm fw-normal ff_montserrat text_ffffff mb-4 pb-2' data-aos="fade-left" data-aos-duration="2000">per NFT</p>
                                <h4 className='fw-900 fs_lg ff_montserrat text_ffffff mb-3' data-aos="fade-left" data-aos-duration="2000">Max 2</h4>
                                <p className='fs_sm fw-normal ff_montserrat text_ffffff mb-4 pb-2' data-aos="fade-left" data-aos-duration="2000">Transaction per wallet</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-4 pb-1 justify-content-center justify-content-lg-start' data-aos="fade-left" data-aos-duration="2000">
                            <button onClick={decrement} className='count_box_btn ff_montserrat fs_lg fw-900 text_000000 me-2'>-</button>
                            <h2 className='  counter_box ff_montserrat fs_lg fw-900 text_ffffff me-2 mb-0 width_sm_100'><span id='zero'>0</span>{plus}</h2>
                            <button onClick={incriment} className='count_box_btn ff_montserrat fs_lg fw-900 text_000000'>+</button>
                        </div>
                        <div className='d-flex justify-content-center justify-content-lg-start' data-aos="fade-right" data-aos-duration="2000"><button className='mint_now_btn width_sm_100 ff_Azo_Sans_Uber fw-normal fs_md text_000000'>MINT NOW</button></div>
                    </Col>
                </Row>

            </div>
        </section >
    )
}

export default MintNft