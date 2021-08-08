import React from "react";

export type propsType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>
    address: { street: { title: string } }
}

type PropsType = {
    title: string
    man: propsType
    food:Array<string>
    car:{model:string}
}

// export const ManComponent: React.FC<PropsType> = (props) => {
    // const {title}=props;
    // const {name}=props.man;
    // const{title,man:{name}}=props

export const ManComponent: React.FC<PropsType> = ({title,man,...props}) => {

     return (
        <div>
            <h1>{title}</h1>
            <div>{name}</div>
            <div>{props.food}</div>
            <div>{props.car.model}</div>
        </div>
    )
}
