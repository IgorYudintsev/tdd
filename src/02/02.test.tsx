import {cityType} from "./02_02";

let city: cityType

beforeEach(() => {
    city = {
        title: 'Minsk',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address:{
                number:100,
                street: {
                    title:'White street'
                }
            }
        }, {
            buildedAt: 2008,
            repaired: true,
            address:{
                number:10,
                street: {
                    title:'Black street'
                }
            }
        }, {
            buildedAt: 2088,
            repaired: false,
            address:{
                number:1,
                street: {
                    title:'Wihout street'
                }
            }
        }],
        governmentBuildings: [],
        citizenNumber: 100000
    }
})
test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe('White street');

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(10);
    expect(city.houses[1].address.street.title).toBe('Black street');

    expect(city.houses[2].buildedAt).toBe(2088);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(1);
    expect(city.houses[2].address.street.title).toBe('Wihout street');
})

test.skip('test city should hospital and fire station', () => {
    //data
    //action
    //expect result
})