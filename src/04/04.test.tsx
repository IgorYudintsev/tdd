//тесты+filter

import { cursesType } from "./04";

test.skip('old age', () => {
   const age = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

   const oldAge=age.filter((age:number)=> age>90);

    expect(oldAge.length).toBe(1)
    expect(oldAge[0]).toBe(100)
})

test.skip('give me cheap courses',()=>{
    let curses=[
        {title:'css',prise:100},
        {title:'js',prise:200},
        {title:'react',prise:150}
    ];

    const CheapPredicate=(curses:cursesType)=>{
        return curses.prise<160;
    }

    const CheapestCurses= curses.filter((curses:cursesType)=> curses.prise<160);
    expect(CheapestCurses.length).toBe(2);
    expect(CheapestCurses[0].prise).toBe(100);

})

test.skip('get only completed tasks',()=>{
    let tasks=[
        {id:1, title:'Bread',isDone:false},
        {id:2, title:'Milk',isDone:true},
        {id:3, title:'Solt',isDone:false},
        {id:4, title:'Sugar',isDone:true},
    ];

    const completedtasks=tasks.filter(tasks=>tasks.isDone);
    expect(completedtasks.length).toBe(2);


})
