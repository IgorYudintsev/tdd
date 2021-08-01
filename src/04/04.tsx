//тесты+filter
import {cityType} from "./../02/02_02";
import {staffCount} from "../03/03";

let age=[10,20,30,40,50,60,70,80,90,100];

export let predicate=(age:Array<number>)=>{
    return age.filter(f=>f>90)
}
//-------------------------------------------------------
let curses=[
    {title:'css',prise:100},
    {title:'js',prise:200},
    {title:'react',prise:160}
];

export type cursesType={
    title:string,
    prise:number
}

//========================================

export let lastStreet=(city:cityType,valueStreet:string)=>{
    city.houses= city.houses.filter(f=>f.address.street.title==valueStreet)
}

export let countWorkesFoo=(city:cityType,staffCount:number)=>{
    city.governmentBuildings= city.governmentBuildings.filter(f=>f.staffCount>staffCount)
}