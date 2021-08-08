// test('destruct', () => {
//     let props= {
//         name:'Dimich',
//         age:32,
//         lessons:[{title:'1'},{title: '2'}]
//     }
//
//     const {age,lessons}=props
//
//     expect(age).toBe(32)
//     expect(lessons.length).toBe(2)
//
// })

//-------------------------------------------------------



import {propsType} from "./07";

let props1:propsType;
beforeEach(()=>{
    props1= {
        name:'Dimich',
        age:32,
        lessons:[{title:'1'},{title: '2'},{title: '3'}],
        address:{
            street:{
                title: "Fohelya"
            }
        }
    }
})

test.skip('destruct', () => {
    const {age:a,lessons:l}=props1
    //взяли у props1 значение age и тут же его назначили переменной а
    expect(a).toBe(32)
    expect(l.length).toBe(2)
})

test('destruct array', () => {
  const l1=props1.lessons[0];
  const l2=props1.lessons[1];
    l1.title

    //пропустили нулевой элемент,ls2,остальные запихиваем в ostalnye
  // const[,ls2, ...ostalnye]=props1.lessons
  //   ls2.title

    expect(l1.title).toBe('1')
    expect(l1).toStrictEqual({title:'1'})
    })



















