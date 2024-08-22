import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import backgroundImage from '../assets/acai-background.jpg'; // Certifique-se de que a imagem está na pasta correta
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const controls = useAnimation(); // Controlador de animação do framer-motion
  const { ref: heroRef, inView: heroVisible } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada mais de uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  useEffect(() => {
    if (heroVisible) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: 0.5 }
      });
    } else {
      controls.start({
        x: '100vw',
        opacity: 0,
        transition: { duration: 0 } // Animação instantânea para visibilidade inicial
      });
    }
  }, [heroVisible, controls]);

  return (
    <section 
      id="hero" 
      ref={heroRef} // Ref para o IntersectionObserver
      className="bg-cover bg-center text-white py-32 text-center min-h-[70vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ x: '100vw', opacity: 0 }} // Inicia fora da tela à direita
        animate={controls} // Usa o controlador de animação
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
        }}
      >
        JÁ TOMOU SEU AÇAÍ HOJE?
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-white"
        initial={{ x: '-100vw', opacity: 0 }} // Inicia fora da tela à esquerda
        animate={controls} // Usa o controlador de animação
        transition={{ duration: 1.5, delay: 0.5 }} // Tempo da animação com um atraso para o <p>
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
        }}
      >
        Os melhores combos de açaí para você!
      </motion.p>
    </section>
  );
}
