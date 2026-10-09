import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeado from './components/propsNomeado.jsx'
import MeuAvatar from './components/MeuAvatar.jsx'

function App() {

  return (
    <>
      {/*<PropsNomeado 
        titulo='Interclasse 2026' 
        texto='Bem vindo ao Interclasse' 
        nome=' Ratão Totoso' 
        altura={1.85} 
      />*/}

      <MeuAvatar
        nome="Ratão"
        idade={17}
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJk04YLfFAkpLvVpq6qKCjNuKjsn_gknlQg&s"
        estiloMusical="Sertanejo"
        disciplina="Educação Física"
      />
    </>
  )
}

export default App