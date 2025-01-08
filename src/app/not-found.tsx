import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full items-center flex flex-col h-screen justify-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='bg-white px-3 py-1 rounded-3xl font-semibold text-black' href="/">Return Home</Link>
    </div>
  )
}