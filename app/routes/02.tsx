import { animated, useSpring, useSpringValue } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import * as React from 'react'
import { createPortal } from 'react-dom'

export default function Two() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      {isOpen ? (
        <button
          onClick={() => setIsOpen(false)}
          className="bg-red-500 rounded-lg p-4 text-white active:scale-95 transition-transform"
        >
          Close
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 rounded-lg p-4 text-white active:scale-95 transition-transform"
        >
          Open
        </button>
      )}
      {typeof window !== 'undefined' &&
        createPortal(<BottomSheet isOpen={isOpen} close={() => setIsOpen(false)} />, document.body)}
    </div>
  )
}

function BottomSheet({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const elementRef = React.useRef<HTMLDivElement>(null)

  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }))
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    const isReleased = !down

    const threshold = elementRef.current!.offsetHeight / 3

    const shouldClose = isReleased && my > threshold
    if (shouldClose) {
      api.start({
        y: window.innerHeight,
        onResolve: close,
        config: {
          duration: 200,
        },
      })
    } else {
      api.start({
        y: down ? Math.max(my, -100) : 0,
      })
    }
  })

  return (
    <animated.div
      data-open={isOpen}
      className="fixed bg-red-500/10 inset-0 translate-y-full data-[open=true]:translate-y-0"
      ref={elementRef}
      style={styles}
    >
      <div
        data-open={isOpen}
        className="h-full mx-auto w-xl bg-green-600 origin-bottom rounded-t-3xl translate-y-full transition-transform data-[open=true]:translate-y-1/3"
        {...bind()}
      >
        <div>
          <div className="h-5" />
          <header className="h-1 bg-white rounded-lg w-1/4 mx-auto" />
        </div>
      </div>
    </animated.div>
  )
  // return (
  // <div
  //   ref={elementRef}
  //   className="z-1 fixed max-w-lg mx-auto bottom-0 left-0 right-0 touch-none"
  //   {...bind()}
  //   // style={styles}
  // >
  //   <div data-open={isOpen} className="h-screen data-[open=false]:translate-y-full data-[open=true]:translate-y-1/3">

  //   </div>
  // </div>
  // )
}
