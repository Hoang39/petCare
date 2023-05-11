import { useEffect, useRef, useState } from "react"
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Footer from "../components/footer"
import Header from "../components/header"
import Hotline from "../components/hotline"
import { userFeedback, postFeedback } from "../api/userApi"

const FeedBack = () => {
    const [feedback, setFeedBack] = useState('')
    const [allfeedback, setAllFeedBack] = useState('')
    const [state, setState] = useState(true)

    const handleChange = (event) => {
        setFeedBack(event.target.value)
    }

    const reloadCount = useRef(0);

    useEffect(() => {
        reloadCount.current++;
    }, []);

    useEffect(() => {
        (async () => {
            setAllFeedBack(await userFeedback())
            const token = localStorage.getItem('user')
            const res = await postFeedback(token, feedback)

            if (res) {
                Store.addNotification({
                    title: "Cập nhật phản hồi",
                    message: "Thành công",
                    type: 'success',
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                });
                window.location.reload(true)
            }

        })()
    }, [state, reloadCount.current])

    return (
        <>
            <ReactNotifications/>

            <Header />

            <div className="my-8 mx-20 flex flex-col items-center">
                <p className="font-primary text-primary_color text-2xl font-bold">PHẢN HỒI</p>
                <div className="overflow-y-auto h-80 flex flex-col gap-4 gap-y-6 mt-8">
                    {
                        allfeedback && allfeedback.map((feedback)=>(
                            <div key={feedback.contentID} className="flex flex-col gap-4 bg-gray-50 rounded-xl p-2 shadow-md lg:w-[650px]">
                                <div className="flex flex-row gap-2 items-center border-b-2 border-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-lg">{feedback.fullName}</p>
                                        <p className="italic text-gray-600 text-sm">{feedback.email}</p>
                                    </div>
                                
                                </div>
                                <p className="font-semibold">"{feedback.content}"</p>
                            </div>
                        ))
                    }
                </div>

                <textarea 
                    onChange={handleChange}
                    className="mt-4 form-control block w-full lg:w-[650px] w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="textarea"
                    rows="3"
                    placeholder="Phản hồi của bạn"
                ></textarea>

                <div class="my-10 w-1/2 flex items-center justify-between cursor-pointer">
                    <div onClick={() => setState(!state)} className="w-full flex flex-col items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-2 px-4 border-2 border-dashed transition focus:outline-none focus:shadow-outline">
                        <p className="text-white font-medium pr-1">Cập nhật</p>
                    </div>
                </div>  
            </div>

            <Hotline />
            <Footer />
        </>
    )
}

export default FeedBack;