import Image from "next/image";
import MaxwidWrapper from "./components/MaxwidWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./components/button";
import { BadgeCheck} from "lucide-react";


const Pperks = [
  {
    name: "High Quality Ingredients",
    Icon: BadgeCheck,
    description: "Crafted with locally-sourced, sustainable produce."
  },
  {
    name: "Costs",
    Icon: BadgeCheck,
    description: "Find the perfect heat level for your taste – from mild to blazing hot."
  },
  {
      name: "Free Samples and Tasting Kits ",
      Icon: BadgeCheck,
      description: "Subcribe to our emails and recieve a free sample kit with our 3 flavors, only pay for shipping."
  },
  {
    name: "Food Saftey Approved",
    Icon: BadgeCheck,
    description: "Every featured product has been approved by the FDA"
}
]


export default function Home() {
 
  return   <><MaxwidWrapper>
  <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your marketplace for high-quality{'  '}
      <span className ='text-violet-600'>
         Sauces
         </span>
          .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to Solicious Sauces. Every food product on our 
            platform is GMO free and food saftey approved to ensure our
            highest quality standards.
             </p>{/* end of hero section of the page*/}
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
           <Link href='/products' className={buttonVariants()}>Browse Trending</Link> {/* allows button styling basic but very clean*/}
            <Button variant='ghost'>Our product promise</Button>{/*hero-section button*/}
            </div>   {/*for buttons*/}
  </div>
  {/*TODO: Add products list*/}
  </MaxwidWrapper>
  <section className='border-t border-gray-200 bg-gray-50'>

  <MaxwidWrapper className='py-20'>
    <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
      {Pperks.map((perk) => (
          <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
           <div className='md:flex-shrink-0 flex justify-center'>
            <div className='h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900'>
              {<perk.Icon className='w-1/3 h-1/3'/>}
            </div>
            </div>
            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'></div>
             <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
             <p className='mt-3 text-sm text-muted-foreground'>

              {perk.description}
             </p>
          </div>
      ))}{/*using round braces instead of curly to directly return jsx*/}
      </div>{/* this is unique features section what makes solicious different from competition*/ }
    </MaxwidWrapper> 

  </section>
  </>;{/*this is a fragment it allows you to input multiple child nodes by containing them in an empty element which will be considered the entire node*/}
}
 