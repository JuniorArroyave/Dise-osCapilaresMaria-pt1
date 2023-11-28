import { Link, animateScroll as scroll } from 'react-scroll'
import './Layout.css'
import { Facebook, Instagram, Whatsapp } from '../icons/icons'
import { Home } from '../../pages/Home/home.jsx'
import { Products } from '../../pages/Products/Products.jsx'
import LogoPeluqueriaa from './img/LogoPeluqueria.jpeg'
import { Services } from '../../pages/Services/Services.jsx'
import React from 'react'



export const Layout = () => {

  const [scrolled, setScrolled] = React.useState(false)

  const handleScroll = () => {
    const isScrolled = window.scrollY > 95
    setScrolled(isScrolled)
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
 
 
  return (
 <>
    <div className={`todo ${scrolled ? 'shadow' : ''}`}>
      <header className={`header ${scrolled ? 'shadow' : ''}`}>
        <div className='container__title'>
          <img style={{ width: '50px', height: '50px' , borderRadius: '50%'}} src={LogoPeluqueriaa} alt="notin" />
          <h1 className='header__title'>Diseños Capilares María</h1>
        </div>
        <nav className='header__menu'>
  <ul className='header__list'>
    <li><Link to='#' spy={true} smooth={true} onClick={() => scroll.scrollToTop()}>Home</Link></li>
    <li><Link to='Services' spy={true} smooth={true}>Sercives</Link></li>
    <li><Link to='Products' spy={true} smooth={true}>Products</Link></li>
    <li><Link to='About' spy={true} smooth={true}>About</Link></li>
  </ul>
</nav>
      </header>
      <main>
      <section id='Home'> <Home/> </section>
      <section id='Services'><Services/></section>
      <section id='Products'><Products/></section>
      </main>
      <footer className='footer'>
        <div className='container__footer'>
          <div className='redes'>
            <Link to='https://www.facebook.com/profile.php?id=100054311451751&mibextid=ZbWKwL'><Facebook /></Link>
            <Link to='Instagram.com'><Instagram /></Link>
            <Link to='https://wa.link/rj66x0'><Whatsapp /></Link>
          </div>
          <div className='information'>
            <p className='information__footer'>John Jairo Arroyave</p>
            <p className='information__footer'>©VirtualSchedule</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
