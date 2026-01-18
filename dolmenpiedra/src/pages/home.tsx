import { useEffect } from 'react';
import '../styles/home.css';
import mesaSalon from '../images/mesa_salon_travertino.jpeg';
import tapasMesas from '../images/tapas_mesas_travertino.jpeg';
import mesaVelador from '../images/mesa_velador.jpeg';

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

      {/* Sección 1: Imagen izquierda - Texto derecha */}
      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="image-container left">
            <img src={mesaSalon} alt="Quiénes somos" />
          </div>
          <div className="text-container">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Texto izquierda - Imagen derecha */}
      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="text-container">
            <h2>¿Dónde Trabajamos?</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
              amet, consectetur, adipisci velit.
            </p>
          </div>
          <div className="image-container right">
            <img src={tapasMesas} alt="Dónde trabajamos" />
          </div>
        </div>
      </section>

      {/* Sección 3: Imagen izquierda - Texto derecha */}
      <section className="content-section fade-in">
        <div className="section-layout">
          <div className="image-container left">
            <img src={mesaVelador} alt="Nuestros productos" />
          </div>
          <div className="text-container">
            <h2>Nuestros Productos</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
              id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
              id quod maxime placeat facere possimus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
