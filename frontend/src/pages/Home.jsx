import React, { useState, useEffect } from 'react';
import Carosel from './Carosel';
import Topbar from './Topbar';
import Footer from './Footer';
//import api from '../services/api';

export default function Home() {
  return (
      <><Topbar /><Carosel /><Footer /></>
  );
}
