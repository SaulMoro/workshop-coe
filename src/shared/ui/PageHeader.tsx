import { Bars } from './Bars'

type PageHeaderProps = {
  kicker: string
  title: string
  lead?: string
}

export function PageHeader({ kicker, title, lead }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-3">
        <Bars className="h-4" />
        <span className="label">{kicker}</span>
      </div>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      {lead && <p className="mt-3 max-w-2xl text-lg text-ink-2">{lead}</p>}
    </header>
  )
}
