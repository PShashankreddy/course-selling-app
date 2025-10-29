export default function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="sk-image" />
      <div className="card-body">
        <div className="sk-line" />
        <div className="sk-line short" />
        <div className="row">
          <div className="sk-chip" />
          <div className="sk-btn" />
        </div>
      </div>
    </div>
  )
}

