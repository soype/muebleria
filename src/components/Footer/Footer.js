import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-8 py-8">
      <div className="footer__inner flex flex-col md:flex-row gap-8 justify-between items-center w-full px-8 m-auto max-w-std">
        <div className="footer__company flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="footer__logo-image"
          />
          <div className='footer__socials flex'>
            <a href="https://www.instagram.com/muebleria/" target="_blank" rel="noreferrer"><Image src="/instagram.png" alt="instagram" width={50} height={50} className="footer__socials-image" /></a>
            <a href="https://www.facebook.com/muebleria/" target="_blank" rel="noreferrer"><Image src="/facebook.png" alt="facebook" width={50} height={50} className="footer__socials-image" /></a>
            <a href="https://www.youtube.com/channel/UC-0-3v-8-u-6-9-4" target="_blank" rel="noreferrer"><Image src="/youtube.png" alt="youtube" width={50} height={50} className="footer__socials-image" /></a>
          </div>
        </div>
        
        <div className="footer__menu">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/">Nosotros</a>
            </li>
            <li>
              <a href="/">Catálogo</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom w-full px-8 m-auto max-w-std">
          <div className="footer__copyright flex flex-col md:flex-row gap-8 justify-between items-center">
            <p>© 2023 Mueblería<br/>Todos los derechos reservados</p>
            <p>Designed by <a href="https://soype.ar" target="_blank" rel="noreferrer">SoyPe</a></p>
          </div>

        </div>
    </footer>
  );
};

export default Footer;
