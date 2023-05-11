import { useState } from 'react'
import { changeUserInfo } from '../api/userApi';

const Input = ({data,title, des, value}) => {
    const [state,setState]= useState(true);

    const handleChange = event => {
        if(title ==='Họ tên'){
            data.fullName = event.target.value;
        }
        if(title ==='Giới tính'){
            data.sex = event.target.value;
        }
        if(title === 'Email'){
            data.email = event.target.value;
        }
        if(title === 'Số điện thoại'){
            data.phoneNumber = event.target.value;
        }
    };

    return (
    <>
        <div className="flex flex-col lg:flex-row justify-between gap-4 pt-8 pr-8 ">

            <div className="flex flex-col gap-y-4 w-full">
                <p className="font-medium text-lg">{title}</p>
                
            <form>
                <input onChange={handleChange} defaultValue={value} disabled={state}
                    className='lg:w-3/5 w-5/6 appearance-none block w-full bg-white 
                    text-gray-400 border-gray-200 border-b-2 py-2 mt-[-20px]  
                    leading-tight focus:outline-none focus:border-gray-300' type='text' name="name"/>   
                <img className="" src={value} alt="" ></img>
            </form>

            <p className="text-gray-400 lg:w-3/5">{des}</p>
           
            </div>
            
            <div className="flex flex-col w-full">
                {
                    (state)
                    ?
                    <button onClick={()=>{setState(!state)}} className="w-fit h-fit rounded-2xl border px-4 py-1 boder-1 border-gray-300 text-gray-500 hover:border-gray-800">Chỉnh sửa</button>
                    :
                    <div className="flex flex-row gap-2">
                        <button 
                            onClick={async()=>{ await changeUserInfo(localStorage.getItem('user'),data); setState(!state)}} 
                            className="rounded-2xl border px-4 py-1 boder-1 border-orange-400 text-orange-400 hover:border-orange-600"
                        >
                            Lưu
                            </button>
                        <button 
                            onClick={()=>{setState(!state)}} 
                            className="rounded-2xl border px-4 py-1 boder-1 border-gray-300 text-gray-500 hover:border-gray-800"
                        >
                            Hủy
                        </button>
                    </div>
                }
            </div>
            
        </div>
    </>
    );
}

export default Input;
