import React, {useContext} from 'react'
import {GlobalInfo} from './App'


export const Superchild = () => {
  const{appcolor}= useContext(GlobalInfo);
    return (
    <div>
        <h1 style={{color: appcolor}}>super Child</h1>
        </div>
  )
}
