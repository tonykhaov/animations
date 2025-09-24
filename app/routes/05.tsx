import * as React from 'react'
import styled from 'styled-components'

export default function Five() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Frame className="relative">
        <div className="h-full flex flex-col bg-gradient-to-r from-red-300 to-amber-200">
          <header className="flex text-white antialiased mx-4 mt-1">
            <div className="flex-1">19:00</div>

            <div className="flex-1">
              <div className="w-24 h-full flex items-center bg-black rounded-full active:scale-90 transition-transform group">
                <div className="ml-2 size-2 bg-red-600 rounded-full animate-pulse group-active:animate-none group-active:bg-amber-500 group-active:translate-x-18 transition-transform" />
              </div>
            </div>

            <div className="flex-1 flex gap-2 justify-end">
              <span>📶</span>
              <span>🛜</span>
            </div>
          </header>

          <div className="flex-1 my-4 mx-2">
            <div className="grid grid-cols-4 gap-2 items-center justify-items-center">
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
            </div>
          </div>

          <footer className="bg-white/30 py-3">
            <div className="mx-2 h-full flex gap-3 items-center justify-center">
              <AppIcon />
              <AppIcon />
              <AppIcon />
              <AppIcon />
            </div>
          </footer>
        </div>
      </Frame>
    </div>
  )
}

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`h-96 bg-white w-xxs border-4 border-black rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

function AppIcon() {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <button
        className="size-12 rounded-md bg-black active:scale-90 transition-transform"
        onClick={() => setShow(true)}
      />

      <FullScreenApp
        data-active={show}
        className="transition-transform,transition-opacity duration-300 absolute top-0 left-0 w-full h-full"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-yellow-400">
          <button className="top-2 right-2 absolute text-black" onClick={() => setShow(false)}>
            Close
          </button>
          <div className="text-black text-2xl">📱</div>
        </div>
      </FullScreenApp>
    </>
  )
}

const FullScreenApp = styled.div`
  &[data-active='true'] {
    transform: scale(1);
    opacity: 1;
  }

  &[data-active='false'] {
    transform: scale(0);
    opacity: 0;
  }
`
