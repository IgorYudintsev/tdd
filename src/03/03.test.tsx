//тесты+функции
import {addSkill, addSkill2, studentAddress} from './03'
import {studentType} from "../02/02";

let student: studentType;

beforeEach(() => {
    student = {
        name: 'Sasha',
        age: 11,
        isActive: false,
        address: {
            street: 'Fohelya',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'HTML'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }
})

test.skip('function should be corrected', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "React");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("React")
})

test.skip('student shoul be active', () => {
    expect(student.isActive).toBe(false);
    addSkill2(student, true);
    expect(student.isActive).toBe(true);
})

test.skip('student live in Minsk', () => {
    let result1 = studentAddress(student, 'Moscow');
    let result2 = studentAddress(student, 'Minsk');
    expect(result1).toBe(false);
    expect(result2).toBe(true);
})











