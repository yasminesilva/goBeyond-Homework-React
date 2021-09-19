import './App.css';

import headerBackground from "./assets/pink-code-background.jpg"
import fotoPerfil from  "./assets/foto-perfil.jpg"

function App() {
  return (
    <div className="App">

      <div className="div-imagem-header">
        <img src={headerBackground} alt="Fundo do header" />
      </div>

      <img id="imagem-perfil" src={fotoPerfil} alt="Foto de perfil do usuario" />

      <h1 className="nome">Yasmine Silva</h1>
      <h2 className="descricao">Estudante</h2>


    </div>
  );
}

export default App;
