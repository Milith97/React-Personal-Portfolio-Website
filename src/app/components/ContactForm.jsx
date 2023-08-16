"use client";
import Image from 'next/image'
import { useState } from "react";

export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    /* border-x-8 border-y-8 border-yellow-300  */

    return (

        <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap border-x-8 border-y-8 border-yellow-300  ">

            <>
                <form className=" basis-1/3 flex-1 py-4 mt-2 flex flex-col gap-3 ">

                    <div className="flex flex-col gap-2 p-3" >
                        <label className=" text-white" htmlFor="fullname">Full Name</label>
                        <input
                            onChange={(e) => setFullname(e.target.value)}
                            value={fullname}
                            type="text"
                            id="fullname"
                            placeholder="  John Doe"
                        />
                    </div>

                    <div className="flex flex-col gap-2 p-3" >
                        <label className=" text-white" htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            id="email"
                            placeholder="  john@gmail.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2 p-3">
                        <label className=" text-white" htmlFor="message">Your Message</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="h-32 shadow-md px-6 py-2 border border-slate-300;"
                            id="message"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <button className=" bg-yellow-400 p-3 text-white font-bold ml-10 mr-10 shadow-xl shadow-yellow-100/20 " type="submit ">
                        Send
                    </button>

                </form >

            </>

            <div className=" basis-1/3 flex-1 flex flex-row  ">
                <Image
                    src={'/Map.jpg'}
                    width={550}
                    height={100}
                    alt="servie 1 img"
                    className=" inline ml-3 shadow-2xl "
                />


            </div>


        </div>
    )
}