import React from 'react'

const Maps = () => {
  return (
    <div className='flex justify-center items-center w-full h-96 px-28' id='maps'> 
      <iframe
        title="Sairam College Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.060234422768!2d80.1028777748184!3d12.901053287407594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fc6481d46a5%3A0x96a1b74a53ce38af!2sSai%20Leo%20Nagar%2C%20West%20Tambaram%2C%20Poonthandalam%2C%20Chennai%2C%20Tamil%20Nadu%20600132!5e0!3m2!1sen!2sin!4v1694354543214!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Maps