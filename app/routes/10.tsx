import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Route() {
  const [particles, setParticles] = React.useState<
    {
      id: string
      left: number
      top: number
      destinationX: number
      destinationY: number
      duration: number
    }[]
  >([])

  return (
    <Div
      className="h-screen w-screen flex items-center justify-center overflow-hidden relative"
      onMouseDown={(e) => {
        const x = e.clientX
        const y = e.clientY

        const newParticles = Array.from({ length: 5 }).map(() => {
          const angle = Math.random() > 0.5 ? randomNumber(0, 180) : randomNumber(180, 360)
          const [destinationX, destinationY] = convertPolarToCartesian(angle, randomNumber(50, 400))

          return {
            id: window.crypto.randomUUID(),
            left: x,
            top: y,
            destinationX: destinationX,
            destinationY: destinationY,
            duration: randomNumber(2000, 8000),
          }
        })

        setParticles((p) => [...p, ...newParticles])
      }}
    >
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          alt=""
          src="https://sandpack-bundler.vercel.app/img/wand-sparkle.svg"
          style={{
            top: particle.top,
            left: particle.left,
            '--x': particle.destinationX + 'px',
            '--y': particle.destinationY + 'px',
            '--duration': particle.duration + 'ms',
          }}
          onAnimationEnd={(e) => {
            if (e.animationName === fadeOut.getName()) {
              setParticles((particles) => particles.filter((p) => p.id !== particle.id))
            }
          }}
        />
      ))}
      <img
        alt=""
        src="https://sandpack-bundler.vercel.app/img/wand-sparkle.svg"
        style={{
          display: 'none',
        }}
      />
    </Div>
  )
}

const convertPolarToCartesian = (angle: number, distance: number) => {
  const angleInRadians = convertDegreesToRadians(angle)
  const x = Math.cos(angleInRadians) * distance
  const y = Math.sin(angleInRadians) * distance

  return [x, y]
}

const convertDegreesToRadians = (angle: number) => (angle * Math.PI) / 180

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Div = styled.div`
  & {
    background: hsl(210deg 15% 6%);
    cursor:
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: none; overflow: visible;"><path d="M21 21L12 12" stroke="hsl(210deg 15% 6%)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.52883 3.29752L4.73958 2.38585C3.22909 1.61622 1.6162 3.2291 2.38584 4.73959L3.2975 6.52884C3.34667 6.62534 3.32811 6.74253 3.25153 6.81911L1.83158 8.23906C0.632845 9.4378 1.66838 11.4702 3.34277 11.205L5.32616 10.8908C5.43314 10.8739 5.53886 10.9277 5.58803 11.0242L6.49969 12.8135C7.26932 14.324 9.52221 13.9672 9.78741 12.2928L10.1015 10.3094C10.1185 10.2024 10.2024 10.1185 10.3094 10.1016L12.2927 9.78742C13.9671 9.52222 14.324 7.26933 12.8135 6.4997L11.0242 5.58804C10.9277 5.53887 10.8739 5.43315 10.8908 5.32618L11.2049 3.34279C11.4701 1.6684 9.43779 0.632852 8.23905 1.83159L6.8191 3.25154C6.74252 3.32813 6.62533 3.34669 6.52883 3.29752Z" fill="hsl(50deg 100% 50%)" stroke="hsl(210deg 15% 6%)" stroke-width="1.5" /><path d="M21 21L13 13" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>')
        0 0,
      auto;
  }

  &:active {
    cursor:
      url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: none; overflow: visible; transform: rotate(10deg); transform-origin: 80% 80%;"><path d="M21 21L12 12" stroke="hsl(210deg 15% 6%)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.52883 3.29752L4.73958 2.38585C3.22909 1.61622 1.6162 3.2291 2.38584 4.73959L3.2975 6.52884C3.34667 6.62534 3.32811 6.74253 3.25153 6.81911L1.83158 8.23906C0.632845 9.4378 1.66838 11.4702 3.34277 11.205L5.32616 10.8908C5.43314 10.8739 5.53886 10.9277 5.58803 11.0242L6.49969 12.8135C7.26932 14.324 9.52221 13.9672 9.78741 12.2928L10.1015 10.3094C10.1185 10.2024 10.2024 10.1185 10.3094 10.1016L12.2927 9.78742C13.9671 9.52222 14.324 7.26933 12.8135 6.4997L11.0242 5.58804C10.9277 5.53887 10.8739 5.43315 10.8908 5.32618L11.2049 3.34279C11.4701 1.6684 9.43779 0.632852 8.23905 1.83159L6.8191 3.25154C6.74252 3.32813 6.62533 3.34669 6.52883 3.29752Z" fill="hsl(50deg 100% 50%)" stroke="hsl(210deg 15% 6%)" stroke-width="1.5" /><path d="M21 21L13 13" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>')
        0 0,
      auto;
  }
`

const shoot = keyframes`
  to {
    transform: translate(var(--x), var(--y))
  }
`

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`
const Particle = styled.img`
  position: absolute;
  pointer-events: none;
  opacity: 1;
  user-select: none;
  animation:
    ${shoot} var(--duration) ease-out forwards,
    ${fadeOut} var(--duration) ease-in forwards;
`
