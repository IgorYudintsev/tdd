//тесты+map

// import {cityType} from "../02/02_02";

export let listOfGovernmentBuildings=(city:cityType)=>{
    return city.governmentBuildings.map(m=>m.type);
}

export let housesStreet=(city:cityType)=> {
    return city.houses.map(m => m.address.street.title)
}

export let streetMessages=(city:cityType,message:string)=>{
    return city.houses.map(m=> `${m.address.street.title}${message}`)
}