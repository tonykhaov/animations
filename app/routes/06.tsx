import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Six() {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const id = setTimeout(() => {
      setReady(true)
    }, 1000)

    return () => clearTimeout(id)
  }, [])
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <LinkWrapper>
        <Link data-ready={ready} title="HOMEPAGE">
          HOMEPAGE
        </Link>
      </LinkWrapper>
    </div>
  )
}

const slideDown = keyframes`
  0% {
    transform: translateY(100%);
  }
  
  100% {
    transform: translateY(0);
  }
  `

const Link = styled.a`
  animation: ${slideDown} 0.5s;
  display: block;
  font-size: 48px;
  transition: transform 0.5s ease-out;

  margin-bottom: -12px;
  &::before {
    content: attr(title);
    position: absolute;
    font-weight: bold;
    transform: translateY(100%);
    transition: transform 0.5s ease-out;
  }
`

const LinkWrapper = styled.div`
  overflow: hidden;
  position: relative;

  &:has([data-ready='true'])&:hover {
    ${Link} {
      transform: translateY(100%);
      transition: transform 0.4s ease-out;
      &::before {
        transform: translateY(-100%);
        transition: transform 0.5s ease-out;
      }
    }
  }
`
