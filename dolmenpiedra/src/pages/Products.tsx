import { useEffect, useState } from 'react';
import '../styles/products.css';
import { productsApi, type Mesa } from '../services/api';

function Products() {
  const [products, setProducts] = useState<Mesa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await productsApi.getAll();
        if (response.success && response.data) {
          setProducts(response.data);
        } else {
          setError(response.error || 'Error al cargar productos');
        }
      } catch (err) {
        setError('Error de conexión con el servidor');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-vh-100">
      <main className="container mt-4">
        <div className="products-header">
          <h1>Nuestros Productos</h1>
          <p>Descubre nuestra colección exclusiva de muebles de piedra natural</p>
        </div>
        
        {loading && (
          <div className="text-center py-5">
            <p>Cargando productos...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-5">
            <p>No hay productos disponibles</p>
          </div>
        )}
        
        <div className="row" id="productGrid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-card">
                {/* Contenedor de imagen para respetar tu CSS object-fit */}
                <div className="product-img-wrapper" style={{ overflow: 'hidden', height: '300px' }}>
                  <img 
                    src={product.imagen} 
                    alt={product.nombre} 
                    className="product-img" 
                  />
                </div>
                
                <div className="product-content">
                  <h3 className="product-title">{product.nombre}</h3>
                  <p className="product-description">{product.descripcion}</p>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="product-price fw-bold" style={{ fontSize: '1.25rem' }}>
                      {product.precio}
                    </span> 
                    <button className="product-btn" style={{ width: 'auto' }}>
                      Ver Producto
                    </button>
                  </div>
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