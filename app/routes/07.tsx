import * as React from 'react'
import styled from 'styled-components'

export default function Seven() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="h-screen flex justify-center items-center">
      <Logo className="bg-fuchsia-400 size-48">
        <input onChange={() => setPlaying((p) => !p)} type="checkbox" className="invisible" />
        <p className="sr-only">{playing ? 'Playing' : 'Stopped'}</p>
      </Logo>
    </div>
  )
}

const Logo = styled.label`
  transition: clip-path 250ms;
  will-change: transform;

  &:has(:checked) {
    clip-path: polygon(0 0, 100% 50%, 100% 50%, 0% 100%);
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`
