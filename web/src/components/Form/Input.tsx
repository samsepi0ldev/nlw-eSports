import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input (props: InputProps) {
  return <input {...props} className='px-3 py-4 rounded bg-zinc-900 text-zinc-500 placeholder:text-zinc-500' />
}