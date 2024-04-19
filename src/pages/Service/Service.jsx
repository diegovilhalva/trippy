import HeroImg from "../../assets/2.jpg"
import Hero from "../../components/Hero/Hero"

const Service = () => {
  return (
   <Hero src={HeroImg} classes={'hero_mid'} title={'Nossos serviços'} text={'Confira tudo o que oferecemos a você'}/>
  )
}

export default Service