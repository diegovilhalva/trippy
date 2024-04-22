import React from 'react'
import Hero from '../../components/Hero/Hero'
import HeroImg from "../../assets/12.jpg"
import Destination from '../../components/Destination/Destination'
import Trip from '../../components/Trip/Trip'

const Home = () => {
  return (
    <div>
      <Hero src={HeroImg} title={'Descubra o mundo'} text={' Vivencie experiências únicas'} classes={'hero'} btnText={'Saiba Mais'} url={'/'} btnClass={'show'} />
      <Destination/>
      <Trip/>
    </div>
  )
}

export default Home