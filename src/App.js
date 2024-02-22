import React from 'react';
import TextField from './components/textfield';
import Button from './components/button';
import './App.css';
import './styles.css';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`Usuário: ${username}, Senha: ${password}`);
    // Adicione lógica de autenticação, chamadas à API, etc.
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Use a tag <img> para exibir a sua imagem diretamente */}
        <img src="/logo-upe.png" className="imagem-menor" alt="logo" />
        <div className='login-box'>
          <TextField placeholder="Digite seu CPF" value={username} onChange={handleUsernameChange} />
          <TextField placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} isPassword />
          <Button label="Entrar" onClick={handleLogin} />
        </div>
      </header>
    </div>
  );
}

export default App;
