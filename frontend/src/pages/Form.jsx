import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Form() {
  return (
    <><div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Solicite um Orçamento</h5>
                        <h1 className="mb-0">Precisa de um Orçamento Gratuito? Entre em Contato Conosco!</h1>
                    </div>
                    <div className="row gx-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Resposta em até 24 horas</h5>
                        </div>
                    </div>
                    <p className="mb-4">Oferecemos soluções de marketing digital e SEO personalizadas para aumentar a visibilidade e o desempenho do seu negócio online. Nossos serviços incluem otimização de sites, campanhas de marketing de conteúdo e estratégias de SEO para garantir que sua empresa alcance seu público-alvo e se destaque nos motores de busca. Com nossa abordagem estratégica, ajudamos a gerar mais tráfego, aumentar a conversão e maximizar seu retorno sobre investimento (ROI). Entre em contato conosco e descubra como podemos levar sua marca ao próximo nível!</p>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        <form>
                            <div className="row g-3">
                                <div className="col-xl-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Seu Nome" style={{ height: '55px' }} />
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Seu Email" style={{ height: '55px' }} />
                                </div>
                                <div className="col-12">
                                    <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                                        <option selected>Selecione o Serviço</option>
                                        <option value="1">Automação</option>
                                        <option value="2">SEO/Tráfego Pago</option>
                                        <option value="3">Consultoria em Copy</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="3" placeholder="Mensagem"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit">Quero uma cotação agora!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div></>
  );
}
