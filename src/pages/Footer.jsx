import React, { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : '',
          textAlign: isMobile ? 'center' : 'left',
          gap: '1.5rem'
        }}
      >
        <div style={{ flex: '1 1 0px', textAlign: isMobile ? 'center' : 'left' }}>
          <img src="/sec-logo-white.png" alt="Logo" style={{ height: '50px' }} />
        </div>
        <div className='flex'>
          <a
            href="https://www.instagram.com/mtechcsesairam/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sairam-m-tech-cse-794733229/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/people/Sairam-MTech-Cse-Integrated/pfbid02qCCtb4YdKPDPsb2KipLiWWw4NsQgDYWFheDDENKtesYcGqAyeWE2zuZJnJbW6AiLl/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@sairam-m.tech-cse5yearinte455"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaYoutube />
          </a>
        </div>
        <div style={{ flex: '1 1 500px', fontSize: '14px' }}>
          © {new Date().getFullYear()} CodeCraft25
          {isMobile ? (
            <>
              <br />
             Sai Leo Nagar,West Tambaram, Chennai
            </>
          ) : (
            <>
              {' | '}Sai Leo Nagar,West Tambaram, Chennai 
              <a
                href="https://sairam.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0af', marginLeft: '5px' }}
              >
                wwww.sairam.edu.in
              </a>
            </>
          )}
        </div>
      </div>
      <style>
        {`
          .social-icon {
            margin: 0 10px;
            color: #fff;
            font-size: 24px;
            transition: transform 0.3s, color 0.3s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .social-icon:hover {
            transform: scale(1.2);
          }
          .social-icon[href*="instagram"]:hover {
            color: #E4405F;
          }
          .social-icon[href*="linkedin"]:hover {
            color: #0077B5;
          }
          .social-icon[href*="facebook"]:hover {
            color: #1877F2;
          }
          .social-icon[href*="youtube"]:hover {
            color: #FF0000;
          }
        `}
      </style>
    </footer>
  )
}

export default Footer