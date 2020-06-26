import {sum, Test} from "./01";
import {mult} from "./01";

let a :number;
let b :number;
let c :number;

beforeEach(()=>{
    a =1
    b =2
    c =3
})
test('sum should be correct', () => {
    //data
    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})


test('mult should be correct', () => {
    //data
    //action
    const result1 = mult(a, b);

    //expect result
    expect(result1).toBe(2)
})

test('split is correct', () => {
    //data
    var sentence = 'Hellow my friends!';

    //action
    let result = Test(sentence);


    expect(result).toBe('hellow my friends')
})