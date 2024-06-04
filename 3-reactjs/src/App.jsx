import Header from './Header.jsx'
import { useState, useEffect } from 'react'

// Function componets
function App() {

  console.log("Component has been created")
  const [counter, setCounter] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => setCounter((c) => c + 1), 1000)

    return () => clearInterval(interval)

  }, [counter])



  // Virtual virtual
  // DOM DIFF 

  return (
    <>
      <Header />
      <main>
        <h1>Home page</h1>

        <span>{counter}</span>

        <button onClick={() => setCounter((current) => current - 1)}>Decrement</button>
        <button onClick={() => setCounter((current) => current + 1)}>Incremenet</button>
      </main>
    </>
  )
}

export default App
