import React, {useContext} from 'react'
import {GlobalInfo} from './App'
import { Superchild } from './Superchild';


export const Child = () => {
  const{appcolor}= useContext(GlobalInfo);
    return (
    <div>
        <h1 style={{color: appcolor}}>Child</h1>
        <Superchild/>
        </div>
  )
}
