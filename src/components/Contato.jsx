// src/components/Contato.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Importa o framer-motion para animações
import backgroundImage from '../assets/bg-contato.jpg'; // Imagem de fundo

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-16 text-center relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Camada de sobreposição para melhorar a legibilidade */}
      <div className="relative z-10 px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-purple-800"
          initial={{ opacity: 0, y: -50 }} // Início da animação
          animate={{ opacity: 1, y: 0 }} // Animação para a visibilidade
          transition={{ duration: 1 }} // Tempo da animação
          style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}
        >
          Contato
        </motion.h2>
        <motion.form
          className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg"
          action="/send" // Substitua pelo endpoint de envio do formulário
          method="post"
          initial={{ opacity: 0, y: 50 }} // Início da animação
          animate={{ opacity: 1, y: 0 }} // Animação para a visibilidade
          transition={{ duration: 1, delay: 0.5 }} // Tempo da animação e atraso
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nome</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              initial={{ opacity: 0, x: -20 }} // Início da animação
              animate={{ opacity: 1, x: 0 }} // Animação para a visibilidade
              transition={{ duration: 0.5, delay: 1 }} // Tempo da animação e atraso
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Telefone</label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10,11}" // Aceita números com 10 ou 11 dígitos
              required
              placeholder="(99) 99999-9999"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              initial={{ opacity: 0, x: -20 }} // Início da animação
              animate={{ opacity: 1, x: 0 }} // Animação para a visibilidade
              transition={{ duration: 0.5, delay: 1.2 }} // Tempo da animação e atraso
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              initial={{ opacity: 0, x: -20 }} // Início da animação
              animate={{ opacity: 1, x: 0 }} // Animação para a visibilidade
              transition={{ duration: 0.5, delay: 1.4 }} // Tempo da animação e atraso
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
            <motion.textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              initial={{ opacity: 0, x: -20 }} // Início da animação
              animate={{ opacity: 1, x: 0 }} // Animação para a visibilidade
              transition={{ duration: 0.5, delay: 1.6 }} // Tempo da animação e atraso
            />
          </div>
          <motion.button
            type="submit"
            className="px-4 py-2 bg-purple-800 text-white font-semibold rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            initial={{ opacity: 0, scale: 0.9 }} // Início da animação
            animate={{ opacity: 1, scale: 1 }} // Animação para a visibilidade
            transition={{ duration: 0.5, delay: 1.8 }} // Tempo da animação e atraso
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
