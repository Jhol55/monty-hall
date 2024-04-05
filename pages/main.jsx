import Door from "../components/Door";
import Present from "../components/Present";
import DoorModel from "../models/Door";

export default function() {
    return (
        <>
            <Door value={new DoorModel(3)}/>        
        </>
        
    )
}