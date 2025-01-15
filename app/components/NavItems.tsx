"use client"

import { useState } from 'react'
import { PRODUCT_CATEGORIES } from '../config'
import NavItem from './NavItem'

const NavItems = () => {

const [activeIndex, setActiveIndex] = useState< null | number > (null)






return <div className='flex gap-4 h-full'>

{PRODUCT_CATEGORIES.map((category, index) =>{

const handleOpen = () => {

    if(activeIndex === index) {
        setActiveIndex(null)
    } else{
        setActiveIndex(index)
    }
} 

const isOpen = index === activeIndex

return (<NavItem/>)


})}

</div>







    
}
export default NavItems
