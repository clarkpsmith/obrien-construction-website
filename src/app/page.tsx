import { createClient } from 'contentful'
import Navbar from '@/components/Navbar'
import CompanyDescription from '@/components/CompanyDescription'
import AdditionalCompanyInfo from '@/components/AdditionalCompanyInfo'
import Footer from '@/components/Footer'
import Certifications from '@/components/Certifications'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'

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

    return {
      companyProfile,
      projects,
      services,
      testimonials,
    }
  }

  const { companyProfile, projects, services, testimonials } =
    await fetchContentfulData()

  console.log({ companyProfile })

  return (
    <div>
      <div className="w-full">
        <header>
          <Navbar profile={companyProfile} />
          <CompanyDescription companyProfile={companyProfile} />
        </header>
      </div>
      <AdditionalCompanyInfo companyProfile={companyProfile} />
      <Certifications certifications={companyProfile.certifications} />
      <Gallery projects={projects} />
      <Testimonials testimonials={testimonials} />
      <div>
        <div>
          <Footer profile={companyProfile} />
        </div>
      </div>
    </div>
  )
}
