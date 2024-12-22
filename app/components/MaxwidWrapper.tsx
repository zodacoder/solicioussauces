import { ReactNode } from "react";
import { cn } from "../../../src/app/lib/utils";
//creating maxwid function
const MaxwidWrapper = ({className, children}:{ className?: string                 //putting this on new line so its read seprately 
                                               children:ReactNode}) => {
                                            return(<div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className//if i pass this in itll override the preset className
                                            )}>{children}</div>)        }//max-w-screen-xl is a 1280 pxl screen limit
export default MaxwidWrapper//allowing use of this component in other files
