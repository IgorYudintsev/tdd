//тесты+функции
import { cityType } from "../02/02_02"
import {
    changeCity,
    demolishHousesOnTheStreet,
    moneyToFireSTATION,
    moneyToHospital,
    repairedHouses,
    staffCount
} from "./03";

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
            repaired: false,
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
                    title:'Wihout street'
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

test.skip('add money to Hospital',()=>{
    expect(city.governmentBuildings[0].budget).toBe(200000);
    let bdMoney=moneyToHospital(city,300000);

   expect(city.governmentBuildings[0].budget).toBe(500000);
})
test.skip('FireSTATION money',()=>{
    let bdMoney=moneyToFireSTATION(city,300000);
    expect(city.governmentBuildings[1].budget).toBe(200000);

})

test.skip('add money to FireSTATION',()=>{
    expect(city.governmentBuildings[1].budget).toBe(500000);
     moneyToFireSTATION(city,100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test.skip('Houses should be destroyed',()=>{
    expect(city.houses[0].address.number).toBe(100);
    demolishHousesOnTheStreet(city,0);
    expect(city.houses[0].address.number).toBe(0);
})

test.skip('Houses should be repaired',()=>{
  expect(city.houses[0].repaired).toBe(false);
  repairedHouses(city,true);
    expect(city.houses[0].repaired).toBe(true);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[2].repaired).toBe(true);
})

test.skip('staffCount',()=>{
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    staffCount(city,200);
    expect(city.governmentBuildings[0].staffCount).toBe(0);
})

test.skip('change city',()=>{
    expect(city.title).toBe('Minsk');
    changeCity(city,'San-Hose');
    expect(city.title).toBe('San-Hose')
})