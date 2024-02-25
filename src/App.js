import React from 'react';
import Button from './components/button';
import './App.css';
import './styles.css';
import ViewCardProfilePage from './components/viewCardProfilePage';
import ImageComponent from './components/profileImage';

function App() {


  const toEditPage = () => {
    alert('abrir tela da editar');
    // Adicione lógica de autenticação, chamadas à API, etc.
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='login-box'>
          <p className= 'text'> Página do usuário</p>
          <div className = 'profile-section'>
            <div >
              <ImageComponent alt='perfil' src='https://avatars.githubusercontent.com/u/80339437?v=4'/>
            </div>
            <div className='image-container'>
              <ViewCardProfilePage  label='Nome' value={'Allan Miller Silva Lima'} />
              <ViewCardProfilePage  label='E-mail' value={'millerallan17@gmail.com'} />
              <ViewCardProfilePage  label='CPF' value={'12678032400'} />
            </div>
          </div>
          <Button label="Editar informações" onClick={toEditPage} />
        </div>
      </header>
    </div>
  );
}

export default App;
