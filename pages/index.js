import Head from 'next/head'
import Logo from '../public/logo.svg'

export default function Home() {
  return (
  <>
    <Head>
      <title>The Gorman Group</title>
      <meta name="description" content="Human-first digital solutions since 2005" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <p style={{width:'11em'}}>Human-first digital solutions since 2005</p>
      <Logo aria-label="Logo of The Gorman Group" />
      <p><a href="mailto:taylor@thegorman.group">Get in touch</a></p>
    </main>
  </>
  )
}
