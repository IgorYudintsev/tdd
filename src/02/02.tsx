// //Типизация+тесты
// export type studentType = {
//     name: string,
//     age: number,
//     isActive: boolean,
//     technologies: Array<inArrayType>,
//     address: addressType
// }
// type inArrayType = {
//     id: number,
//     title: string
// }
// export type cityType = {
//     title: string,
//     country: string
// }
// export type addressType = {
//     street: string,
//     city: cityType
// }
//
// export const student: studentType = {
//     name: 'Sasha',
//     age: 11,
//     isActive: false,
//     address: {
//         street: 'Fohelya',
//         city: {
//             title: 'Minsk',
//             country: 'Belarus'
//         }
//     },
//     technologies: [
//         {
//             id: 1,
//             title: 'HTML'
//         },
//         {
//             id: 2,
//             title: 'HTML'
//         },
//         {
//             id: 3,
//             title: 'JS'
//         }
//     ]
// }
// //
// //
// // console.log(student.age);
// // console.log(student.name);
// // console.log(student.address.city.title);
// // console.log(student.technologies[2].title)