import "./Trip/Trip.css"



const TripData = ({image,title,description}) => {
  return (
    <div className="t_card">
        <div className="t_image">
            <img src={image} alt="image travel destination" />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default TripData