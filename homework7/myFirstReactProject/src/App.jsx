import './App.css'
import Counter from './Counter.jsx'

function App() {
  function handleRequest(data){
    alert('button clicked');
   console.log('button clicked');

  }

  return (
    <>
      <h3>React Practice 01</h3>
      <button onClick={()=> handleRequest()}>Click me</button>
      <Counter></Counter>
    </>
  )
}

export default App
