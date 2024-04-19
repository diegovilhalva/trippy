import "./Destination.css"
import img from "../../assets/1.jpg"
import img2 from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
import img4 from "../../assets/13.jpg"
import DestinationData from "./DestinationData"
const Destination = () => {
    return (
        <div className="destination">
            <h1>Destinos Populares</h1>
            <p>Explore destinos populares. De praias a cidades, encontre sua próxima aventura conosco</p>
            <DestinationData cName={'first_des'} title={'Vulcão Taal,Filipinas'} desc={'O Vulcão Taal, nas Filipinas, é uma maravilha natural incomparável. Situado em meio a um lago calmo e cercado por uma paisagem deslumbrante, este vulcão ativo oferece uma experiência única aos viajantes aventureiros. Explore suas trilhas vulcânicas, admire sua cratera fumegante e maravilhe-se com as vistas panorâmicas deslumbrantes. Com sua beleza impressionante e sua fascinante história geológica, o Vulcão Taal é uma parada obrigatória para quem visita as Filipinas'} img1={img} img2={img2} />
            <DestinationData cName={'first_des_reverse'} title={'Paris,França'} desc={'Paris, a cidade das luzes, é um destino que cativa os corações de milhões de viajantes todos os anos. Com sua arquitetura icônica, história rica e atmosfera romântica, Paris é verdadeiramente uma experiência inesquecível. Deixe-se encantar pela Torre Eiffel iluminada à noite, explore os famosos museus como o Louvre e desfrute de delícias culinárias em charmosos cafés à beira do rio Sena. Com tantos pontos turísticos e experiências culturais para desfrutar, Paris é um destino que certamente deixará uma marca duradoura em sua memória de viagem'} img1={img3} img2={img4} />
            
        </div>
    )
}

export default Destination