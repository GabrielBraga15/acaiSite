// src/components/Sobre.jsx
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Sobre({ triggerAnimation }) {
  const { ref: sobreRef, inView: sobreVisible } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada mais de uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  const controls = useAnimation();

  useEffect(() => {
    if (sobreVisible || triggerAnimation) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 1 },
      });
    }
  }, [sobreVisible, triggerAnimation, controls]);

  return (
    <section
      id="sobre"
      className="py-16 bg-gray-100 text-center"
      ref={sobreRef}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-purple-800"
        initial={{ opacity: 0, y: -50 }} // Início da animação
        animate={controls} // Usa o controlador de animação
        transition={{ duration: 1, delay: 0.5 }} // Tempo da animação e atraso
      >
        Sobre Nós
      </motion.h2>
      <motion.p
        className="text-lg max-w-2xl mx-auto text-gray-700"
        initial={{ opacity: 0, y: 50 }} // Início da animação
        animate={controls} // Usa o controlador de animação
        transition={{ duration: 1, delay: 1 }} // Tempo da animação e atraso
      >
        Bem-vindo à <span className="font-bold text-purple-800">Braga Açaí</span>! Somos apaixonados por oferecer os melhores açaís e combos deliciosos para você. Nossa missão é proporcionar uma experiência incrível com cada porção de açaí, feita com ingredientes frescos e de alta qualidade. Seja para um lanche rápido ou para se deliciar com nossos combos especiais, estamos aqui para garantir que você tenha uma experiência inesquecível.
      </motion.p>
    </section>
  );
}
