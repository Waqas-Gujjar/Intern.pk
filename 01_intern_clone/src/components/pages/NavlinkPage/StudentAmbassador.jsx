  import React from 'react'
  import  background from '../../../assets/images/studentambassador/background.jpg'

  const StudentAmbassador = () => {
    return (
      <>
      <div className='w-full h-full'>
        <div className='w-full h-full'>
          <img src={background} alt="background" className='w-full opacity-30  h-150 object-cover' />
          <div className='absolute top-90 left-45   -translate-x- -translate-y-1/2'>
          <h1 className='text-white text-6xl font-bold'>Internee.pk <br/> 
          Student Ambassadors</h1>
          </div>
          <div className='  absolute top-0  w-full '>
            <div className='  mt-120 h-100   bg-[#1e1e1e] '>
              <h1>jaifiau</h1>
              

            </div>

          </div>
          
        </div>
      </div>
      </>
    )
  }

  export default StudentAmbassador