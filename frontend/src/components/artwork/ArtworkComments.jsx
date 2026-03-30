const comments = [
  {
    name: 'Julian Voss',
    time: '2 Days Ago',
    text: 'The way the light hits the cheekbone in this piece is absolutely masterclass.',
  },
  {
    name: 'Elena Rodriguez',
    time: '1 Week Ago',
    text: 'I ordered a custom portrait similar to this and it is the centerpiece of my living room.',
  },
]

export default function ArtworkComments() {
  return (
    <div>
      <h2>Collector&apos;s Dialogue</h2>
      <div className="comment-list">
        {comments.map((comment) => (
          <article key={comment.name} className="comment-card">
            <div className="avatar-placeholder" />
            <div>
              <div className="comment-top">
                <strong>{comment.name}</strong>
                <span>{comment.time}</span>
              </div>
              <p>{comment.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="comment-form">
        <label>Add your thought</label>
        <input type="text" placeholder="Share your perspective..." />
      </div>
    </div>
  )
}