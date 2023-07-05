import Image from 'next/image'

export default function Home() {
  return (
    <div className='container flex min-h-screen flex-col items-center justify-between p-24'>
      <main>
        <h1 className="text-4xl font-bold text-center">Hello</h1>
      </main>
      <header className='mt-5'>
        <div className="hero-img"></div>
      </header>
    </div>
  )
}
