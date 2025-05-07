import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Carosel() {
  return (
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>546Digital</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Principal</a>
                    <a href="about.html" className="nav-item nav-link">Sobre</a>
                    <a href="service.html" className="nav-item nav-link">Serviços</a>
                    <a href="blog.html" className="nav-item nav-link">Blog</a>
                    <a href="contact.html" className="nav-item nav-link">Contato</a>
                </div>
            </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="./img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Seu Negócio no Topo!</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Branding e IA para escalar seu negócio</h1>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Quero Agora</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="./img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Estratégias Digitais Que Convertem!</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">SEO, Tráfego Pago, Social Media</h1>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contate-nos</a>
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
