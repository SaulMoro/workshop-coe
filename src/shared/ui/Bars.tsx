// Las cuatro barras del travesaño AI CoE, siempre en este orden.
const colors = ['bg-magenta', 'bg-orange', 'bg-yellow', 'bg-blue']

export function Bars({ className = 'h-5' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex gap-[3px] ${className}`}>
      {colors.map((color) => (
        <span key={color} className={`block w-[6px] ${color}`} />
      ))}
    </span>
  )
}
