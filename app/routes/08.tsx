import styled, { keyframes } from 'styled-components'

export default function Eight() {
  return (
    <Container>
      <Frame className="fixed inset-0 bg-red-700 flex justify-center items-center">
        <p className="text-white text-4xl font-bold">
          Scroll Down! <span className="inline-block animate-bounce">↓</span>
        </p>
      </Frame>
      {Array.from({
        length: 7,
      })
        .fill(1)
        .map((_, i) => (
          <div key={i} className="h-screen" />
        ))}
    </Container>
  )
}

const scrollKeyframe = keyframes`
  from {
    --percentage: 0%;
  }
  to {
    --percentage: 100%;
  }
`

const Frame = styled.div`
  clip-path: polygon(0 calc(var(--percentage)), 100% calc(var(--percentage)), 100% 100%, 0% 100%);
`

const Container = styled.div`
  position: relative;

  @property --percentage {
    syntax: '<percentage>';
    inherits: true;
    initial-value: 0%;
  }

  animation-name: ${scrollKeyframe};
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
`
