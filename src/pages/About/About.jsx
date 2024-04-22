import HeroImg from "../../assets/night.jpg"
import AboutUs from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"

const About = () => {
  return (
    <div>
      <Hero title={'A empresa'} classes={'hero_mid'} btnClass={'hide'}  text={'Saiba mais sobre a nossa história '} src={HeroImg} />
      <AboutUs/>
      <Footer/>
    </div>

  )
}

export default About