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
                  className="cursor-pointer text-xl mx-5 text-white" />
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

          {/*---------------------------------Hero Section---------------------------------*/}

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


          {/*-------------------------------Profile---------------------------------*/}
          <div className=" m-auto relative justify-center flex mt-5 bg-gradient-to-t from-orange-400 to-sky-400 w-96 h-96 p-5 rounded-full">
            <Image src="/homeimg.jpg" width={300} height={300} alt='profile pic' className=" rounded-full " objectFit='cover' />
          </div>
        </section>



        {/*---------------------------------About----------------------------------*/}
        <section>
          <div>
            <h3 className=" text-9xl py-10 font-bold opacity-80 text-gray-700 ml-64 ">
              About
            </h3>
          </div>

          <div className='flex flex-row'>
            <div className='flex-1 flex-row '>
              <Image
                src={'/about.jpg'}
                width={300}
                height={300}
                alt="servie 1 img"
                className="  rounded-3xl py-7 ml-64 "
              />
            </div>
            <div className='flex-1 flex-row' >
              <p className='text-6xl text-white'>Hi I'm Milith!</p>
              <p className='text-white text-left  grid text-r sm:grid-cols-2 text-2xl mt-8 '>
                My role as a Software Engineer (Mobile) is to be able
                to envision my client's requirement and not
                only meet their expectation but to exceed
                it. As a creative designer, consistency is
                key to ensure all the requested work
                reaches the client on time, and always
                committed to ensure any and all changes
                are made as many times as the client
                requests to give them the utmost
                satisfactory product.
              </p>
            </div>
          </div>


        </section>

        {/*---------------------------------Education & Experiance----------------------------------*/}

        <section>
          <div className='flex flex-row mt-14'>
            <div className='flex flex-row'>
              <h3 className="  text-9xl py-10 font-bold opacity-80 text-gray-700 ml-16 ">
                EDUCATION
              </h3>
            </div>
            <div className='flex flex-row'>
              <h3 className="  text-6xl font-bold opacity-80 text-gray-700 ml-14 text-right mt-28">
                & EXPERIONS
              </h3>
            </div>
          </div>

          <div className='flex flex-row gap-10 px-5 ml-7 mt-20 '>
            <div className='flex flex-row'>
              <div className=" max-w-sm rounded overflow-hidden shadow-lg ">
                <Image
                  src={'/download2.png'}
                  width={250}
                  height={250}
                  alt="servie 1 img"
                  className=" w-64 jus"
                />
                <div className=" mr-7 py-6">
                  <p className="text-white text-base">
                    Studied primary
                    and higher education
                    at Lumbini College,
                    Colombo 05
                    2003-2016
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image
                  src={'/download1.png'}
                  width={250}
                  height={250}
                  alt="servie 1 img"
                  className="  w-64   "
                />
                <div className="mr-7 py-6">
                  <p className="text-white text-base">
                    I Was Studying first
                    year of Sri Lanka
                    Institute of Information
                    and Technology
                    Education.
                    2018-2019
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image
                  src={'/down.jpg'}
                  width={250}
                  height={250}
                  alt="servie 1 img"
                  className=" w-64  "
                />
                <div className=" mr-7 py-6">
                  <p className="text-white text-base">
                    Worked as a customer
                    relation officer at
                    Comashal Credit
                    & Finance PLC.
                    2019-2021
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-row'>
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <Image
                  src={'/download4.png'}
                  width={250}
                  height={250}
                  alt="servie 1 img"
                  className="  w-64   "
                />
                <div className="mr-7 py-6">
                  <p className="text-white text-base">
                    Studying in First
                    year of graduate
                    software engineering
                    course at ijse
                    institute.
                    2022-Present
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/*---------------------------------Portfolio----------------------------------*/}
        <section>
          <div>
            <h3 className="  text-9xl font-bold opacity-80 text-gray-700 mt-28 ml-20">
              PORTFOLIO
            </h3>
          </div>
          <div>

            <div>
              <h3 className="  text-4xl font-bold opacity-80 text-gray-700 mt-10 ml-20">
                React Native Projects
              </h3>

              <div className="grid gap-2 grid-cols-3">
                <div className="flex-1 text-gray-700 text-center  px-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://github.com/Milith97/Student-Management-App-'>
                      <Image
                        src={'/p6.jpg'}
                        width={250}
                        height={250}
                        alt="servie 1 img"
                        className="  w-64 rounded-3xl  "
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 text-gray-700 text-center  px-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://github.com/Milith97/Nic-Birthday-and-gender-extractor'>
                      <Image
                        src={'/p03.jpg'}
                        width={350}
                        height={350}
                        alt="servie 1 img"
                        className="  w-80 rounded-lg mt-4 "
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 text-gray-700 text-center  px-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://github.com/Milith97/Food-Finder-App'>
                      <Image
                        src={'/p4.jpg'}
                        width={250}
                        height={250}
                        alt="servie 1 img"
                        className="  w-64 rounded-lg mt-2 "
                      />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="  text-4xl font-bold opacity-80 text-gray-700 mt-10 ml-20">
                Figma & AdobeXD Projects
              </h3>
              <div className="grid gap-3 grid-cols-3">
                <div className="flex-1 text-gray-700 text-centerpx-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://dribbble.com/shots/20922159-Travel-Website-Home-Page'>
                      <Image
                        src={'/p5.png'}
                        width={250}
                        height={250}
                        alt="servie 1 img"
                        className="  w-64 rounded-lg mt-2  "
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 text-gray-700 text-center  px-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://dribbble.com/shots/20923202-Sign-Up-Page'>
                      <Image
                        src={'/p2.png'}
                        width={250}
                        height={250}
                        alt="servie 1 img"
                        className="  w-64 rounded-lg mt-2 "
                      />
                    </a>
                  </div>
                </div>

                <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
                  <div className='flex flex-row justify-center'>
                    <a href='https://dribbble.com/shots/20920266-Pizza-Home-Page-Design'>
                      <Image
                        src={'/p3.png'}
                        width={250}
                        height={250}
                        alt="servie 1 img"
                        className="  w-64 rounded-lg mt-2 "
                      />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
        {/*---------------------------------Services----------------------------------*/}
        <section>
          <div>
            <h3 className=" text-9xl py-10 font-bold opacity-80 text-gray-700 ml-20">
              Services
            </h3>
          </div>

          <div className='flex flex-row gap-5'>
            {/* card 01 */}
            <div className=" text-center shadow-lg p-5 rounded-xl my-6 w-1/3 h-1/3 bg-gradient-to-l from-gray-400 via-gray-600 to-blue-800 ">
              <Image
                src={'/card1.jpg'}
                width={350}
                height={350}
                alt="servie 1 img"
                className=" inline py-5  "
              />
              <h3 className="text-2xl font-bold text-gray-200 ">
                Ui/Ux Design
              </h3>
              <p className=" text-sm py-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                distinctio nihil fugiat ea perferendis qui nulla facere
                consequatur
              </p>
            </div>

            {/* card 02 */}
            <div className="text-center shadow-lg p-5 rounded-xl my-6 w-1/3 h-1/3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-800 ">
              <Image
                src={'/card2.jpg'}
                width={350}
                height={350}
                alt="servie 1 img"
                className=" inline py-5  "
              />
              <h3 className="text-2xl font-bold text-gray-200">
                Mobile App Development
              </h3>
              <p className=" text-sm py-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                distinctio nihil fugiat ea perferendis qui nulla facere
                consequatur
              </p>
            </div>

            {/* card 03 */}
            <div className="text-center shadow-lg p-5 rounded-xl my-6 w-1/3 h-1/3 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 ">
              <Image
                src={'/card3.jpg'}
                width={350}
                height={350}
                alt="servie 1 img"
                className=" inline py-5  "
              />
              <h3 className="text-2xl font-bold text-gray-200 ">
                Web Development
              </h3>
              <p className=" text-sm py-2 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                distinctio nihil fugiat ea perferendis qui nulla facere
                consequatur
              </p>
            </div>
          </div>
        </section>
      </main >
    </div>





  )
}

