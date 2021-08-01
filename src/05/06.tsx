import React, {ChangeEvent, MouseEvent} from "react";

// const  callback=()=>{
//     alert('Hey')
// }
//
// window.setTimeout(callback,1000);



export const User=()=>{

    const deleteUser=(event:MouseEvent<HTMLButtonElement>)=>{
        alert(event.currentTarget.name)
    }

    const saveUser=()=>{
        alert('user was saved')
    }
    const nameChanged=()=>{
        alert('name changed')
    }

    const onAgeChanged=(event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.currentTarget.name)
    }

    return(
         <div>Dimych
             <button name={'delete'} onClick={deleteUser}>x</button>
             <button name={'save'} onClick={deleteUser}>x</button>
           <textarea  onChange={nameChanged}></textarea>
             <input onChange={onAgeChanged} type={'number'}/>
               </div>

     )
}