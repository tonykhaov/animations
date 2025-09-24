import { href, Link } from 'react-router'
import type { Route } from './+types/home'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Link to={href('/01')}>01 bottom search bar</Link>
      <Link to={href('/02')}>02 bottom sheet</Link>
      <Link to={href('/03')}>03 ice cream</Link>
      <Link to={href('/04')}>04 svg</Link>
      <Link to={href('/05')}>05 phone</Link>
    </div>
  )
}
