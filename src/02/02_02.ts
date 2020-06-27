//Типизация+тесты
type streetType= {
    title:string
}
type addressType={
    number:number,
    street:streetType
}
type houseType={
    id:number,
    buildedAt:number,
    repaired:boolean,
    address:addressType
}


export type cityType={
    title: string,
    houses: Array<houseType>,
    governmentBuildings: Array<governmentBuildingsType>,
    citizenNumber: number
}

type addressStreetType={
    title:string
}
type GovAddressType={
    street:addressStreetType
}
type governmentBuildingsType={
  type:string,
    budget:number,
    staffCount:number,
    address:GovAddressType
}