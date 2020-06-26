export function sum(a: number, b: number) {
    return a+b;
}


export function mult(a: number, b: number) {
    return a *b;
}


export function Test(sentence: string) {
    let a = sentence.split(' ');
    let b = a.join(' ').toLowerCase().slice(0,-1);
    console.log(b[0])
    return b;



}