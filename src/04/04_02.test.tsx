//тесты+filter

import {cityType} from "./../02/02_02";
import {countWorkesFoo, lastStreet} from "./04";
import {staffCount} from "../03/03";

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


test.skip('demolition streets',()=>{
      lastStreet(city,'White street');
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.street.title).toBe('White street');
})

test.skip ('count workers',()=>{
    countWorkesFoo(city,100);
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings.length).toBe(1)
})
