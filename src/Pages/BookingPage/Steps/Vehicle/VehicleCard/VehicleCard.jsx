import styles from "./VehicleCard.module.css"

export function VehicleCard({vehicle, selectedCard,setSelectedCard}) {
    return (
        <>
            <div className={selectedCard===vehicle.id ? styles.vehicleCardSelected : styles.vehicleCard} onClick={() => setSelectedCard(vehicle.id)}>
                <div className={styles.vehicleImage}>
                    <img src={vehicle.image} />
                </div>

                <div className={styles.namePriceContainer}>
                    <div style={{display:"flex", flexDirection:"column", position:"relative", bottom:"12px"}}>
                        <div style={{fontWeight:"500", fontSize:"21px"}}> {vehicle.name} </div>
                        <div style={{fontWeight:"400", fontSize:"medium"}}> {vehicle.description} </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", lineHeight:"22px"}}>
                        <div style={{fontWeight:"700", fontSize:"x-large", textAlign:"right"}}> ${vehicle.price} </div>
                        <div style={{fontWeight:"400", fontSize:"medium", textAlign:"right"}}> per day </div>
                        <div style={{fontWeight:"400", fontSize:"medium"}}> Excl. taxes & insurance </div>
                    </div>
                </div>

                <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                        <img height={"21px"} src={vehicle.features[0].icon}/>
                        <div> {vehicle.features[0].label} </div>
                    </div>
                    <div className={styles.feature}>
                        <img height={"24px"} src={vehicle.features[1].icon}/>
                        <div> {vehicle.features[1].label} </div>
                    </div>
                    <div className={styles.feature}>
                        <img height={"24px"} src={vehicle.features[2].icon}/>
                        <div> {vehicle.features[2].label} </div>
                    </div>
                    <div className={styles.feature}>
                        <img height={"24px"} src={vehicle.features[3].icon}/>
                        <div> {vehicle.features[3].label} </div>
                    </div>
                </div>

                <div style={{border:"none", height:"1px", width:"90%", marginLeft:"5%", marginBottom:"20px", backgroundColor:"gray", marginTop:"20px"}}></div>

                <div style={{position:"relative", left:"20px"}} >
                    <p style={{fontWeight:"700"}}> What's Included</p>
                    <div className={styles.includedGrid}>
                        {
                            vehicle.included.map(item => (<div> {item} </div>))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}