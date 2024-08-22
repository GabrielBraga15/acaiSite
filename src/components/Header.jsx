import React, { useState, useEffect } from 'react';

export default function Header() {
  const [headerColor, setHeaderColor] = useState('transparent');

  const handleScroll = () => {
    const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
    const scrollTop = window.scrollY;

    if (scrollTop > heroHeight) {
      setHeaderColor('bg-purple-800'); // Cor quando fora da seção Hero
    } else {
      setHeaderColor('transparent'); // Cor quando dentro da seção Hero
    }
  };

  useEffect(() => {
    // Adiciona o listener de scroll quando o componente é montado
    window.addEventListener('scroll', handleScroll);

    // Remove o listener de scroll quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Despacha um evento personalizado para ativar animação
      const event = new Event('activateAnimation');
      targetElement.dispatchEvent(event);
    }
  };

  return (
    <header className={`shadow-lg fixed top-0 left-0 w-full text-white p-4 z-50 ${headerColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <p style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
          }}>Braga Açaí</p>
        </div>
        <nav>
          <ul style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
          }} className="flex space-x-4">
            <li><a href="#combos" onClick={handleClick} className="hover:text-yellow-300">Combos</a></li>
            <li><a href="#promocoes" onClick={handleClick} className="hover:text-yellow-300">Promoções</a></li>
            <li><a href="#sobre" onClick={handleClick} className="hover:text-yellow-300">Sobre</a></li>
            <li><a href="#contato" onClick={handleClick} className="hover:text-yellow-300">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
