import React from 'react'

function Registration() {
  return (
    <div > 
        <div className=' bg-gradient-to-r from-cyan-500 to-blue-500  flex justify-center items-center h-screen border border-black-300'>
         <form> 
            <div className='border border-black-400 p-20 text-center bg-white'>
            <h1 class="text-cyan-400 font-bold font-sans text-xl">Creating account</h1> 


<br/>         
<input  placeholder="Name" type="text" class=" border border-white-100 rounded p-2"/>
<br/>
<br/>
<input placeholder ="Email" type="text"  class=" border border-white-100 rounded p-2"/> 
<br/>
<br/>
<input placeholder="Password" type="password" class=" border border-white-100 rounded p-2"/> 
<br/> 
<br/>
<button class="px-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white mr-2">Sign in </button>
<button class="px-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white">Sign out</button>
</div>
         </form>
         </div>
      
    </div>
  )
}

export default Registration
