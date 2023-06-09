
import ProfileInfo from "../components/ProfileInfo"
import ProjectsComponent from '@/components/ProjectsComponent'
import { createClient } from 'contentful'
import Socials from '@/components/Socials'
import Name from '@/components/Name'
import NavItem from "@/components/NavItem"
import Navbar from "@/components/Navbar"
import CompanyDescription from "@/components/CompanyDescription"
import Image from "next/image"
import AdditionalCompanyInfo from "@/components/AdditionalCompanyInfo"
import ContactForm from "@/components/Contact"
import Footer from "@/components/Footer"
import Certifications from "@/components/Certifications"

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
    const testimonials = await client.getEntries({ content_type: 'testimonials' })

    return {
      companyProfile,
      projects,
      services, 
      testimonials
    }
  }

  const {  companyProfile,
    projects,
    services, 
    testimonials } = await fetchContentfulData()

console.log({companyProfile})

  return (
    <div>
      <header>
      <Navbar profile={companyProfile}/>
      <CompanyDescription companyProfile={companyProfile}/>
      </header>
      <AdditionalCompanyInfo companyProfile={companyProfile}/>
      <Certifications certifications={companyProfile.certifications}/>
    <div>
      <div>
        <Footer profile={companyProfile} />
      </div>
      </div>
</div>
  )
}