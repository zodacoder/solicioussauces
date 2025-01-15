import Link from "next/link"
import MaxwidWrapper from "./MaxwidWrapper"
import { Icons } from "./icons"


const NavBar = () => {
return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'> 
        <header className='relative bg-white'>
        <MaxwidWrapper>
        <div className='border-b border-gray-200'>

            <div className='flex h-16 items-center'>
             {/*TODO: MOBILE NAV BAR */}
              
              <div className='ml-4 flex lg:ml-0'>
              {/*TODO: ADD SOLICIOUS LOGO */}
              <Link href='/'>{/*slash will be home page */}

              <Icons.logo className='ml-4 flex lg:ml-0'></Icons.logo>
              </Link>
              </div>
            </div>
        </div>

        </MaxwidWrapper>


        </header>
    </div>
)

}

export default NavBar
