import { useState } from "react"
import Door from "@/components/Door"
import styles from '../styles/EventManager.module.css'

interface EventManagerProps {
    doorsQuantity: number
    multiSelect?: boolean
    giftOnDoor: number
}

export default function EventManager({doorsQuantity, multiSelect = false, giftOnDoor} : EventManagerProps) {
    
    const makeDoors = (quantity: number, giftIndex: number) => {
        return Array.from({ length: quantity }, (_, index) => {
            return (
                <Door 
                    key={index}
                    number={index + 1} 
                    selected={false} 
                    open={false} 
                    gift={index + 1 === giftIndex} 
                    onSelect={() => handleSelect(index)} 
                    onOpen={() => handleOpen(index)}>            
                </Door>
            )
        })
    }

    const [doors, setDoors] = useState(makeDoors(doorsQuantity, giftOnDoor))

    const handleSelect = (selectedIndex: number) => {   
        setDoors(doors.map((door, index) => ({
            ...door,
            props: {
                ...door.props,
                selected: selectedIndex === index ? !door.props.selected : multiSelect ? door.props.selected : false
            }
        })))       
    }

    const handleOpen = (selectedIndex: number) => {   
        setDoors(doors.map((door, index) => ({
            ...door,
            props: {
                ...door.props,
                selected: selectedIndex === index ? false : door.props.selected,
                open: selectedIndex === index ? true : door.props.open
            }
        })))       
    }

    return (
        <div className={styles.container}>
            {doors.map((door, index) => (
                <Door 
                    key={index}
                    number={door.props.number} 
                    selected={door.props.selected} 
                    open={door.props.open} 
                    gift={door.props.gift} 
                    onSelect={() => handleSelect(index)} 
                    onOpen={() => handleOpen(index)}>            
                </Door>
            ))}
        </div>
    )
}