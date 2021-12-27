import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen max-w-screen-lg mx-auto p-3 md:p-0 text-center flex flex-col items-center justify-center'>
      <h1 className='text-8xl font-bold mb-8'>
        Next<span className='text-[#38bdf8]'>Wind</span>
      </h1>
      <div className='flex flex-wrap text-center uppercase gap-4'>
        <Link href='https://www.npmjs.com/package/next-pwa'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            next-pwa
          </a>
        </Link>
        <Link href='https://www.npmjs.com/package/next-sitemap'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            next-sitemap
          </a>
        </Link>
        <Link href='https://www.npmjs.com/package/html-react-parser'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            react-html-parser
          </a>
        </Link>
        <Link href='https://www.npmjs.com/package/react-content-loader'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            react-content-loader
          </a>
        </Link>
        <Link href='https://www.npmjs.com/package/nprogress'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            nprogress
          </a>
        </Link>
        <Link href='https://tailwindcss.com/'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            tailwindcss
          </a>
        </Link>
      </div>
      <div className='absolute bottom-10 mx-auto flex flex-wrap text-center lowercase font-semibold gap-4'>
        <Link href='https://twitter.com/mymakarim'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            Twitter
          </a>
        </Link>
        <Link href='https://github.com/mymakarim'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            Github
          </a>
        </Link>
        <Link href='https://codepen.com/componentity'>
          <a target='_blank' className='hover:underline transition duration-25 ease-in-out'>
            Codepen
          </a>
        </Link>
      </div>
    </div>
  )
}
