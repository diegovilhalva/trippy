import TripData from "../TripData"
import "./Trip.css"
import Trip1 from "../../assets/5.jpg"
import Trip2 from "../../assets/8.jpg"
import Trip3 from "../../assets/6.jpg"


const Trip = () => {
  return (
    <div className="trip">
      <h1>Viages Recentes</h1>
      <p> Explore destinos emocionantes em nossas viagens! </p>
      <div className="trip_card">
        <TripData image={Trip1} title={'Veneza, Itália'} description={'Encante-se com Veneza, uma cidade única no mundo, onde os canais sinuosos revelam séculos de história. Perca-se nas ruas estreitas e apaixone-se pela arquitetura magnífica. Em cada esquina, uma nova história espera por você.'} />
        <TripData image={Trip2} title={'Bali, Indonésia'} description={'Descubra a mágica de Bali, um paraíso tropical que combina praias deslumbrantes, campos de arroz verdejantes e uma rica cultura. Delicie-se com a culinária local e mergulhe na tradição balinesa. Bali oferece uma experiência única que encanta todos os sentidos.'} />
        <TripData image={Trip3} title={'Santorini, Grécia'} description={'Encante-se com Santorini, uma ilha grega de tirar o fôlego. Com suas casas brancas e cúpulas azuis, contrastando com o mar Egeu, é o destino perfeito para um refúgio romântico. Explore suas charmosas vilas à beira-mar, saboreie a culinária local e mergulhe nas águas cristalinas das praias vulcânicas. Uma experiência única aguarda você em Santorini.'} />
      </div>
    </div>
  )
}

export default Trip