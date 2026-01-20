import { useEffect, useState } from 'react';
import '../styles/products.css';
import { getProducts } from '../services/service';
import type { Mesa } from '../models/Mesa';

function Products() {
  const [products, setProducts] = useState<Mesa[]>([]);

  useEffect(() => {
    const fetchData = () => {
      // Como getProducts devuelve un array directamente, lo asignamos.
      // Si en el futuro es una llamada a API real, el await que pusiste será útil.
      const data = getProducts();
      setProducts(data);
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
        
        <div className="row" id="productGrid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
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