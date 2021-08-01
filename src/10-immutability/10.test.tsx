import {
    addNewUserBooks, AssArray, companiesAssArray, companiesWithType,
    laptopType,
    moveUser, removeUserBooks, updateCompany,
    upgradeUserBooks,
    UserType,
    userWithBooksType,
    userWithLaptopType
} from "./10";

// function makeHairStyle(u: UserType, power: number) {
//     // u.hair = u.hair / power
//     let newUser = {
//         ...u,
//         hair: u.hair / power
//     }
//     return newUser
//
// }
//
// test.skip('it will be ok', () => {
//     let user: UserType = {
//         name: 'Dimich',
//         hair: 32,
//         address: {
//             title: 'Minsk'
//         }
//     }
//     let newUser = makeHairStyle(user, 2)
//     expect(newUser.hair).toBe(16)
//     expect(user.hair).toBe(32)
// })

test.skip('it will be ok', () => {
    let user: UserType = {
        name: 'Dimich',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }
    let newUser = makeHairStyle(user, 2)
    expect(newUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(user.address.title).toBe(newUser.address.title)
})

test.skip('change address', () => {
    let user: UserType = {
        name: 'Dimich',
        hair: 32,
        address: {
            title: 'Minsk',
            newaddress: {
                title2: 'Minsk'
            }
        }
    }
    let newUser = moveUser(user, 'Kiev')
    expect(newUser.address.title).toBe('Kiev')
    expect(newUser.address.newaddress.title2).toBe('Kiev')
})

test.skip('about laptop', () => {
    let user: userWithLaptopType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        }
    }
    let movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test.skip('about upgrade laptop', () => {
    let user: userWithLaptopType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        }
    }
    let movedUser = upgradeUserBooks(user, 'Kiev','Mac')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
        expect(movedUser.address.city).toBe('Kiev')
    expect(movedUser.laptop.title).toBe('Mac')
})

test.skip('update book', () => {
    let user: userWithBooksType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        },
        books:['a','s','d','f']
    }
    let movedUser = upgradeUserBooks(user, 'Mac','Litvak')


    expect(movedUser.laptop.title).toBe('Mac')
    expect(movedUser.books[0]).toBe('Litvak')
    expect(movedUser.books[1]).toBe('s')
})

test.skip ('add new book', () => {
    let user: userWithBooksType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        },
        books:['a','s','d','f']
    }
    let movedUser = addNewUserBooks(user, 'Mac','Litvak')

    expect(movedUser.laptop.title).toBe('Mac')
    expect(movedUser.books[4]).toBe('Litvak')
    expect(movedUser.books[1]).toBe('s')
    expect(user.books.length).toBe(4)
    expect(movedUser.books.length).toBe(5)
})

test.skip ('remove d', () => {
    let user: userWithBooksType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        },
        books:['a','s','d','f']
    }
    let movedUser = removeUserBooks(user, 'Mac','d')

    expect(movedUser.laptop.title).toBe('Mac')
    expect(movedUser.books[1]).toBe('s')
    expect(user.books.length).toBe(4)
    expect(movedUser.books.length).toBe(3)
})

test.skip ('work with companies', () => {
    let user: userWithBooksType & companiesWithType= {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        },
        books:['a','s','d','f'],
        companies:[
            {id:1,title:'a'},
            {id:2,title:'b'},
            {id:3,title:'c'},
        ]
    }
    let movedUser = updateCompany(user, 'Mac','tootsal')

    expect(movedUser.laptop.title).toBe('Mac')
    expect(movedUser.books[1]).toBe('s')
    expect(user.companies[1].title).toBe('tootsal')

})

test ('work with companies', () => {
    let user: userWithBooksType = {
        name: 'Dimich',
        hair: 32,
        address: {
            city: 'Minsk',
            house:12

        },
        laptop: {
            title:'Lenovo'
        },
        books:['a','s','d','f'],

    }

    let companies:companiesWithType={
        ['Sasha']:[{id:1,title:'a'}, {id:2,title:'b'}],
        ['Igor']:[{id:3,title:'c'}, {id:4,title:'d'}],
    }

    let movedUser = companiesAssArray(companies, 'Sasha',2)

    expect(movedUser['Sasha'][1].title).toBe('xxx')
})