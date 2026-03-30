import PageLayout from '../components/layout/PageLayout'
import ContactHero from '../components/contact/ContactHero'
import ProcessSection from '../components/contact/ProcessSection'
import SocialLinksSection from '../components/contact/SocialLinksSection'

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <ProcessSection />
      <SocialLinksSection />
    </PageLayout>
  )
}