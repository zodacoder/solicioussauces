import Image from "next/image";
import MaxwidWrapper from "./components/MaxwidWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./components/button";

export default function Home() {
  return  <MaxwidWrapper>
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
            <Button variant='ghost'>Our product promise</Button>
            </div>   {/*for buttons*/}
  </div>
  {/*TODO: Add products list*/}
  </MaxwidWrapper>
}
 