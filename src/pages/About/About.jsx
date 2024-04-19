import HeroImg from "../../assets/night.jpg"
import Hero from "../../components/Hero/Hero"

const About = () => {
  return (
    <div>
      <Hero title={'A empresa'} classes={'hero_mid'} btnClass={'hide'}  text={'Saiba mais sobre a nossa história '} src={HeroImg} />
    </div>

  )
}

export default About