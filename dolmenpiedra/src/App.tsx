

function App() {
  return (
    <div className="min-vh-100">
      {/* Navbar con clase fixed-top */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Dolmepiedra</a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#living">Living</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#bath">Bath</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kitchen">Kitchen</a>
              </li>
            </ul>

            <form className="search-container d-flex" id="searchForm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Search..." 
              />
              <button className="search-icon" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-4">
        {/* Aquí es donde se renderizarán tus productos */}
        <div className="row" id="productGrid">
          {/* Ejemplo de cómo se vería un producto maquetado */}
          <div className="col-md-4 product-item">
            <div className="product-card">
              <div className="product-img">
                <img src="./images/mesa_centro.jpeg" alt="producto" className="product-img" />
              </div>
              <p className="product-category">Furniture</p>
              <h3 className="product-title">Minimalist Chair</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;