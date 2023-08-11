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

      <main className='font-poppins'>
        <section>
          {/* navigation */}
          <nav>
            <h1>Developed Milith De Silva</h1>
            <ul>
              {/* icon */}
              <li>
                <BsFillMoonFill/>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>

  )
}
