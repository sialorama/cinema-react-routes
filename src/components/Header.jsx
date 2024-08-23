import React from 'react'

const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>

                <span className='text-clate-700'>Cinema - React-Routes</span>
            </h1>

        <ul className='flex gap-4'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Acteurs</li>
            <li className= 'hidden sm:inline text-slate-700 hover:underline'>Films</li>
        </ul>
        </div>
        </header>

    )
}

export default Header