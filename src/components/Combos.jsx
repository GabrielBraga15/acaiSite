// src/components/Combos.jsx
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'; // Importa o framer-motion para animações
import comboLoveImage from '../assets/combo-love.jpg'; // Imagem do Combo Love
import comboNinhoImage from '../assets/combo-ninho.jpg'; // Imagem do Combo Ninho
import comboTropicalImage from '../assets/combo-tropical.jpg'; // Imagem do Combo Tropical

export default function Combos({ triggerAnimation }) {
  const controls = useAnimation(); // Controlador de animação do framer-motion
  const { ref: combosRef, inView: combosVisible } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada mais de uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  useEffect(() => {
    if (combosVisible || triggerAnimation) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 50,
        transition: { duration: 1 },
      });
    }
  }, [combosVisible, triggerAnimation, controls]);

  return (
    <section
      id="combos"
      className="py-16 bg-gray-100 text-center"
      ref={combosRef}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-purple-800"
        initial={{ opacity: 0, y: -50 }} // Início da animação
        animate={controls} // Usa o controlador de animação
        transition={{ duration: 1 }} // Tempo da animação
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
        }}
      >
        Nossos Combos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scale-90">
        {/* Combo Love */}
        <motion.div
          className="bg-gray-100 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }} // Início da animação
          animate={controls} // Usa o controlador de animação
          transition={{ duration: 1, delay: 0.5 }} // Tempo da animação e atraso
        >
          <img src={comboLoveImage} alt="Combo Love" className="mb-4 rounded-lg" />
          <motion.h3
            className="text-xl font-bold text-purple-800"
            initial={{ opacity: 0, y: -20 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 0.5, delay: 0.5 }} // Tempo da animação e atraso
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
            }}
          >
            Combo Love
          </motion.h3>
          <p className='text-purple-800'>Muito sabor!</p>
        </motion.div>

        {/* Combo Ninho */}
        <motion.div
          className="bg-gray-100 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }} // Início da animação
          animate={controls} // Usa o controlador de animação
          transition={{ duration: 1, delay: 1 }} // Tempo da animação e atraso
        >
          <img src={comboNinhoImage} alt="Combo Ninho" className="mb-4 rounded-lg" />
          <motion.h3
            className="text-xl font-bold text-purple-800"
            initial={{ opacity: 0, y: -20 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 0.5, delay: 1 }} // Tempo da animação e atraso
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
            }}
          >
            Combo Ninho
          </motion.h3>
          <p className='text-purple-800'>Sabor Perfeito!</p>
        </motion.div>

        {/* Combo Tropical */}
        <motion.div
          className="bg-gray-100 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }} // Início da animação
          animate={controls} // Usa o controlador de animação
          transition={{ duration: 1, delay: 1.5 }} // Tempo da animação e atraso
        >
          <img src={comboTropicalImage} alt="Combo Tropical" className="mb-4 rounded-lg" />
          <motion.h3
            className="text-xl font-bold text-purple-800"
            initial={{ opacity: 0, y: -20 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 0.5, delay: 1.5 }} // Tempo da animação e atraso
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
            }}
          >
            Combo Tropical
          </motion.h3>
          <p className='text-purple-800'>Frescura Tropical!</p>
        </motion.div>
      </div>
    </section>
  );
}
