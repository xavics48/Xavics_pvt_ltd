import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => (
  <a href="https://wa.me/+923461553264" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
    <FaWhatsapp size={30} color="white" />
  </a>
);

export default FloatingWhatsAppButton;
