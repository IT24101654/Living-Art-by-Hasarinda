const steps = [
  {
    no: '01',
    title: 'The Order',
    text: 'Submit your request and reference photos. We discuss style and direction together.',
  },
  {
    no: '02',
    title: 'The Draft',
    text: 'Receive a rough conceptual sketch and refine composition before final rendering.',
  },
  {
    no: '03',
    title: 'The Final',
    text: 'Receive a high-resolution digital masterpiece for print and social sharing.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section container">
      <div className="section-row">
        <h2>The Process</h2>
        <span className="eyebrow">Step by Step</span>
      </div>
      <div className="card-grid three process-grid">
        {steps.map((step) => (
          <article key={step.no} className="process-card">
            <span className="step-no">{step.no}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}