import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <h1 className='text-red-100 font-mono text-2xl'>problexity</h1>
  )
}
