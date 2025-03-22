import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-8xl font-bold mb-18'>Add New Claim</h1>

        <form action="">
            <label htmlFor="name"className='text-5xl font-bold mb-10'>Claim Name</label><br/>
            <input type="text"  className='text-5xl border border-2-white rounded-lg'/>
        </form>
    </div>
  )
}

export default page