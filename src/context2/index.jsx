import React, {createContext} from 'react'
import { Maxsulotlar } from '../context/Maxsulotlar/maxsulotlar'
// const MainContext = createContext()

export const MainContext2 = ({children}) => {
    return (
<div>
<Maxsulotlar>{children}</Maxsulotlar>
    
</div>
    )
}
