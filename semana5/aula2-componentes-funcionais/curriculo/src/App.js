import React from 'react';
import './App.css';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard';
import ImageButton from './components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">
      <section className="PageSection">
        <h1>Dados pessoais</h1>
        <BigCard 
        nome="Christhopher"
        texto="Oi, eu sou Christhopher. Sou aluno da Future4. Estou migrando da engenharia civil para o setor de tecnologia e estou adorando essa jornada."
        />
        <SmallCard />
        <SmallCard />
        <ImageButton />
      </section>

      <section className="PageSection">
        <h1>Formação Profissional</h1>
        <BigCard nome="Future4" texto="Cursando Desenvolvimento Web Full Stack" />
        <BigCard nome="Multivix Vitória" texto="Bacharel em Engenharia Civil"/>
      </section>

      <section className="PageSection">
        <ImageButton />
      </section>
    </div>
  );
}

export default App;