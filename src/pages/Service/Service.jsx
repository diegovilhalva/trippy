import HeroImg from "../../assets/2.jpg"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Trip from "../../components/Trip/Trip"

const Service = () => {
  return (
    <div>
      <Hero src={HeroImg} classes={'hero_mid'} title={'Nossos serviços'} text={'Confira tudo o que oferecemos a você'} />
      <Trip/>
      <Footer />
    </div>
  )
}

export default Service