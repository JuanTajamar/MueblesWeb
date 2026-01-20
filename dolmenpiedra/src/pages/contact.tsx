import '../styles/contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-hero-title">Ponte en Contacto con Nosotros</h1>
        <p className="contact-hero-subtitle">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Ubicación</h3>
                <p>Calle Principal 123<br />Madrid, España</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Teléfono</h3>
                <p>+34 123 456 789</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email</h3>
                <p>info@dolmenpiedra.es</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Envíanos un Mensaje</h2>
            {submitted && (
              <div className="success-message">
                ¡Gracias! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 123 456 789"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Asunto de tu consulta"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu consulta en detalle..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
