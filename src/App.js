import React, { useState } from "react";
import './App.css';

import { WhatsApp, Instagram, LinkedIn } from '@material-ui/icons';

import headerBackground from "./assets/pink-code-background.jpg";
import fotoPerfil from  "./assets/foto-perfil.jpg";
import fotoPinkFloyd from  "./assets/pink-floyd.jpg";
import fotoJanis from  "./assets/janis-joplin.jpg";
import fotoBelchior from  "./assets/belchior.png";
import fotoDjavan from  "./assets/djavan.jpg";
import fotoBadboys from  "./assets/bad-boys.jpg";
import fotoHarrypotter from  "./assets/harry-potter.jpg";
import fotoSebeber from  "./assets/se-beber-nao-case.jpg";
import fotoMatrix from  "./assets/matrix.jpg";
import fotoReact from  "./assets/react.png";
import fotoStyled from  "./assets/styled-components.png";
import fotoMaterialIcons from  "./assets/material.jpg";
import fotoUseState from  "./assets/react-hooks.png";

import Card from "./components/Card";

function App() {

  const [abaAtiva, setAbaAtiva] = useState(1);

  return (
    <div className="App">
      <section className="header">

        <div className="div-imagem-header">
          <img src={headerBackground} alt="Fundo do header" />
        </div>

        <img id="imagem-perfil" src={fotoPerfil} alt="Foto de perfil do usuario" />

        <h1 className="nome">Yasmine Silva</h1>
        <h2 className="descricao">Estudante</h2>

      </section>

      <section className="contatos">

        <div className="div-contatos">

          <a className="link" href="https://wa.me/11969217928" target="_blank" rel="noreferrer">
            <WhatsApp/>
            <span className="texto">WhatsApp</span>
          </a>

          <a className="link" href="https://www.instagram.com/yasmine_silva_" target="_blank" rel="noreferrer">
            <Instagram/>
            <span className="texto">Instagram</span>
          </a>

          <a className="link" href="https://www.linkedin.com/in/yasmine-silva-a16a11127" target="_blank" rel="noreferrer">
            <LinkedIn/>
            <span className="texto">LinkedIn</span>
          </a>

        </div>

      </section>
      
      <section className="abas">

        <div className="div-abas">
          <div className="div-abas-titulos">
            <div className="abas-titulos">
              <button className={abaAtiva === 1 ? "selecionado" : ""} onClick={() => setAbaAtiva(1)}>🎵 Bandas Favoritas</button>
              <button className={abaAtiva === 2 ? "selecionado" : ""} onClick={() => setAbaAtiva(2)}>🎞️ Filmes Favoritos</button>
              <button className={abaAtiva === 3 ? "selecionado" : ""} onClick={() => setAbaAtiva(3)}>💻 Tecnologias Utilizadas</button>
            </div>
          </div>

          {abaAtiva === 1 && 
            <div className="aba-conteudo">
              <Card imagem={fotoPinkFloyd} texto="Pink Floyd" link="https://open.spotify.com/playlist/37i9dQZF1DXaQ34lqGBfrU?si=58f1e3c87c394614"/>
              <Card imagem={fotoJanis} texto="Janis Joplin" link="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2Oo4IE?si=d88efe444810444d"/>
              <Card imagem={fotoBelchior} texto="Belchior" link="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0itlqE?si=6d3a5bca6c6a42ca"/>
              <Card imagem={fotoDjavan} texto="Djavan" link="https://open.spotify.com/playlist/37i9dQZF1DX93zVWnxhXZa?si=f0d45c0dfa784cf9"/>
            </div>
          }
          {abaAtiva === 2 &&
            <div className="aba-conteudo">
              <Card imagem={fotoHarrypotter} texto="Harry Potter" link="https://www.google.com/search?q=Harry+Potter"/>
              <Card imagem={fotoBadboys} texto="Bad Boys" link="https://www.google.com/search?q=Bad+Boys"/>
              <Card imagem={fotoSebeber} texto="Se beber Não Case" link="https://www.google.com/search?q=Se+Beber+N%C3%A3o+Case"/>
              <Card imagem={fotoMatrix} texto="Matrix" link="https://www.google.com/search?q=Matrix"/>
            </div>
          }
          {abaAtiva === 3 &&
            <div className="aba-conteudo">
              <Card imagem={fotoStyled} texto="Styled Components" link="https://styled-components.com/"/>
              <Card imagem={fotoReact} texto="React" link="https://pt-br.reactjs.org/"/>
              <Card imagem={fotoUseState} texto="useState" link="https://pt-br.reactjs.org/docs/hooks-state.html"/>
              <Card imagem={fotoMaterialIcons} texto="Material Icons" link="https://mui.com/pt/components/material-icons/"/>
            </div>
          }

        </div>

      </section>


    </div>
  );
}

export default App;
