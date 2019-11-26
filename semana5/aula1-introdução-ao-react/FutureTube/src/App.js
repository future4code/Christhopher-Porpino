import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>FutureTube</h1>
        <form>
          <input type="text" nome="busca" placeholder="Buscar" />
        </form>
      </header>

      <div className="container-aside-main-content">
        <aside>
          <ul>
            <li>Inicio</li>
            <li>Em Alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
            <hr />
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </aside>
        <section className="videos-grid">

          <div className="video-card" id="video1">
              <a href="video1.html">
                  <img src="https://picsum.photos/id/901/200/178" />
              </a>
              <p>Media 1</p>
          </div>

          <div className="video-card" id="video2">
              <a href="video2.html">
                  <img src="https://picsum.photos/id/902/200/178" />
              </a>
              <p>Media 2</p>
          </div>

          <div className="video-card" id="video3">
              <img src="https://picsum.photos/id/903/200/178" />
              <p>Media 3</p>
          </div>

          <div className="video-card" id="video4">
              <img src="https://picsum.photos/id/904/200/178" />
              <p>Media 4</p>
          </div>

          <div className="video-card" id="video5">
            <img src="https://picsum.photos/id/905/200/178/" />
            <p>Media 5</p>
          </div>
          
          <div className="video-card" id="video6">
            <img src="https://picsum.photos/id/906/200/178/?=6"/>
            <p>Media 6</p>
          </div>

          <div className="video-card" id="video7">
            <img src="https://picsum.photos/id/907/200/178/?=7" />
            <p>Media 7</p>
          </div>

          <div className="video-card" id="video8">
            <img src="https://picsum.photos/id/908/200/178/?=8" />
            <p>Media 8</p>
          </div>

        </section>
    </div>
    <footer>
        <h1>Oi! Eu moro no footer</h1>
    </footer>
  </div>
  );
}

export default App;
