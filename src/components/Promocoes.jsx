import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'; // Importa o framer-motion para animações
import tigelaPromocao from '../assets/tigela-acai.jpg';
import acai300 from '../assets/acai300.jpg';
import bgPromocao from '../assets/bg-promocao.jpg';

export default function Promocoes({ triggerAnimation }) {
  const controls = useAnimation(); // Controlador de animação do framer-motion
  const { ref: promoRef, inView: promoVisible } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada mais de uma vez
    threshold: 0.1, // Percentual de visibilidade para disparar a animação
  });

  useEffect(() => {
    if (promoVisible || triggerAnimation) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: -50,
        transition: { duration: 1 },
      });
    }
  }, [promoVisible, triggerAnimation, controls]);

  return (
    <section
      id="promocoes"
      className="py-16 bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${bgPromocao})` }}
      ref={promoRef}
    >
      <h2
      style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adiciona contorno ao texto
      }}
      className="text-4xl font-bold mb-8 text-purple-800">Promoções</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-gray-100 text-purple-800 rounded-lg shadow-md p-4 max-w-sm">
          <img
            src={acai300}
            alt="Promoção Sextou"
            className="rounded-lg"
          />
          <motion.div
            className="transition-transform duration-1000"
            initial={{ opacity: 0, x: -50 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 1, delay: 0.5 }} // Tempo da animação e atraso
          >
            <h3 className="text-2xl font-bold mt-4">Sextooooou! Com gosto de Açaí</h3>
            <p className="mt-2 text-lg">Qualquer combo 300 ml por R$10,00</p>
          </motion.div>
        </div>

        <div className="bg-gray-100 text-purple-800 rounded-lg shadow-md p-4 max-w-sm">
          <img
            src={tigelaPromocao}
            alt="Promoção Barca de Açaí"
            className="rounded-lg"
          />
          <motion.div
            className="transition-transform duration-1000"
            initial={{ opacity: 0, x: -50 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 1, delay: 1 }} // Tempo da animação e atraso
          >
            <h3 className="text-2xl font-bold mt-4">Tigela de Açaí? Chama no delivery</h3>
            <p className="mt-2 text-lg">Tigela completa 500ml + 10 adicionais por R$22,00</p>
          </motion.div>
        </div>

        <div className="bg-gray-100 text-purple-800 rounded-lg shadow-md p-4 max-w-sm">
          <motion.div
            className="transition-transform duration-1000"
            initial={{ opacity: 0, x: -50 }} // Início da animação
            animate={controls} // Usa o controlador de animação
            transition={{ duration: 1, delay: 1.5 }} // Tempo da animação e atraso
          >
            <h3 className="text-2xl font-bold">Hmmm... Nesse calor o que mais combina?</h3>
            <button className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-900">
              Fazer Pedido
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
