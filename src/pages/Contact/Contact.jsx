import HeroImg from "../../assets/1.jpg"
import ContactForm from "../../components/ContactFrom/ContactForm"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"

const Contact = () => {
  return (
    <div>
      <Hero classes={'hero_mid'} title={'Fale Conosco'} text={'Queremos ouvir você! Entre em contato para tornar sua viagem memorável'} src={HeroImg}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact