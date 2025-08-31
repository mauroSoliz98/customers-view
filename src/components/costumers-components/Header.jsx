import React from 'react'

export const Header = () => {
  return (
    <header className='h-16 border-b border-purple-200/50'>
      <nav className='h-full container mx-auto grid grid-cols-2 items-center gap-4'>
        <div  className="flex justify-start lg:justify-end gap-8 text-lg font-medium">
            <p>Pricing</p>
            <p>Costumers</p>
        </div>
        <div  className="flex justify-end gap-4">
            <button className="text-gray-500 font-medium">Log in</button>
            <button className='px-4 py-2 bg-gradient-to-r from-[#933BDD] to-[#D53F8C] hover:from-[#933BDD]/90 hover:to-[#D53F8C]/90 rounded-lg font-bold text-white hover:shadow-purple-400/30 dark:shadow-purple-500/20'>Get Started</button>
        </div>

      </nav>
    </header>
  )
}
