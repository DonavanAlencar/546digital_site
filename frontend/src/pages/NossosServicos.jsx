import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function NossosServicos() {
  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                <h5 className="fw-bold text-primary text-uppercase">Nossos Serviços</h5>
                <h1 className="mb-0">Soluções Personalizadas de Marketing para o Sucesso do Seu Negócio</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-shield-alt text-white"></i>
                        </div>
                        <h4 className="mb-3">Estratégia Sob Medida</h4>
                        <p className="m-0">Desenvolvemos planos estratégicos personalizados para potencializar seu ROI e garantir o sucesso do seu negócio.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-chart-pie text-white"></i>
                        </div>
                        <h4 className="mb-3">Automação Inteligente</h4>
                        <p className="m-0">Transforme seus processos com funis de vendas otimizados e tecnologia de IA, gerando mais resultados com menos esforço.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-code text-white"></i>
                        </div>
                        <h4 className="mb-3">Integração de Sistemas</h4>
                        <p className="m-0">Conectamos marketing, vendas e CRM de forma eficiente, criando uma comunicação fluida e potencializando seus resultados.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fab fa-android text-white"></i>
                        </div>
                        <h4 className="mb-3">Copywriting de Alta Conversão</h4>
                        <p className="m-0">Transforme suas ideias em palavras que vendem. Com nossos serviços de copywriting, criamos textos que capturam a atenção, geram engajamento e impulsionam suas vendas!</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-search text-white"></i>
                        </div>
                        <h4 className="mb-3">Otimização SEO de Alta Performance</h4>
                        <p className="m-0">Aumente a visibilidade do seu site e conquiste as primeiras posições nos motores de busca com nossos serviços de SEO personalizados.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Solicite um Orçamento</h3>
                        <p className="text-white mb-3">Entre em contato para saber mais sobre nossos serviços e obter um orçamento personalizado. Estamos prontos para ajudar a impulsionar o seu negócio!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
