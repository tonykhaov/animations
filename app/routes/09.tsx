import styled, { keyframes } from 'styled-components'

export default function Route() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ConicGradient className="h-72 w-xl flex items-end justify-center">
        <div className="bg-yellow-300 rounded size-1" />
      </ConicGradient>
    </div>
  )
}

const anim = keyframes`
  0% {
    --rotation: 90deg;
  }
  
  12.5% {
    --rotation: calc(90deg + 2deg);
  }

  25% {
    --rotation: calc(90deg + 5deg);
  }
  
  50% {
    --rotation: 90deg;
  }

  67.5% {
    --rotation: calc(90deg - 2deg);
  }

  75% {
    --rotation: calc(90deg - 5deg);
  }
  
  100% {
    --rotation: 90deg;
  }
`

const ConicGradient = styled.div`
  --dark-gold: hsl(34deg 90% 45%);
  --gold: hsl(44deg 80% 70%);
  --light-gold: hsl(44deg 100% 85%);

  @property --rotation {
    syntax: '<angle>';
    inherits: false;
    initial-value: 90deg;
  }

  animation: ${anim} 1s infinite both ease-in-out;

  background: conic-gradient(
    from var(--rotation) at 50% 100%,
    var(--dark-gold) 50%,
    var(--dark-gold) 51%,
    var(--gold) 62.5%,
    var(--gold) 63.5%,
    var(--light-gold) 75%,
    var(--gold) 86.5%,
    var(--gold) 87.5%,
    var(--dark-gold) 99%,
    var(--dark-gold) 100%
  );
`
