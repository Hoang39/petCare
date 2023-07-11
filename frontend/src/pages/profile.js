import {useContext, useEffect,useState} from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import AvatarInput from '../components/avatarInput';
import Input from '../components/input';

import {userInfo,userAvatar} from '../api/userApi'
import Hotline from '../components/hotline';
import CartContext from '../store/cartContext';

const description = {
    fullname_des : "Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.",
    sex : "Giới tính của bạn Nam(M) / Nữ(F)",
    avatar_des : "Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG ",
    phone_des : "Điện thoại kết nối với PetCare."
}

const Profile = () => {
    const [info, setInfo] = useState({});
    const [avatar, setAvatar] = useState();
    const { cart } = useContext(CartContext)

    useEffect(() => {
        (async () => {
            const res = await userInfo(localStorage.getItem('user')); 
            const ava = await userAvatar(localStorage.getItem('user'));

            if(res) {
                setInfo(res)
                setAvatar(ava.avatar)
            }
        })();
      }, []);

    return (
        <>
            <Header cartLen={cart.length}/>
            <div className="lg:pl-80 pl-12 pt-20">
                <p className="text-2xl font-bold text-primary_color font-primary">Cài đặt</p>
                <div className="flex flex-col gap-4 pt-4 divide-solid divide-y divide-slate-200 lg:w-3/5">
                    <p className="text-xl font-semibold text-gray-800 border-b-2 py-2">Thông tin cá nhân</p>
                </div>

                <Input data={info} title={"Họ tên"} des={description.fullname_des} value={info.fullName}/>
                <Input data={info} title={"Giới tính"} des={description.sex} value={info.sex}/>
                <AvatarInput title={"Avatar"} des={description.avatar_des} value={avatar}/>
                <Input data={info} title={"Email"} des={null} value={info.email}/>
                <Input data={info} title={"Số điện thoại"} des={description.phone_des} value={info.phoneNumber}/>

                </div>
            
            <Hotline />
            <Footer/>
       </>
    );
}

export default Profile;
