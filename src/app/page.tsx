import { createClient } from 'contentful'
import Navbar from '@/components/Navbar'
import CompanyDescription from '@/components/CompanyDescription'
import AdditionalCompanyInfo from '@/components/AdditionalCompanyInfo'
import Footer from '@/components/Footer'
import Certifications from '@/components/Certifications'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import PreferredPartners from '@/components/PreferredPartners'

export default async function Home() {
  async function fetchContentfulData() {
    const client = createClient({
      space: String(process.env.CONTENTFUL_SPACE_ID),
      accessToken: String(process.env.CONTENTFUL_ACCESS_KEY),
    })

    const projects = await client.getEntries({
      content_type: 'projects',
      // //@ts-ignore
      // order: '-fields.dateCompleted',
    })
    const profile = await client.getEntries({ content_type: 'profile' })
    const companyProfile = profile.items[0].fields
    const services = await client.getEntries({ content_type: 'services' })
    const testimonials = await client.getEntries({
      content_type: 'testimonials',
    })
    const preferredBrands = await client.getEntries({
      content_type: 'preferredBrands',
    })

    return {
      companyProfile,
      projects,
      services,
      testimonials,
      preferredBrands,
    }
  }

  const { companyProfile, projects, services, testimonials, preferredBrands } =
    await fetchContentfulData()

  return (
    <div>
      <div className="w-full">
        <header>
          <Navbar profile={companyProfile} />
          <CompanyDescription companyProfile={companyProfile} />
        </header>
      </div>
      <AdditionalCompanyInfo companyProfile={companyProfile} />

      <Gallery projects={projects} />
      <Testimonials testimonials={testimonials} />
      <PreferredPartners preferredBrands={preferredBrands} />
      <div>
        <div>
          <Footer profile={companyProfile} />
        </div>
      </div>
    </div>
  )
}

