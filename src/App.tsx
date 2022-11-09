import data from '../public/data.json'

function App() {

  return (
    <div className="App">
    {data.map((el)=>{
      //boards[]
      return(<h1>Test</h1>)
    })}
    </div>
  )
}

export default App
