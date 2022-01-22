
import './App.css';
import Container from 'react-bootstrap/Container'
import {Counter} from './components/Counter'
import {Toggle} from './components/Toggle'
import {TodoList} from './components/TodoList'
import {data} from './data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faPlusSquare,faMinusSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faPlusSquare,faCoffee,faMinusSquare,faTrash);//amit ide beteszek, minden komponensben elérem

function App() {

  return (
    <Container className="border bg-light text-center">
      <h1>My first React App</h1>
      <Counter />
      <Toggle />
      <TodoList data={data} />

    </Container>
  );
}

export default App;
