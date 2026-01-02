import React from 'react'

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-section">
          <h3>MyBrand</h3>
          <p>Building simple and clean React projects.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Documentation</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer


// import React from 'react'
// import Logo from "../assets/Logo.svg";
// import { BsTwitter } from 'react-icons/bs';
// import { SiLinkedin } from 'react-icons/si';
// import { BsYoutube } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
// const Footer = () => {
//   return (
//     <div className='footer-wrapper'>
//         <div className='footer-section-one'>
//             <div className='footer-logo-containar'>
//                 <img src={Logo} alt="" />
//             </div>
//             <div className='footer-icons'>
//                 <BsTwitter/>
//                 <BsYoutube/>
//                 <SiLinkedin/>
//                 <FaFacebookF/>
//             </div>
//         </div>
//         <div className='footer-section-two'>
//             <div className='footer-section-columns'>
//                 <span>Quality</span>
//                  <span>Help</span>
//                  <span>Quality</span>
//                  <span>Help</span>
//                  <span>Quality</span>
//                  <span>Help</span>
//             </div>
//             <div className='footer-section-columns'>
//                 <span>244-5333-7783</span>
//                 <span>hello@food.com</span>
//                 <span>244-5333-7783</span>
//                 <span>hello@food.com</span>
//             </div>
//             <div className='footer-section-columns'>
//                 <span>Term & conditions</span>
//                 <span>privacy & polciy</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer