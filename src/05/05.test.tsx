//тесты+map

import {peopleTYpe, peopleMessage} from "./05";

let people: Array<peopleTYpe>

beforeEach(() => {
    people = [
        {name: 'Igor Yudintsev', age: 41},
        {name: 'Sasha Yudintsev', age: 11},
        {name: 'Olga Yudintseva', age: 18},
    ]
})


test.skip('get me message', () => {
    let messages= peopleMessage(people,'Hellow ',' Welcome to It-incubator')
       // const messages = people.map(m => 'Hellow ' + m.name.split(' ')[0] + ' Welcome to It-incubator');

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hellow Igor Welcome to It-incubator')

})





















