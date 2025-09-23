import { animated, useSpring } from '@react-spring/web'
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
        createPortal(
          <BottomSheet isOpen={isOpen} close={() => setIsOpen(false)} />,

          document.body,
        )}
    </div>
  )
}

function BottomSheet({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const elementRef = React.useRef<HTMLDivElement>(null)

  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
  }))
  const bind = useDrag(({ down, movement: [mx, my], currentTarget }) => {
    api.start({
      y: down ? Math.max(my, 0) : 0,
    })

    const threshold = elementRef.current!.offsetHeight / 3
    const isReleased = !down
    if (isReleased && my > threshold) {
      close()
    }
  })

  return (
    <animated.div
      ref={elementRef}
      className="fixed max-w-lg mx-auto bottom-0 left-0 right-0 h-96 touch-none"
      {...bind()}
      style={styles}
    >
      <div
        className="h-full bg-green-600 origin-bottom rounded-t-3xl data-[open=false]:translate-y-full data-[open=true]:translate-y-0 transition-transform"
        data-open={isOpen}
      >
        <div className="h-6" />
        <header className="h-1 bg-white rounded-lg w-1/4 mx-auto" />
      </div>
    </animated.div>
  )
}
