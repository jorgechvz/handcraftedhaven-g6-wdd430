import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/ui/landing-page/Hero'
import Collections from '@/components/ui/landing-page/Collections'
import Stats from '@/components/ui/landing-page/Stats'
import Articles from '@/components/ui/landing-page/Articles'
import FrequentlyQuestions from '@/components/ui/landing-page/FrequentlyQuestions'

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Stats />
      <Articles />
      <FrequentlyQuestions />
    </>
  )
}
