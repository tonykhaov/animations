import * as React from 'react'
import styled from 'styled-components'

export default function Four() {
  const scene = React.useRef({
    svg: {
      width: 500,
      height: 300,
    },

    circle: {
      r: 40,
      cx: 50,
      cy: 50,
    },
  })

  return (
    <div className="h-screen mx-5">
      <p>Free movement</p>
      <Svg
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const offsetX = e.clientX - rect.left
          const x = Math.min(offsetX, scene.current.svg.width) - scene.current.circle.r
          e.currentTarget.style.setProperty('--x', x + 'px')

          const offsetY = e.clientY - rect.top
          const y = Math.min(offsetY, scene.current.svg.height) - scene.current.circle.r
          e.currentTarget.style.setProperty('--y', y + 'px')

          if (offsetY <= rect.height / 2) {
            if (offsetX <= rect.width / 2) {
              // top-left
              e.currentTarget.style.setProperty('--color', 'red')
            } else {
              // top-right
              e.currentTarget.style.setProperty('--color', 'yellow')
            }
          } else {
            if (offsetX <= rect.width / 2) {
              // bottom-left
              e.currentTarget.style.setProperty('--color', 'green')
            } else {
              // bottom-right
              e.currentTarget.style.setProperty('--color', 'blue')
            }
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--x', 0 + 'px')
          e.currentTarget.style.setProperty('--y', 0 + 'px')
          e.currentTarget.style.setProperty('--color', 'red')
        }}
        width={scene.current.svg.width}
        height={scene.current.svg.height}
      >
        <g>
          <circle cx={scene.current.circle.cx} cy={scene.current.circle.cy} r={scene.current.circle.r} fill="red" />
        </g>
      </Svg>

      <div className="mt-12" />

      <p>Snap every 50px</p>
      <Svg
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const offsetX = e.clientX - rect.left

          const x = Math.min(offsetX, scene.current.svg.width) - scene.current.circle.r
          const snappedX = Math.round(x / 50) * 50
          e.currentTarget.style.setProperty('--x', snappedX + 'px')

          const offsetY = e.clientY - rect.top
          const y = Math.min(offsetY, scene.current.svg.height) - scene.current.circle.r

          const snappedY = Math.round(y / 50) * 50
          e.currentTarget.style.setProperty('--y', snappedY + 'px')

          if (offsetY <= rect.height / 2) {
            if (offsetX <= rect.width / 2) {
              // top-left
              e.currentTarget.style.setProperty('--color', 'red')
            } else {
              // top-right
              e.currentTarget.style.setProperty('--color', 'yellow')
            }
          } else {
            if (offsetX <= rect.width / 2) {
              // bottom-left
              e.currentTarget.style.setProperty('--color', 'green')
            } else {
              // bottom-right
              e.currentTarget.style.setProperty('--color', 'blue')
            }
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty('--x', 0 + 'px')
          e.currentTarget.style.setProperty('--y', 0 + 'px')
          e.currentTarget.style.setProperty('--color', 'red')
        }}
        width={scene.current.svg.width}
        height={scene.current.svg.height}
      >
        <g>
          <circle cx={scene.current.circle.cx} cy={scene.current.circle.cy} r={scene.current.circle.r} fill="red" />
        </g>
      </Svg>
    </div>
  )
}

const Svg = styled.svg`
  --x: 0px;
  --y: 0px;
  --color: red;

  border: 1px dashed white;
  border-radius: 12px;

  &:hover {
    transition: transform 50ms linear;
  }

  circle {
    transform: translate(var(--x), var(--y));
    fill: var(--color);
    transform-origin: center;
    transition:
      transform 100ms linear,
      fill 500ms linear;
  }
`
