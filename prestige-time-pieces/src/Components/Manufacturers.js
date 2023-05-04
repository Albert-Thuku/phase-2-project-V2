import React, {useState} from "react";

function Manufacturers({watchData, onManufacturerSelect}){

    const [manufacturerList, setManufacturerList] = useState([])
    const [selectedManufacturer, setSelectedManufacturer] = useState(null)

    watchData.forEach((watch)=>{
        if(!manufacturerList.includes(watch.manufacturer)){
            setManufacturerList([...manufacturerList, watch.manufacturer])
        }
    })

    /* Add set function from parent component to pass data back up  */
    function manufacturerSelect(manufacturer){
        if(manufacturer){
            setSelectedManufacturer(manufacturer)
            onManufacturerSelect(manufacturer)
        }else{
            setSelectedManufacturer(null)
            onManufacturerSelect(null)
        }
    }

    return (
        <div className="ManufacturerDiv">
            <button onClick={() => manufacturerSelect(null)}>All</button>
            {manufacturerList.map((manufacturer)=>{
                return (
                    <button 
                        onClick={() => manufacturerSelect(manufacturer)} 
                        key={manufacturer}
                        className={selectedManufacturer === manufacturer ? 'active' : ''}
                    >
                        {manufacturer}
                    </button>
                );
            })}
        </div>
    );
}

export default Manufacturers;