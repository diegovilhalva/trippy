import "./Destination.css"




const DestinationData = ({title,desc,img1,img2,cName}) => {
    return (
        <div>
            <div className={cName}>
                <div className="des_text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="image">
                    <img src={img1} alt="taal vulcano" />
                    <img src={img2} alt="taal vulcano 2" />
                </div>
            </div>

        </div>
    )
}

export default DestinationData