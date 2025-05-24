import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Topbar() {
  // Função para rolar suavemente até o formulário de contato
  const scrollToContactForm = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid px-5 d-none d-lg-block" style={{ backgroundColor: '#3c3744' }}>
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>546digital.agencia@gmail.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
  );
}
