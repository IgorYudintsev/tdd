type ManType={
    name: string
    age: number
    lessons:Array<{title: string}>//это не объект,это тип просто синтаксис схожий
    address: {
        street: {
            title: string
        }
    }
}




let props:ManType;
beforeEach(()=>{
    props = {
        name: 'Dimich',
        age: 32,
        lessons: [{title: '1'}, {title: '1'}],
        address: {
            street: {
                title: 'fohelya street'
            }
        }
    }
})

test.skip('', () => {

    const age=props.age;
    const lessons=props.lessons;
    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
})
