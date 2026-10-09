import './App.css'
import logo from './assets/img/logo.jpeg' // Certifique-se de que o nome está correto

function App() {
return (
<div className="container">
 <div className="login-box">
<img src={logo} alt="SESI SENAI" className="logo" />
<h1>Login</h1>
<p className="subtitle">Para continuar</p>

<form>
 <div className="input-group">
 <label>NOME</label>
<input type="text" placeholder="Seu nome" />
 </div>

 <div className="input-group">
 <label>SENHA</label>
 <input type="password" placeholder="******" />
 </div>

 <button type="submit" className="login-button">Log in</button>
 </form>

<div className="footer-links">
<a href="#">Esqueceu a senha?</a>
 <a href="#"><strong>Cadastre-se !</strong></a>
 </div>
 </div>
 </div>
 )
}

export default App