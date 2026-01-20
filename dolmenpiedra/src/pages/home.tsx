import { useEffect } from 'react';
import '../styles/home.css';
import mesaSalon from '../../public/images/mesa_salon_travertino.jpeg';
import tapasMesas from '../../public/images/tapas_mesas_travertino.jpeg';
import mesaVelador from '../../public/images/mesa_velador.jpeg';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Bienvenido a Dolmenpiedra</h1>
      </div>

      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="image-container left">
            <img src={mesaSalon} alt="Artesanía familiar Dolmenpiedra" />
          </div>
          <div className="text-container">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Dolmenpiedra es una empresa familiar con una profunda pasión por la piedra. 
              Nuestro proyecto nace del amor por los materiales nobles y el deseo de crear 
              objetos que perduren en el tiempo. Nos dedicamos a la creación artesanal de 
              mobiliario de lujo, transformando bloques de mármol, travertino y caliza en 
              piezas que son verdaderas obras de arte para el hogar.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="text-container">
            <h2>¿Dónde Trabajamos?</h2>
            <p>
              Nuestro corazón y taller se encuentran en Esquivias, Toledo, un lugar con 
              historia donde mantenemos viva la tradición del trabajo en piedra. Aunque nuestras 
              raíces son toledanas, en Dolmenpiedra no tenemos fronteras: trabajamos por encargo 
              en toda España, llevando la elegancia de nuestras mesas y piezas auxiliares a 
              cualquier rincón de la península. Cada pedido es gestionado de forma personalizada 
              para garantizar que la piedra llegue perfecta a su nuevo destino.
            </p>
          </div>
          <div className="image-container right">
            <img src={tapasMesas} alt="Taller en Esquivias, Toledo" />
          </div>
        </div>
      </section>

      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="image-container left">
            <img src={mesaVelador} alt="Muebles de mármol por encargo" />
          </div>
          <div className="text-container">
            <h2>Nuestros Productos</h2>
            <p>
              Especialistas en mármol y piedras naturales, ofrecemos una colección que destaca 
              por su exclusividad. Desde mesas de salón en travertino hasta piezas en caliza 
              Sierra Elvira o Blanca Paloma. Al ser un proceso artesanal, nos adaptamos a las 
              necesidades de nuestros clientes, ofreciendo acabados apomazados o envejecidos 
              que resaltan la belleza natural del material. En Dolmenpiedra, no solo fabricamos 
              muebles, creamos el alma de tu salón.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;