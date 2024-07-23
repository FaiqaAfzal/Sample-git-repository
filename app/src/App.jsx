import { useState } from 'react'
import './App.css'
import Grid from './pages/Grid'
import{Route,Routes} from 'react-router-dom'
import ItemDetails from './pages/ItemDetails'


function App() {
  
  return (
    <Routes>
      <Route path='/items' element={<Grid />}/>
      <Route path='/items/:id' element={<ItemDetails />} />
    </Routes>
    // <>
    //   <Grid/>
    // </>
  )
}

export default App




























// import Home from "./pages/Home"
// import Joke from "./pages/Joke"
// import Card  from "./components/Card"
// import Grid from "./pages/Grid"
// import SearchBar from "./components/SearchBar"
// import './App.css'

// function App() {
//    return (
//     <>
//       {/* <Home/> */}
//       {/* <Joke/> */}
//       <Card/>
//       <Grid/>
//       <SearchBar/>
//     </>
//   )
// }

// export default App
