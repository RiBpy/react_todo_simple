import React from 'react'

 const Footer = () => {
   let footerStyle = {
     zIndex: '2',
     position:"relative",
     bottom:"0",
     width:"100%",
   }
  return (
    <footer className='py-2 mt-3 text-light text-center bg-dark' style={footerStyle}>
      <p>Copyright &copy;RiBpy</p>
    </footer>
  )
}
export default Footer;