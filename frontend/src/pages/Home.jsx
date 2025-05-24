import React, { useState, useEffect } from 'react';
import Carosel from './Carosel';
import Topbar from './Topbar';
import Footer from './Footer';
import NossosServicos from './NossosServicos';
import Membros from './Membros';
import Form from './Form';
import ChatBot from './ChatBot';
import Navbar from './Navbar';
//import api from '../services/api';

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carosel />
      <NossosServicos />
      <Membros />
      <Form />
      <Footer />
      <ChatBot />
    </>
  );
}
