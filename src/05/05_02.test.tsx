//тесты+filter

import {cityType} from "./../02/02_02";

import {staffCount} from "../03/03";
import {housesStreet, listOfGovernmentBuildings, streetMessages} from "./05_02";

let city: cityType

beforeEach(() => {
    city = {
        title: 'Minsk',
        houses: [{
            id:1,
            buildedAt: 2012,
            repaired: false,
            address:{
                number:100,
                street: {
                    title:'White street'
                }
            }
        }, {
            id:2,
            buildedAt: 2008,
            repaired: true,
            address:{
                number:10,
                street: {
                    title:'Black street'
                }
            }
        }, {
            id:3,
            buildedAt: 2088,
            repaired: false,
            address:{
                number:1,
                street: {
                    title:'Black street'
                }
            }
        }],
        governmentBuildings: [
            {
                type:'HOSPITAL',
                budget:200000,
                staffCount:200,
                address:{
                    street:{
                        title:'Central Str'
                    }
                }
            },
            {
                type:'FireSTATION',
                budget:500000,
                staffCount:100,
                address:{
                    street:{
                        title:'South Str'
                    }
                }
            },
        ],
        citizenNumber: 100000
    }
})


test.skip('list of governmentBuildings',()=>{
 let result=   listOfGovernmentBuildings(city)
  // let result=city.governmentBuildings.map(m=>m.type);
    expect(result.length).toBe(2);
})


test.skip(' houses street',()=>{
    let result=housesStreet(city);

    expect(result.length).toBe(3)
})

test.skip('create street messages',()=>{
    let result=streetMessages(city,' dont elect to Luka');
    expect(result.length).toBe(3);
    expect(result[0]).toBe('White street dont elect to Luka')
})