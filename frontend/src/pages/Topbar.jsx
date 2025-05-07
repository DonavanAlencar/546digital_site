import React, { useState, useEffect } from 'react';
//import api from '../services/api';

export default function Topbar() {
  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+011 98678-0840</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>546digital.agencia@gmail.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
  );
}
