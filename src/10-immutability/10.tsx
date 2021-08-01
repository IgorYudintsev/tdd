// export type UserType = {
//     name: string,
//     hair: number,
//     address: {
//         title: string,
//         newaddress: {
//             title2: string
//         }
//     }
// }
//
// export type laptopType = {
//     title: string
// }
// export type userWithLaptopType = UserType & {
//     laptop: laptopType
// }

// export function moveUser(u: UserType, title: string) {
//     // u.hair = u.hair / power
//     let newUser = {
//         ...u,
//         // hair: u.hair / power
//
//         title: u.address.title = title,
//         title2: u.address.newaddress.title2 = title
//     }
//     return newUser
// }


//-------------------------------------------------------------
// export type UserType = {
//     name: string,
//     hair: number,
//     address: {
//         city: string,
//         house:number
//     }
// }
//
// export type laptopType = {
//     title: string
// }
// export type userWithLaptopType = UserType & {
//     laptop: laptopType
// }
//
// // export function moveUser(u: userWithLaptopType, city: string) {
// //     let newUser = {
// //         ...u,
// //     address:{
// //             ...u.address,
// //         city:city
// //     }
// //     }
// //     return newUser
// // }
//
// export function upgradeUserLaptop(u: userWithLaptopType, city: string,comp:string) {
//     let newUser = {
//         ...u,
//         address:{
//             ...u.address,
//             city:city
//         },
//         laptop:{
//             ...u,title:comp
//         }
//     }
//     return newUser
// }


//-------------------------------------------------------------------------
// export type UserType = {
//     name: string,
//     hair: number,
//     address: {
//         city: string,
//         house: number
//     }
// }
//
// export type laptopType = {
//     title: string
// }
// export type userWithLaptopType = UserType & {
//     laptop: laptopType
// }
// export type userWithBooksType = userWithLaptopType & {
//     books: Array<string>
// }
//
//
// export function upgradeUserBooks(u: userWithBooksType, comp: string, book0: string) {
//     let newUser = {
//         ...u,
//         laptop: {
//             ...u, title: comp
//         },
//         books:
//             [...u.books.map((m) => m === 'a' ? m = book0 : m)]
//     }
//     return newUser
// }
//
// export function addNewUserBooks(u: userWithBooksType, comp: string, lastBook: string) {
//     let newUser = {
//         ...u,
//         laptop: {
//             ...u, title: comp
//         },
//         books:
//             [...u.books, lastBook]
//     }
//     return newUser
// }
//
// export function removeUserBooks(u: userWithBooksType, comp: string, removeBook: string) {
//     let newUser = {
//         ...u,
//         laptop: {
//             ...u, title: comp
//         },
//         books:
//         // [ ...u.books.filter(f=>f!==removeBook)]
//             [...u.books.filter(f => f !== 'd')]
//     }
//     return newUser
// }


//----------------------------------------------------------------
export type UserType = {
    name: string,
    hair: number,
    address: {
        city: string,
        house: number
    }
}

export type laptopType = {
    title: string
}
export type userWithLaptopType = UserType & {
    laptop: laptopType
}
export type userWithBooksType = userWithLaptopType & {
    books: Array<string>
}
export type companiesWithType =  {
    [Key:string]: Array<{ id:number,title:string }>
}


export function upgradeUserBooks(u: userWithBooksType, comp: string, book0: string) {
    let newUser = {
        ...u,
        laptop: {
            ...u, title: comp
        },
        books:
            [...u.books.map((m) => m === 'a' ? m = book0 : m)]
    }
    return newUser
}

export function addNewUserBooks(u: userWithBooksType, comp: string, lastBook: string) {
    let newUser = {
        ...u,
        laptop: {
            ...u, title: comp
        },
        books:
            [...u.books, lastBook]
    }
    return newUser
}

export function updateCompany(u: userWithBooksType & companiesWithType, comp: string, updateBook: string) {
    let newUser = {
        ...u,
        laptop: {
            ...u, title: comp
        },
       // companies: [...u.companies,u.companies.map(m=>m.title==='b'? {...m,title:m.title=updateBook}: m)]
      companies: u.companies.map(m=>m.title==='b'? {...m,title:m.title=updateBook}: m)
    }
    return newUser

 }

 export function companiesAssArray(u: companiesWithType, name: string, id: number) {
    let newUser = {
        ...u,
    }
     newUser[name]=newUser[name].map((m)=>m.id===id? {...m,title:m.title='xxx'}: m)

     return newUser

 }