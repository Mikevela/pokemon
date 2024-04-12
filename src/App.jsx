import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import CardList from './components/card-list/CardList';
import Home from './components/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <CardList />
    <Home />
    </>
  )
}

export default App
