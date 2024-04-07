import { useState } from 'react'
import EventManager from '../components/EventManager'
import Setup from '../components/Setup'

export default function Game() {

    const [config, setConfig] = useState({doorsQuantity: 0, giftDoor: 0})

    return (
        <>
            {!config.doorsQuantity && <Setup onStart={(doorsQuantity, giftDoor) => setConfig({doorsQuantity, giftDoor})}></Setup>}
            {config.doorsQuantity && <EventManager doorsQuantity={config.doorsQuantity} giftOnDoor={config.giftDoor}></EventManager>}
        </>
    )
}