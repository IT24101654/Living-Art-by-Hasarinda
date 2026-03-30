export default function ContactHero() {
  return (
    <section className="section container contact-grid">
      <div>
        <h1 className="hero-title large">Your Story, Painted.</h1>
        <p className="hero-text">
          Transform your most cherished moments into timeless digital portraits.
        </p>
        <div className="availability-box">
          <span className="eyebrow">Availability</span>
          <p>Currently accepting 3 custom commissions for November.</p>
        </div>
      </div>

      <form className="contact-form">
        <div className="grid-2">
          <label>
            <span>Name</span>
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="john@example.com" />
          </label>
        </div>

        <label>
          <span>Request Type</span>
          <select>
            <option>Single Portrait</option>
            <option>Couple / Group</option>
            <option>Pet Portrait</option>
            <option>Commercial Illustration</option>
          </select>
        </label>

        <label>
          <span>Message</span>
          <textarea rows="5" placeholder="Tell me about your vision..." />
        </label>

        <button type="submit" className="btn btn-dark">
          Send Request
        </button>
      </form>
    </section>
  )
}