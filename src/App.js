import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Combos from './components/Combos';
import Footer from './components/Footer';
import Promocoes from './components/Promocoes';
import Sobre from './components/Sobre';
import Contato from './components/Contato';

function App() {
  return (
    <div>
      {/* Header será fixo */}
      <Header />

      {/* A seção Hero que será a primeira seção */}
      <Hero />

      {/* Seção de Combos */}
      <Combos />

      {/* Seção de Combos */}
      <Promocoes />

{/* Seção Sobre */}
      <Sobre/>

{/* Seção Sobre */}
<Contato/>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
