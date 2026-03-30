export default function SocialLinksSection() {
  const links = ['Facebook', 'Instagram', 'WhatsApp', 'TikTok']

  return (
    <section className="section container">
      <div className="social-banner">
        <div className="center-text narrow">
          <h2>Follow the Journey</h2>
          <p>
            Behind the scenes, new releases, and live painting sessions updated
            daily.
          </p>
        </div>
        <div className="button-row wrap-center">
          {links.map((link) => (
            <button key={link} className="btn btn-light">
              {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}