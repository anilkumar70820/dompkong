import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import roadmap_kong from '../assets/images/webp/roadmap_kong.webp'
import roadmap_line from '../assets/images/webp/roadmap_line.webp'
import { Roadmapline1, Roadmapline2, Roadmapline3, Roadmapline4, Roadmapline5 } from './Icons'
const Roadmap = () => {
  return (
    <section className='py-5 bg-black'>
      <Container>
        <h2 className='headings text-center mb-5 pb-4'>ROADMAP</h2>
        <Row className=' align-items-center'>
          <Col lg={4} className='position-relative d-flex justify-content-center align-items-center mb-5 mb-lg-0'>
            <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" src={roadmap_kong} alt="kong" />
            <img data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" className='line_abs  d-none d-lg-block' src={roadmap_line} alt="line" />
          </Col>
          <Col lg={8} className='roadmap_line'>
            <div className='ms-lg-4 ps-lg-3'>
              <div className='d-flex align-items-center mb-4 pb-3 position-relative roadmap z-2'>
                <span className='roadmap_dot dot_abs1 d-none d-xl-block'></span>
                <span className='roadmap_items_line d-none d-xl-block'><Roadmapline1 /></span>
                <div className='pe-3 me-4 mb-4 mb-sm-0'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500"><h2 className='fs_2xmd text_000000 fw-900 ff_montserrat mb-0 percentage_circle'>20%</h2></div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500">
                  <h3 className='fw-normal fs_2xmd ff_Azo_Sans_Uber text_ffffff mb-2'>Phase 1</h3>
                  <p className='fw-normal fs_sm ff_montserrat text_ffffff mb-0'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu <span className='d-xl-block'> viverra ullamcorper condimentum massa laoree</span></p>
                </div>
              </div>
              <div className=' d-flex align-items-center mb-4 pb-3 ms-lg-5 ps-lg-2 position-relative roadmap z-2'>
                <span className='roadmap_dot dot_abs2 d-none d-xl-block'></span>
                <span className='roadmap_items_line_2 d-none d-xl-block'><Roadmapline2 /></span>
                <div className='pe-3 me-4 mb-4 mb-sm-0'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000"><h2 className='fs_2xmd text_000000 fw-900 ff_montserrat mb-0 percentage_circle'>40%</h2></div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000">
                  <h3 className='fw-normal fs_2xmd ff_Azo_Sans_Uber text_ffffff mb-2'>Phase 2</h3>
                  <p className='fw-normal fs_sm ff_montserrat text_ffffff mb-0'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna <span className='d-xl-block'> euismod sed ultricies arcu ullamcorper</span> </p>
                </div>
              </div>
              <div className=' d-flex align-items-center mb-4 pb-3 ms-lg-5 ps-lg-5 position-relative roadmap z-2'>
                <span className='roadmap_dot dot_abs3 d-none d-xl-block'></span>
                <span className='roadmap_items_line_3 d-none d-xl-block'><Roadmapline3 /></span>
                <div className='pe-3 me-4 ms-lg-3 mb-4 mb-sm-0'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500"><h2 className='fs_2xmd text_000000 fw-900 ff_montserrat mb-0 percentage_circle'>60%</h2></div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1500">
                  <h3 className='fw-normal fs_2xmd ff_Azo_Sans_Uber text_ffffff mb-2'>Phase 3</h3>
                  <p className='fw-normal fs_sm ff_montserrat text_ffffff mb-0'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut <span className='d-xl-block'> elit nibh faucibus mauris.</span> </p>
                </div>
              </div>
              <div className=' d-flex align-items-center mb-4 pb-3 ms-lg-5 ps-lg-2 position-relative roadmap z-2'>
                <span className='roadmap_dot dot_abs4 d-none d-xl-block'></span>
                <span className='roadmap_items_line_4 d-none d-xl-block'><Roadmapline4 /></span>
                <div className='pe-3 me-4 mb-4 mb-sm-0'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2000"><h2 className='fs_2xmd text_000000 fw-900 ff_montserrat mb-0 percentage_circle'>80%</h2></div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000">
                  <h3 className='fw-normal fs_2xmd ff_Azo_Sans_Uber text_ffffff mb-2'>Phase 4</h3>
                  <p className='fw-normal fs_sm ff_montserrat text_ffffff mb-0'>Ut egestas lacus nec varius blandit volutpat, malesuada Nisl.<span className='d-xl-block'> Nisl mattis convallis lacus tristique.</span></p>
                </div>
              </div>
              <div className=' d-flex align-items-center position-relative roadmap z-2'>
                <span className='roadmap_dot dot_abs5 d-none d-xl-block'></span>
                <span className='roadmap_items_line_5 d-none d-xl-block'><Roadmapline5 /></span>
                <div className='pe-3 me-4 mb-4 mb-sm-0'data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2200"><h2 className='fs_2xmd text_000000 fw-900 ff_montserrat mb-0 percentage_circle'>100%</h2></div>
                <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2300">
                  <h3 className='fw-normal fs_2xmd ff_Azo_Sans_Uber text_ffffff mb-2'>Phase 5</h3>
                  <p className='fw-normal fs_sm ff_montserrat text_ffffff mb-0'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut <span className='d-xl-block'> dignissim mauris eu sed nisl neque.</span> </p>
                </div>
              </div>
            </div>
          </Col>
          <div className='mt-5 p-4 d-flex justify-content-center'><button className='buttons'> Read Our Whitepaper</button></div>
        </Row>
      </Container>
    </section>
  )
}

export default Roadmap