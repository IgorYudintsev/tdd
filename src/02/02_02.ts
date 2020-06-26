type streetType= {
    title:string
}

type addressType={
    number:number,
    street:streetType
}

type houseType={
    buildedAt:number,
    repaired:boolean,
    address:addressType
}

export type cityType={
    title: string,
    houses: Array<houseType>,
    governmentBuildings: Array<string>,
    citizenNumber: number
}
