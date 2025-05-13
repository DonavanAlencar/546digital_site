// src/components/Form.jsx
import React, { useState } from 'react';
import api from '../services/api';

export default function Form() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // sending: enquanto aguarda resposta
  // status: null | 'success' | 'error'
  const [sending, setSending] = useState(false);
  const [status, setStatus]   = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('_wpcf7_unit_tag', 'wpcf7-f0215e4a-p1-o1');
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-subject', subject);
    formData.append('your-message', message);

    try {
      await api.post('/wp-json/contact-form-7/v1/contact-forms/6/feedback', formData);
      setName(''); setEmail(''); setSubject(''); setMessage('');
      setStatus('success');
    } catch (err) {
      console.error(err.stack || err);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  // Retorna a mensagem de feedback após envio
  const renderStatusMessage = () => {
    if (sending) {
      return <strong className="blinking">Enviando mensagem...</strong>;
    }
    if (status === 'success') {
      return <strong>Mensagem enviada com sucesso!</strong>;
    }
    if (status === 'error') {
      return <strong>A mensagem não foi enviada, tente novamente!</strong>;
    }
    return null;
  };

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
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
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-xl-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Seu Nome"
                      style={{ height: '55px' }}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Seu Email"
                      style={{ height: '55px' }}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <select
                      className="form-select bg-light border-0"
                      style={{ height: '55px' }}
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      required
                    >
                      <option value="" disabled>Selecione o Serviço</option>
                      <option value="Automação">Automação</option>
                      <option value="SEO/Tráfego Pago">SEO/Tráfego Pago</option>
                      <option value="Consultoria em Copy">Consultoria em Copy</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      rows="3"
                      placeholder="Mensagem"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit" disabled={sending}>
                      Quero uma cotação agora!
                    </button>
                  </div>
                  <div className="col-12 text-center mt-2">
                    {renderStatusMessage()}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
