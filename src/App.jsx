import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <header className='grid grid-cols-1 justify-center items-center p-4 w-full fixed top-0 left-0 bg-slate-900'>
        <audio className='justify-self-center w-full my-2' controls src=""></audio>
        <form action="" className='grid grid-cols-1 sm:grid-cols-4 w-full'>
          <input placeholder='Search...' type="text" className='rounded-full border border-slate-300 my-2 col-span-3 py-1 px-2' />
          <button className='border border-slate-300 rounded-full text-slate-300 my-2 ml-2 py-1 px-2 underline-offset-2 md:hover:underline' >Search</button>
        </form>
      </header>
    </div>
  )
}

export default App
