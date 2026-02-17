import styles from "./Vehicle.module.css"
import {VehicleCard} from "./VehicleCard/VehicleCard.jsx";
import {useEffect, useState} from "react";
import vehiclesData from "@/data/vehicles.json" with { type: "json" };

export function Vehicle({ setVehiclePrice }) {

    const [selectedCard, setSelectedCard] = useState(0)

    useEffect(() => {
        setVehiclePrice(vehiclesData.vehicles[selectedCard].price)
    }, [selectedCard])

    return (
        <div className={styles.VehiclesContainer}>
            <div style={{marginBottom:"30px"}}></div>

            {vehiclesData.vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            ))}
        </div>
    )
}