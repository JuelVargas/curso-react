import logo from './logo.svg';
import './App.css';
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';

function App() {


  const contactopDefecto ={
    nombre: 'solomeo',
    apellido: 'paredes',
    email: 'example@mail.com',
    conectado: true,
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componentes propios  Greeting.jsx */}

        {/* <Greeting name="Juel"></Greeting> */}

        {/* componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>

        <ComponenteA contacto={contactopDefecto}></ComponenteA>

        {/* <GreetingF name="Juel"></GreetingF> */}


        {/* <ContactoList ></ContactoList> */}



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
