
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">This page could not be found.</p>
      <Link href="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  )
}

