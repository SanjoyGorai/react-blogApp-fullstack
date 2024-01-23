import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link
            to='/'
            className='whitespace-nowrap text-sm 
          sm:text-xl font-semibold dark:text-white' >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 text-white rounded-lg'>Sanjoy</span>
            Footer
          </Link>
          <p>Former Prime Minister Deve Gowda and former Chief Minister of Andhra Pradesh Chandrababu Naidu are the rare Opposition, non-BJP faces to make it to the event</p>
        </div>
        {/* right */}
        <div className=''>
          <form action="" className='flex flex-col gap-4'>
            <div>
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username'
                id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput type='text' placeholder='example@gmail.com'
                id='useremail' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput type='text' placeholder='Password'
                id='useremail' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm'>
            <span>Have an Accout?</span>
            <Link to='sign-in' className='text-blue-700'> Sign In
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup