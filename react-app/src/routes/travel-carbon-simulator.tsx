import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travel-carbon-simulator')({
  component: () => <div>Hello /travel-carbon-simulator!</div>
})