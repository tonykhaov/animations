import * as React from 'react'

export default function One() {
  const [isSearching, setIsSearching] = React.useState(false)

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1" />
      <footer className="flex justify-center gap-4 max-w-xl mx-auto">
        <input
          className="flex-1 peer rounded-full h-12 w-96 p-2 px-4 border-2 border-red-500 flex justify-center items-center focus:scale-105 transition-transform focus:-translate-y-16 focus:-translate-x-16"
          onBlur={() => setIsSearching(false)}
          placeholder="Search..."
        />
        <button className="-order-1 peer-focus:hidden peer-focus:opacity-0 peer-focus:transition-opacity peer-focus:transition-transform peer-focus:ease-linear peer-focus:duration-300 duration-300 ease-in-out peer-focus:translate-y-6 transition-opacity size-12 rounded-full bg-red-500 flex justify-center items-center focus:scale-125 hover:scale-125 transition-transform">
          🔍
        </button>

        <button
          onClick={() => {
            setIsSearching(false)
          }}
          className="peer-focus:-translate-y-16 size-12 rounded-full bg-red-500 flex justify-center items-center hover:scale-125 focus:scale-125 transition-transform"
        >
          ✖️
        </button>
      </footer>
      <div className="mt-12" />
    </div>
  )
}
