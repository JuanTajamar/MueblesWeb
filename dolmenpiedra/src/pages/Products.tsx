import '../styles/products.css';
import mesaCentro from '../images/mesa_centro.jpeg';
import mesaSalon from '../images/mesa_salon_travertino.jpeg';
import mesaVelador from '../images/mesa_velador.jpeg';
import tapasMesas from '../images/tapas_mesas_travertino.jpeg';

function Products() {
  const products = [
    {
      id: 1,
      image: mesaCentro,
      title: 'Mesa de Centro',
      description: 'Elegante mesa de centro en piedra natural, perfecta para dar un toque moderno a tu salón.',
    },
    {
      id: 2,
      image: mesaSalon,
      title: 'Mesa Salón Travertino',
      description: 'Mesa de salón en travertino natural con acabado pulido y diseño contemporáneo.',
    },
    {
      id: 3,
      image: mesaVelador,
      title: 'Mesa Velador',
      description: 'Mesa velador de piedra natural, ideal como mesita auxiliar o de noche.',
    },
    {
      id: 4,
      image: tapasMesas,
      title: 'Tapas Mesas Travertino',
      description: 'Tapas de mesa en travertino premium, disponibles en diferentes tamaños y acabados.',
    },
    {
      id: 5,
      image: mesaCentro,
      title: 'Mesa de Centro Elegante',
      description: 'Diseño minimalista en piedra natural, perfecta para espacios modernos.',
    },
    {
      id: 6,
      image: mesaSalon,
      title: 'Mesa Salón Premium',
      description: 'Mesa de salón premium en travertino con detalles únicos y acabado de lujo.',
    },
  ];

  return (
    <div className="min-vh-100">
      <main className="container mt-4">
        <div className="products-header">
          <h1>Nuestros Productos</h1>
          <p>Descubre nuestra colección exclusiva de muebles de piedra natural</p>
        </div>
        
        <div className="row" id="productGrid">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 product-item">
              <div className="product-card">
                <div className="product-img">
                  <img src={product.image} alt={product.title} className="product-img" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="product-btn">Ver Producto</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Products;
