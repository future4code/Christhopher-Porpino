import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'

function App() {
  return (
    <div className="App">
      <section className="feed">
        <h1>Insta4</h1>
        <PostContainer usuario="c.s.lewis" curtidas="7" comentarios="1"/>
        <PostContainer usuario="charlie.parker" curtidas="9" comentarios="2" fotoPost="https://picsum.photos/id/947/300/250"/>
        <PostContainer usuario="astrodev.real.oficial" curtidas="97" comentarios="45"/>
      </section>
    </div>
  );
}

export default App;
