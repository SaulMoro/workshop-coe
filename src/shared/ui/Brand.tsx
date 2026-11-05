import { Bars } from './Bars'

export function Brand() {
  return (
    <a href="/" className="flex items-center gap-3">
      <Bars className="h-7" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight">Workshop CoE</span>
        <span className="label mt-1 text-[10px]">AI Center of Excellence</span>
      </span>
    </a>
  )
}
