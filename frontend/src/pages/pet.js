import { useContext, useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Menu } from '@headlessui/react'

import { getAllPets } from "../api/productApi"
import Hotline from "../components/hotline"
import { Link } from "react-router-dom"
import CartContext from "../store/cartContext"

const Pet = () => {
    const [pets, setPets] = useState([])
    const [viewoptions, setViewoptions] = useState(true)
    const { cart } = useContext(CartContext)
    
    useEffect(() => {
        (async () => {
            const res = await getAllPets()
            setPets(res)
        })()
    }, [])

    return (
        <>
            <Header cartLen={cart.length}/>
            <div className="my-8 mx-20">
                <div className="flex flex-row rounded bg-[#ededed] items-center px-4">
                    <div className="text-[#333] px-3 my-2 border-r-2 hover:text-primary_color duration-300">Trang chủ</div>
                    <p className="text-[#333] px-3">Thú cưng</p>
                </div>

                <div className="mt-20 flex flex-row gap-x-8">
                    <div className="border-2 rounded space-y-8 pb-10 w-1/5 px-4">
                        <p className="font-semibold text-sm tracking-tighter py-4 border-b-2">TÙY CHỈNH THEO DÕI</p>
                        <div className="flex flex-row gap-x-12 items-center">
                            <p className="font-semibold text-sm tracking-tighter">Sắp xếp:</p>
                            <Menu as="div" className='relative inline-block text-left'>
                                <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>Mặc định</Menu.Button>
                                <Menu.Items className='absolute left-0 mt-1 w-40 origin-top-right divide-y-4 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <Menu.Item>
                                        {({active}) => (
                                            <p className={`${active ? 'bg-primary_color text-white px-2 py-2 font-medium': 'text-primary_color px-2 py-2 font-medium'}`}>Tăng dần theo giá</p>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <p className={`${active ? 'bg-primary_color text-white px-2 py-2 font-medium': 'text-primary_color px-2 py-2 font-medium'}`}>Giảm dần theo giá</p>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center">
                            <p className="font-semibold text-sm tracking-tighter">Chế độ hiện thị:</p>
                            
                            <svg onClick={()=>setViewoptions(!viewoptions)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${viewoptions ? 'white':"#de8ebe"}`} className={`${viewoptions ? 'w-9 h-9 p-1 border-2 bg-primary_color border-primary_color':'w-9 h-9 p-1 border-2 cursor-pointer'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                            <svg onClick={()=>setViewoptions(!viewoptions)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${!viewoptions ? 'white':"#de8ebe"}`} className={`${!viewoptions ? 'w-9 h-9 p-1 border-2 bg-primary_color border-primary_color':'w-9 h-9 p-1 border-2 cursor-pointer'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>

                    {/* product */}
                    <div className={`${viewoptions? "flex flex-wrap justify-between w-3/4 flex-row": 'flex flex-wrap justify-between w-3/4 flex-col gap-y-4'}`}>
                        {pets.map((item) => (
                            <div
                                key={item.id}
                                className={`${viewoptions? 'w-[28%]': 'flex flex-row'}`}
                            >
                                <Link to={`/pet/${item.id}`} className={`${viewoptions? "block h-3/4 group overflow-hidden relative": "block w-60 mr-8 group overflow-hidden relative"}`}>
                                    <div className="invisible group-hover:visible absolute w-full h-full flex flex-col items-center justify-center bg-white/50 z-30">
                                        <div className="flex flex-row gap-x-3">
                                            <div className='cursor-pointer group/link p-3 rounded-full border-2 border-primary_color bg-white hover:bg-primary_color transition'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path className="group-hover/link:fill-white" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" fill="#de8ebe"></path> </svg>
                                            </div>

                                            <div className='cursor-pointer group/link p-3 rounded-full border-2 border-primary_color bg-white hover:bg-primary_color transition'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path className="group-hover/link:fill-white" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#de8ebe"></path> </svg>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-center rounded-lg bg-primary_color hover:bg-hover_primary_color py-2 px-4 mt-6 border-2 border-dashed transition">
                                            <p className="text-white font-medium pr-1">Mua hàng</p>
                                            <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" fill="white"></path> </svg>
                                        </div>
                                    </div>

                                    <img src={item.imageUrl} alt={item.name} className="h-full group-hover:scale-110 group-hover:blur-sm duration-300"></img>
                                </Link>
                                <div className={"my-2"+ viewoptions? 'space-y-2':'space-y-4'}>
                                    <p className="text-primary_color text-sm font-medium">ID: {item.id}</p>
                                    <p className="truncate text-[#333] font-primary font-bold text-lg hover:text-primary_color duration-300">{item.name}</p>
                                    <p className="text-primary_color text-lg font-medium">{item.unitPrice}đ</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Hotline />
            <Footer />
        </>
    )
}

export default Pet