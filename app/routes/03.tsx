import { useState } from 'react'

export default function Three() {
  const items = [
    {
      name: 'LIME',
      colors: {
        bg: 'bg-green-500',
        packaging: 'bg-green-300',
        iceCream: 'bg-green-200',
      },
    },
    {
      name: 'PINEAPPLE',
      colors: {
        bg: 'bg-yellow-500',
        packaging: 'bg-yellow-300',
        iceCream: 'bg-yellow-200',
      },
    },
    {
      name: 'GRAPE',
      colors: {
        bg: 'bg-purple-500',
        packaging: 'bg-purple-300',
        iceCream: 'bg-purple-200',
      },
    },
    {
      name: 'STRAWBERRY',
      colors: {
        bg: 'bg-pink-500',
        packaging: 'bg-pink-300',
        iceCream: 'bg-pink-200',
      },
    },
  ]
  return (
    <div className="flex h-screen overflow-hidden">
      {items.map((item) => (
        <div key={item.name} className={`flex-1 min-w-42 ${item.colors.bg} flex items-center justify-center`}>
          <div className="h-full w-full relative flex items-center justify-center">
            <Packaging name={item.name} color={item.colors.packaging} />
            <IceCreamElement color={item.colors.iceCream} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Packaging({ name, color }: { name: string; color: string }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      className={`ice-cream z-1 absolute h-2/3 w-2/3 ${color} flex items-center justify-center ${isActive ? 'active' : ''}`}
    >
      <span className="rotate-270 tracking-widest text-3xl/snug">{name}</span>
    </div>
  )
}

function IceCreamElement({ color }: { color: string }) {
  return (
    <div className="absolute flex flex-col items-center justify-center">
      <div className={`w-32 h-72 ${color} rounded-lg`} />
      <div className="w-12 h-24 bg-amber-200 rounded-b-md" />
    </div>
  )
}
