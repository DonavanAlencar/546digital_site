import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // Função para rolar suavemente até o formulário de contato
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0" style={{ backgroundColor: '#090c9b' }}>
        <a href="/" className="navbar-brand p-0">
          <h1 className="m-0 text-white">546Digital</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link active">Principal</a>
            <a href="#" className="nav-item nav-link">Sobre</a>
            <a href="#" className="nav-item nav-link">Serviços</a>
            <a href="#" className="nav-item nav-link">Blog</a>
            <a href="#" onClick={scrollToContactForm} className="nav-item nav-link">Contato</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
