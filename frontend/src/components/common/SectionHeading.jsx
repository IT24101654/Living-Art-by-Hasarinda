export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}