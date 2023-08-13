import Head from 'next/head'
import Image from 'next/image'
import { FaRegMoon } from 'react-icons/Fa'

//Icon
import { AiOutlineGithub, AiFillLinkedin, AiOutlineDribbble, AiOutlineInstagram } from "react-icons/ai"

export default function Home() {
  return (
    <div >
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Titillium+Web:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=PT+Serif:wght@700&family=Titillium+Web:wght@600&display=swap');
        </style>
       
      </head>

      <main className="font-poppins min-h-screen px-10 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" >
        <section>

          {/* navigation */}
          <nav className="py-10 flex  justify-between ">
            <h1 className=' text-sm'>Developed E-Safe Tec</h1>
            <ul className='flex items-center'>
              {/*    icon */}
              <li>
                <FaRegMoon
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

          {/* Hero Section */}

          <div className='text-center p-3' >
            <h1 className=' text-7xl font-bold text-white font-AnonymousPro  '> Milith De Silva</h1>
            <h3 className='text-2xl py-4 mr-8 text-yellow-400 ' >Ui/Ux Design | Mobile App Development | Web Development </h3>
          </div>


          <div className=' p-2 gap-10 text-white text-4xl justify-center flex flex-row'>
            <a href="https://github.com/Milith97"> <AiOutlineGithub /> </a>
            <a href="https://www.linkedin.com/in/milith-de-silva-b59720220/"> <AiFillLinkedin /> </a>
            <a href="https://dribbble.com/Milith_00"> <AiOutlineDribbble /> </a>
            <a href="https://www.instagram.com/Milith_97"> <AiOutlineInstagram /> </a>
          </div>


          {/* Profile */}
          <div className=" m-auto relative justify-center flex mt-5 bg-gradient-to-t from-orange-400 to-sky-400 w-96 h-96 p-5 rounded-full">
            <Image src="/homeimg.jpg" width={300} height={300} alt='profile pic' className=" rounded-full " objectFit='cover'/>
          </div>


        </section>
      </main>
    </div>

  )
}

