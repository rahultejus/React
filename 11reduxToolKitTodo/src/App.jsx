
import AddTodo from './components/AddTodo'
import './App.css'
import Todos from './components/Todos'


function App() {


  return (
    <>
      <h1 className='text-3xl font-bold hover:text-yellow-300'>TODO Manager</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
