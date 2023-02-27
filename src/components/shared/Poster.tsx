import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Poster = () => {
  return (
    <>
        <Link href=''>
            <div className='group/card relative overflow-hidden rounded-xl shadow-sm transition duration-500 hover:scale-105 hover:shadow-lg'>
                <div className='poster relative overflow-hidden'>
                    <Image
                        src='/poster.jpg'
                        alt='poster img'
                        width={256}
                        height={384}
                        className='transition duration-500 group-hover/card:translate-y-[-36px] group-hover/card:blur-sm'
                    />
                    <div className='absolute bottom-[-180px] h-1/2 w-full bg-gradient-to-t from-gray-900 via-gray-800 to-transparent transition duration-500 group-hover/card:translate-y-[-180px]'>
                        <div className='absolute bottom-[2px] m-3'>
                            <p className='text-gray-200 font-semibold text-[16px]'>Title</p>
                            <p className='text-gray-200 text-[12px]'>Release Date</p>
                            <p className='text-gray-200 text-[12px]'>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>

  )
}

export default Poster