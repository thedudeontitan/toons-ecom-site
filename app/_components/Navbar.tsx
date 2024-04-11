import React from 'react'
import Link from 'next/link'
import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'
import { CiShoppingTag } from 'react-icons/ci'

export default function Navbar() {

    return (
        <div>
            <div className="w-full fixed top-0 right-0 left-0 flex flex-row z-10 items-center pt-6 lg:px-10 font-brice-semibold">
                <Link href="/" className='hidden lg:flex'>
                    <p className="text-2xl ">
                        ECOM
                    </p>
                </Link>
                <div className="mx-auto flex flex-row items-center justify-center lg:text-lg gap-x-10 lg:gap-x-20 bg-white lg:ml-auto py-3 px-10 rounded-full">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <Link href="/#products" className="">
                        Products
                    </Link>

                    <Link href="/cart" className="">
                        <IoCartOutline size={25} />
                    </Link>
                </div >
            </div>
        </div>
    )
}
