import React from 'react'
import Hero from '../../components/Hero/Hero'
import HeroImg from "../../assets/12.jpg"

const Home = () => {
  return (
    <div>
      <Hero src={HeroImg} title={'Descubra o mundo'} text={' Vivencie experiências únicas'} classes={'hero'} btnText={'Saiba Mais'} url={'/'} btnClass={'show'} />
    </div>
  )
}

export default Home