import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dolmepiedra</h3>
            <p>Muebles de piedra natural con diseño único</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <div className="contact-links">
              <a href="https://www.instagram.com/dolmenpiedra" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="bi bi-instagram"></i>
                <span>@dolmepiedra</span>
              </a>
              <a href="mailto:info@dolmepiedra.com" className="contact-link">
                <i className="bi bi-envelope"></i>
                <span>info@dolmepiedra.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dolmepiedra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
