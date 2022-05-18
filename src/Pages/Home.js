import {React, useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Section/Hero';
import QuemSomos from '../Components/Section/QuemSomos';
import Missao from '../Components/Section/Missao';
import Visao from '../Components/Section/Visao';
import Responsabilidades from '../Components/Section/Responsabilidades';
import Footer from '../Components/Section/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Hero/>
        <QuemSomos/>
        <Missao/>
        <Visao/>
        <Responsabilidades/>
        <Footer/>
    </>
  )
}

export default Home