import './App.css'
import Cards from './components/cards/Cards'

function App() {

  return (
    <>
      <div className='w-4/5 mx-auto my-10'>
        <div className='mb-10 text-center'>
          <h1 className='text-2xl font-semibold underline'>Actor Selected </h1>
        </div>
        <Cards></Cards>
      </div>
    </>
    
  )
}

export default App
