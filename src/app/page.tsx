import Image from 'next/image'
import { BsFillMoonFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Titillium+Web:wght@600&display=swap');
        </style>
      </head>

      <main className="font-poppins bg-slate-600 min-h-screen px-10" >
        <section>

          {/* navigation */}
          <nav className="py-10 flex  justify-between ">
            <h1 className=' text-sm'>Developed Milith De Silva</h1>
            <ul className='flex items-center'>
              {/*    icon */}
              <li>
                <BsFillMoonFill
                  className="cursor-pointer text-xl mx-5 " />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1dGEKvM5hEjMJ68GqL8NkzhT6qVRjk7zB/view?usp=sharing"

                  download={"Reusme"}
                  className=' bg-yellow-400 text-black px-4 py-2 border-none rounded-xl'>
                  Resume</a>

              </li>
            </ul>
          </nav>

        </section>
      </main>
    </div>

  )
}
