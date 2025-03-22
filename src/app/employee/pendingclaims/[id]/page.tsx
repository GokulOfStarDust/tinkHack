'use client'
import React from 'react'
import { useParams } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
    const params = useParams();
  const id = params.id;
  const claim =
    {id:1, name:"Claim 1", status:"Pending",claimdesc:"this claim is to vclaim forthe accident of jhonthis claim is to vclaim forthe accident of jhonthis claim is to vclaim forthe accident of jhonthis claim is to vclaim forthe accident of jhon",claimid:1,claimdata:["/assets/img1.jpg","/assets/img2.jpg"]};
  return (
    <>
    <div className='flex justify-between items-center  p-5'>
            <Link
              href="employee/pendingclaims"
              className="relative z-20 flex items-center space-x-2 text-sm lg:text-xl rounded-lg font-normal bg-white px-4 py-2 text-black"
            >
               back
            </Link>
        </div>
    <div className='flex flex-col lg:flex-row justify-center  items-center h-screen'>
        
        <div className='flex w-1/2 justify-center items-center gap-5 mb-5 px-4'>
            <Image src={claim.claimdata[0]} alt=""  width={200} height={200}/>
            <Image src={claim.claimdata[1]} alt="" width={200} height={200}/>
            

        </div>
        <div className='flex flex-col w-full px-5 lg:w-1/2 justify-center items-start gap-5 lg:py-5 lg:px-10'> 
        <h1 className='lg:text-7xl font-bold font-sans'>{claim.name}</h1>
        <p className='lg:text-2xl font-sans text-justify'>{claim.claimdesc}</p>
        <div className='flex w-full justify-between items-center'>
            <Link
              href="employee/pendingclaims/[id]/review"
              as={`${claim.claimid}/review`}
              className="relative z-20 flex text-center  w-full items-center space-x-2 text-sm lg:text-xl rounded-lg font-normal bg-white px-4 py-2 text-black"
            >
               Review Claim
            </Link>
        </div>
        </div>
        <div>
        
        </div>
        
    </div>
    
    </>
  )
}

export default page