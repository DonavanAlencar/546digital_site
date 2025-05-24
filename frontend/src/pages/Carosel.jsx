import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Carosel() {
  // Função para rolar suavemente até o formulário de contato
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">SEU NEGÓCIO NO TOPO!</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">IA para escalar seu negócio</h1>
                            <a href="#" onClick={scrollToContactForm} className="btn py-md-3 px-md-5 me-3 animated slideInLeft" style={{ backgroundColor: '#090c9b', color: 'white' }}>Contate-nos</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}
