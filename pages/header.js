import React from 'react'

function Header({ signOut }) {
    return (
        <header className=" text-black sticky top-0 p-8 flex items-start justify-between max-w-10xl mx-auto z-20 xl:items-center">
            <strong className='text-3xl shadow-md'>my@NIMEhub</strong>
            <strong onClick={signOut} className='text-xl cursor-pointer text-white-500 box-border bg-green-100 rounded-lg p-2 hover:bg-green-200'>Logout</strong>

        </header>
    )
}

export default Header