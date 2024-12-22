import { ReactNode } from "react";
//creating maxwid function
const MaxwidWrapper = ({className, children}:{ className?: string                 //putting this on new line so its read seprately 
                                               children:ReactNode}) => {
                                            return(<div className='mx-auto w-full max-w-screen-xl'></div>)        }//max-w-screen-xl is a 1280 pxl screen limit
