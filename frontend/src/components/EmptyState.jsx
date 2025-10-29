export default function EmptyState({ title = 'Nothing here yet', subtitle }) {
  return (
    <div className="empty">
      <div className="empty-icon">☕</div>
      <div className="empty-title">{title}</div>
      {subtitle && <div className="empty-subtitle">{subtitle}</div>}
    </div>
  )
}

