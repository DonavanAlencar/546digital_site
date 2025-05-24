import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Membros() {
  return (
    <><div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                <h5 className="fw-bold text-uppercase" style={{ color: '#090c9b' }}>Membros da Equipe</h5>
                <h1 className="mb-0">Profissionais Prontos para Ajudar o Seu Negócio</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden" style={{ backgroundColor: '#fbfff1' }}>
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/Guilherme.jpeg" alt="" />
                            <div className="team-social">
                                <a className="btn btn-lg btn-lg-square rounded" href="https://www.instagram.com/seocomgui" style={{ backgroundColor: '#090c9b' }}><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{ color: '#090c9b' }}>Guilherme Santos</h4>
                            <p className="text-uppercase m-0">Especialista em SEO</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden" style={{ backgroundColor: '#fbfff1' }}>
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/AdrianoLincoln.jpeg" alt="" />
                            <div className="team-social">
                                <a className="btn btn-lg btn-lg-square rounded" href="https://www.instagram.com/adrianolincoln.oficial" style={{ backgroundColor: '#090c9b' }}><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{ color: '#090c9b' }}>Adriano Lincoln</h4>
                            <p className="text-uppercase m-0">Estrategista de Marketing Digital e copywriter</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden" style={{ backgroundColor: '#fbfff1' }}>
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                            <div className="team-social">
                                <a className="btn btn-lg btn-lg-square rounded" href="https://www.instagram.com/marcelonarita23/" style={{ backgroundColor: '#090c9b' }}><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 style={{ color: '#090c9b' }}>Marcelo Takashi</h4>
                            <p className="text-uppercase m-0">Especialista em automação</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></>
  );
}
