import { href, Link } from 'react-router'
import type { Route } from './+types/home'

export default function Home() {
  return <Link to={href('/01')}>01 animation</Link>
}
