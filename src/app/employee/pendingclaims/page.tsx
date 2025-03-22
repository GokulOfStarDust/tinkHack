import React from 'react'

const page = () => {
  const claims = [ 
    {id:1, name:"Claim 1", status:"Pending",claimid:1},
    {id:2, name:"Claim 2", status:"Pending",claimid:2},
    {id:3, name:"Claim 3", status:"Pending",claimid:3},
  
    {id:6, name:"Claim 6", status:"Pending",claimid:6},{id:1, name:"Claim 1", status:"Pending",claimid:1},
    {id:2, name:"Claim 2", status:"Pending",claimid:2},
    {id:3, name:"Claim 3", status:"Pending",claimid:3},
    {id:4, name:"Claim 4", status:"Pending",claimid:4},
    {id:5, name:"Claim 5", status:"Pending",claimid:5},
    {id:6, name:"Claim 6", status:"Pending",claimid:6},
 ];
  return (
    <div className='bg-neutral-900'>
      <h1 className='text-4xl mt-4 lg:text-8xl font-bold'>Pending Claims</h1>
      <div>
        {claims.map((claim) => { return(
          <div key={claim.id} className='border border-2 h-full rounded-lg border-white p-4 mt-4'>
            <div className='flex justify-between items-center'><h2 className='text-5xl font-bold mb-3'>{claim.name}</h2>
            <a href={`/employee/pendingclaims/${claim.claimid}`} className='text-3xl font-bold text-black bg-white rounded-lg px-2 py-1'>View</a>

          </div>
          <div className='flex '><p className='text-sm font-bold text-black bg-amber-300 rounded-lg px-2 py-1'>{claim.status}</p></div>
          </div>

        ) })} 
      </div>
    </div>
  )
}

export default page