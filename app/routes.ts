import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('/01', 'routes/01.tsx'),
  route('/02', 'routes/02.tsx'),
  route('/03', 'routes/03.tsx'),
  route('/04', 'routes/04.tsx'),
  route('/05', 'routes/05.tsx'),
  route('/06', 'routes/06.tsx'),
  route('/07', 'routes/07.tsx'),
] satisfies RouteConfig
