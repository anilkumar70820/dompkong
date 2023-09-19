import React from 'react'
import {Row, Col } from 'react-bootstrap'
import jaylon from '../assets/images/webp/jaylon.webp'
import instagram from '../assets/images/svg/instagram.svg'
import twitter from '../assets/images/svg/twitter.svg'
import talan from '../assets/images/webp/talan.webp'
import alfonso from '../assets/images/webp/alfonso.webp'

const MeetTheTeam = () => {
  return (
    <section className='py-5 bg-black'>
      <div className='my_container'>
        <h2 className='headings text-center mb-5'data-aos="fade-right" data-aos-duration="2000">MEET THE TEAM</h2>
        <div className='hr_line'data-aos="fade-left" data-aos-duration="2000"></div>
        <Row>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-bold ff_montserrat text_ffffff mt-4'data-aos="fade-right" data-aos-duration="2000">Jaylon Schleifer</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-right" data-aos-duration="2000">Carter Septimus</p>
            <div className='d-flex justify-content-lg-start justify-content-center'data-aos="zoom-in" data-aos-duration="2000">
              <img className='img' src={jaylon} alt="man" />
            </div>
          </Col>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-semibold ff_montserrat text_ffffff mt-4'data-aos="fade-left"data-aos-delay="100" data-aos-duration="2000">@Jaylon Schleifer</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-left"data-aos-delay="500" data-aos-duration="2000">Nearly two decades in Business</p>
            <p className='paragraphs mb-2'data-aos="fade-left"data-aos-delay="900" data-aos-duration="2000">Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. </p>
            <p className='paragraphs'data-aos="fade-left"data-aos-delay="1300" data-aos-duration="2000">Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. </p>
            <div className='d-flex gap-3 mt-3 pt-1'data-aos="fade-left" data-aos-delay="500" data-aos-duration="2000">
            <a href="https://www.instagram.com"><img className='social_shadow' src={instagram} alt="instagram" /></a>
              <a href="https://www.twitter.com"><img className='social_shadow' src={twitter} alt="twitter" /></a>
            </div>
          </Col>
          <div className='hr_line mb-4 mt-5'></div>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-bold ff_montserrat text_ffffff mt-4'data-aos="fade-right" data-aos-duration="2000">Talan Passaquindici Arcand</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-right" data-aos-duration="2000">Jakob Ekstrom Bothman</p>
            <div className='d-flex justify-content-lg-start justify-content-center'data-aos="zoom-in" data-aos-duration="2000">
              <img className='img' src={talan} alt="man" />
            </div>
          </Col>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-semibold ff_montserrat text_ffffff mt-4'data-aos="fade-left" data-aos-duration="2000">@Talan Passaquindici Arcand</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-left" data-aos-duration="2000">Invester  & International Top Model</p>
            <p className='paragraphs mb-2'data-aos="fade-left" data-aos-duration="2000">Neque hendrerit lectus neque molestie facilisis. Faucibus arcu eget facilisis nisl id ultricies. Aliquet eget scelerisque posuere habitant mauris quis ridiculus rutrum consectetur.  </p>
            <p className='paragraphs'data-aos="fade-left" data-aos-duration="2000">Pretium vitae nunc proin nullam turpis eu blandit. Nibh ultricies gravida vestibulum nec ultricies. Eleifend egestas non nunc, nisl tristique adipiscing non diam fermentum.  </p>
            <div className='d-flex gap-3 mt-3 pt-1'data-aos="fade-left" data-aos-duration="2000">
            <a href="https://www.instagram.com"><img className='social_shadow' src={instagram} alt="instagram" /></a>
              <a href="https://www.twitter.com"><img className='social_shadow' src={twitter} alt="twitter" /></a>
            </div>
          </Col>
          <div className="hr_line mb-4 mt-5"></div>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-bold ff_montserrat text_ffffff mt-4'data-aos="fade-right" data-aos-duration="2000">Alfonso Franci</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-right" data-aos-duration="2000">Alfonso Dokidis</p>
            <div className='d-flex justify-content-lg-start justify-content-center'data-aos="zoom-in" data-aos-duration="2000">
              <img className='img' src={alfonso} alt="man" />
            </div>
          </Col>
          <Col lg={6} className='pb-3'>
            <h4 className='mb-3 fs_md fw-semibold ff_montserrat text_ffffff mt-4'data-aos="fade-left" data-aos-duration="2000">@Alfonso Franci</h4>
            <p className='mb-4 pb-2 fs_2xmd fw-normal text_ffffff ff_montserrat'data-aos="fade-left" data-aos-duration="2000">Nearly two decades in Business</p>
            <p className='paragraphs mb-2'data-aos="fade-left" data-aos-duration="2000">A ut sagittis, purus sit integer suspendisse lacus quam auctor. Interdum venenatis, sed ligula purus erat. A hac faucibus blandit euismod molestie amet nibh scelerisque.  </p>
            <p className='paragraphs'data-aos="fade-left" data-aos-duration="2000">Fermentum aliquam fames suscipit scelerisque integer mauris sollicitudin. Tellus mattis egestas molestie elementum, elementum. Urna, in molestie ac quam nisl orci mattis.  </p>
            <div className='d-flex gap-3 mt-3 pt-1'data-aos="fade-left" data-aos-duration="2000">
              <a href="https://www.instagram.com"><img className='social_shadow' src={instagram} alt="instagram" /></a>
              <a href="https://www.twitter.com"><img className='social_shadow' src={twitter} alt="twitter" /></a>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default MeetTheTeam