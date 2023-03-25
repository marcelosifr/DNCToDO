import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import logodnc from '../public/logodnc.png';
import { Column } from './components/column.jsx';

function App() {
 const [columns, setColumns] = useState([
    { id: 1, title: "Planejamento" },
    { id: 2, title: "A fazer" },
    { id: 3, title: "Fazendo" },
    { id: 4, title: "Feito" },
  ]);

  return (
    <section>
      <header>
        <img src={logodnc} alt=""/>
        <h1>Lista de Tarefas</h1>
      </header>
      <div className='listContainer'>
        {
          columns.map((column) => (
            <Column title={column.title} key={column.id} />
          ))
        }
      </div>

    </section>
  )
}

export default App
