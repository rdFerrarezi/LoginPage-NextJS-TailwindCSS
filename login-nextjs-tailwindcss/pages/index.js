import Head from 'next/head';
import { FaFacebook, FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Company</span>Name
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>
                Sign in to Account
              </h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedinIn className='text-sm'/>
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm'/>
                </a>
              </div>
              <p className='text-gray-400 my-3'>or use your email account</p>
            </div>
          </div>{/* Sign in section */}
          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hello Friend</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>        
            <p className='mb-2'>
              Fill up personal information and start  journey  with us.
            </p>
            <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Sign Up</a>
          </div>{/* Sign up section */}
        </div>
      </main>

    </div>
  )
}
