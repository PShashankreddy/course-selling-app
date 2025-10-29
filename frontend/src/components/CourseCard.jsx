export default function CourseCard({ course, children, onClick }) {
  return (
    <div className="card hover" onClick={onClick} role={onClick ? 'button' : undefined}>
      <img src={course.imageUrl} alt={course.title} />
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-desc">{course.description}</p>
        <div className="row space-between">
          <span className="price">₹{course.price}</span>
          {children}
        </div>
      </div>
    </div>
  )
}

