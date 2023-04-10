import React from 'react'
import {FaPlaneArrival, FaPlaneDeparture, FaChild} from "react-icons/fa"
import {GiPerson} from "react-icons/gi"
import {useForm } from  "react-hook-form"

const FlightApp = () => {
  //handle events
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //handle submit
  const onSubmit = data => alert(JSON.stringify(data));
  return (
  
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
        {/* {header section} */}
        <div className='h-24 flex justify-center items-center shadow'>
          <p className='uppercase font-bold text-4xl text-center'>flight booking app</p>
        </div>

        {/* {body section} */}
        <div>
          <div className='grid justify-center space-y-5 bg-indigo-50 pb-10'>
            <div >
              <div className='flex space-x-8 mt-5'>
                <div className='flex items-center space-x-2'>
                  <input 
                  type="radio"
                  className='w-6 h-6'/>
                  <p className='text-x1 font-bold'>Round</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <input 
                  type="radio"
                  className='w-6 h-6'/>
                  <p className='text-x1 font-bold'>Round</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <input 
                  type="radio"
                  className='w-6 h-6'/>
                  <p className='text-x1 font-bold'>Round</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <input 
                  type="radio"
                  className='w-6 h-6'/>
                  <p className='text-x1 font-bold'>Round</p>
                </div>
              </div>
              <div>Error</div>
            </div>

            {/* DEPARTURE section */}
            <div>
              <div>
                <div className='relative'>
                  <p className='font-bold text-x1 uppercase'>flying from</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option value='' selected disabled hidden>--Select Airport--</option>
                    <option value='ENIA'>England Newcastle</option>
                    <option value='INIA'>Italy Naples International Airport</option>
                    <option value='MMA'>Malaysia Mulu Airport</option>
                    <option value='KMA'>Kenya Malindi Airport</option>
                  </select>
                  <FaPlaneDeparture className='text-4xl absolute left-5 top-10'/>
                </div>
                <div>Error</div>
              </div>
            </div>


              {/* arrival section */}
              <div>
              <div>
                <div className='relative'>
                  <p className='font-bold text-x1 uppercase'>flying from</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option value='' selected disabled hidden>--Select Airport--</option>
                    <option value='ENIA'>England Newcastle</option>
                    <option value='INIA'>Italy Naples International Airport</option>
                    <option value='MMA'>Malaysia Mulu Airport</option>
                    <option value='KMA'>Kenya Malindi Airport</option>
                  </select>
                  <FaPlaneArrival className='text-4xl absolute left-5 top-10'/>
                </div>
                <div>Error</div>
              </div>
            </div>

            
              {/* date section */}
              <div className='flex space-x-2'>
                    {/* departure section */}
              <div>
              <div>
                <div className='relative'>
                  <p className='font-bold text-x1 uppercase'>departure date</p>
                  <input type='date'
                   className='w-full h-16 rounded-lg text-2xl'/>
                </div>
                <div>Error</div>
              </div>
            </div>


            {/* return section */}
            <div>
              <div>
                <div className='relative'>
                <p className='font-bold text-x1 uppercase'>return date</p>
                  <input type='date'
                   className='w-full h-16 rounded-lg text-2xl'/>
                </div>
                <div>Error</div>
              </div>
            </div>
          </div>


          {/* passenger section */}
          <div className='flex space-x-2'>
             {/* adult section */}
             <div className='w-full'>
              <div >
                <div className='relative'>
                  <p className='font-bold text-x1 uppercase'>{" "} adults (18+)</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <GiPerson className='text-4xl absolute left-5 top-10'/>
                </div>
                <div>Error</div>
              </div>
            </div>


            {/* children section */}
            <div className='w-full'>
              <div >
                <div className='relative'>
                  <p className='font-bold text-x1 uppercase'>children (0-17)</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <FaChild className='text-4xl absolute left-5 top-10'/>
                </div>
                <div>Error</div>
              </div>
            </div>

          </div>

          {/* class and price section */}
          <div className='flex space-x-2'>
           {/* class section */}
           <div className='w-full'>
              <div >
                <div >
                  <p className='font-bold text-x1 uppercase'> class</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option>Economy</option>
                    <option>Business</option>
                  </select>
                 
                </div>
                <div>Error</div>
              </div>
            </div>


            {/* price section */}
           <div className='w-full'>
              <div >
                <div >
                  <p className='font-bold text-x1 uppercase'> price</p>
                  <select className='w-full h-16 rounded-lg text-2xl pl-20'>
                    <option>All prices</option>
                    <option>$ 1000</option>
                    <option>$ 2000</option>
                    <option>$ 3000</option>
                    <option>$ 4000</option>
                    <option>$ 5000</option>
                  </select>
                 
                </div>
                <div>Error</div>
              </div>
            </div>
          </div>

          {/* btn section */}

        <div>

        <input type="submit" value="Find flight" className='w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white' />

        </div>
          </div>

        </div>
        </div>
      </form>
    </div>
  )
}

export default FlightApp