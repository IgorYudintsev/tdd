//тесты+map

export type peopleTYpe = {
    name: string,
    age: number
}

const people: Array<peopleTYpe> = [
    {name: 'Igor Yudintsev', age: 41},
    {name: 'Sasha Yudintsev', age: 11},
    {name: 'Olga Yudintseva', age: 18},
]

const Transformator = (people: peopleTYpe) => {
    return {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: people.name.split(' ')[0],
        lastName: people.name.split(' ')[1],
    }
}
//нужно получить
const devs = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Igor', lastName: 'Yudintsev'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Sasha', lastName: 'Yudintsev'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Olga', lastName: 'Yudintseva'
    },
]
const newDev = people.map((people: peopleTYpe) => ({
    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: people.name.split(' ')[0],
    lastName: people.name.split(' ')[1],
}));
const newDev2 = people.map((m) => ({
    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: m.name.split(' ')[0],
    lastName: m.name.split(' ')[1],
}));


export function peopleMessage(people: Array<peopleTYpe>, word: string, sentens: string) {
return people.map(m=>word+m.name.split(' ')[0]+sentens);
}



