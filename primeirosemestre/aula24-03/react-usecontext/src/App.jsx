import './estilos.css';
import Header from './components/header.jsx';
import Noticias from './components/noticias.jsx';
import { TemaProvedor } from './contextos/temaContexto'; 

function App() {
  return (
    <TemaProvedor>
      <Header />
      <Noticias />
    </TemaProvedor>
  );
}

export default App;