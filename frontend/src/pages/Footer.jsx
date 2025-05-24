import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4" style={{ backgroundColor: '#090c9b' }}>
                <a href="index.html" className="navbar-brand">
                  <h1 className="m-0 text-white">546Digital</h1>
                </a>
                <p className="mt-3 mb-4">Somos uma agência digital fora do padrão, onde inovação, estratégia e inteligência artificial se unem para criar resultados exponenciais.</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Entre em Contato</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">546digital.agencia@gmail.com</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-square me-2" href="#" style={{ backgroundColor: '#090c9b', color: 'white' }}><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-square me-2" href="#" style={{ backgroundColor: '#090c9b', color: 'white' }}><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-square" href="#" style={{ backgroundColor: '#090c9b', color: 'white' }}><i className="fab fa-instagram fw-normal"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Acesso Rápido</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Principal</a>
                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Sobre</a>
                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Serviços</a>
                    <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Blog</a>
                    <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contato</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-white" style={{ background: '#061429' }}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">546 Digital</a>. All Rights Reserved. 
                  Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
