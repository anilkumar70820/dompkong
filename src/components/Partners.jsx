import React from 'react'
import partner_1 from '../assets/images/svg/partner_1.svg'
import partner_2 from '../assets/images/svg/partner_2.svg'
import partner_3 from '../assets/images/svg/partner_3.svg'
import partner_4 from '../assets/images/svg/partner_4.svg'
import partner_line from '../assets/images/svg/partner_line.svg'


const Partners = () => {
  return (
    <section className='py-5 bg-black'>
      <div className='my_container'>
        <h2 className='headings text-center'data-aos="fade-right" data-aos-duration="2000">PARTNERS</h2>
        <div className='mt-5 pt-1 d-flex justify-content-between overflow-x-scroll' data-aos="zoom-in" data-aos-duration="2000">
          <img src={partner_1} alt="partner" />
          <img src={partner_line} alt="line" />
          <img src={partner_2} alt="partner" />
          <img src={partner_line} alt="partner_line" />
          <img src={partner_3} alt="partner" />
          <img src={partner_line} alt="partner_line" />
          <img src={partner_4} alt="partner" />
        </div>
      </div>
    </section>
  )
}

export default Partners