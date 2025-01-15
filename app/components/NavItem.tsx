"use client"

import { PRODUCT_CATEGORIES } from "../config"
import { Button } from "./button"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category
    handleOpen: ()=> void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({isAnyOpen, category, handleOpen, isOpen}: NavItemProps) => {

return <div className="flex">
    <div className="relative flex items-center">
     <Button className="gap-1.5" onClick={handleOpen}>
        {category.label}
    </Button>


    </div>
</div>

}
export default NavItem
