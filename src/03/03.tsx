//тесты+функции

import {student, studentType} from "../02/02";
import {cityType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}


const res = sum(2, 3);

export const addSkill = (student: studentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkill2 = (student: studentType, isActive: boolean) => {
    student.isActive = true
}

export const studentAddress = (student: studentType, title: string) => {
    if (student.address.city.title === title) {
        return true
    } else {
        return false
    }
}

export const moneyToHospital = (city: cityType, budgetMoney: number) => {
    return city.governmentBuildings[0].budget += budgetMoney;
}

export const moneyToFireSTATION = (city: cityType, firststationBudget: number) => {
    return city.governmentBuildings[1].budget -= firststationBudget
}

export const demolishHousesOnTheStreet = (city: cityType, demolishNumber: number) => {
    for (let i = 0; i <= 2; i++) {
        if (city.houses[i].address.street.title == 'White street') {
           return city.houses[i].address.number = demolishNumber;
        }
    }
}

export const repairedHouses=(city:cityType,repairedValue:boolean)=>{
  for(let i=0;i<=2;i++){
      city.houses[i].repaired=true;
  }
}

export const staffCount=(city:cityType,staffCountValue:number)=>{
return city.governmentBuildings[0].staffCount-=staffCountValue;
}

export const changeCity=(city:cityType,changeCityValue:string)=>{
return city.title='San-Hose';
    return city.title='San-Hose'+city.title+'Hellow Igor';
}