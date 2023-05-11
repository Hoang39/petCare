import { useEffect, useState } from "react"
import Modal from '@mui/material/Modal';

import { getAllPets, getAllPetFoods, getAllProducts, getAllServices } from "../api/productApi"
import { editPet, editFood, editProduct, editService } from "../api/adminApi";
import { useNavigate } from "react-router-dom";

const AdminDescription = ( props ) => {
    const navigate = useNavigate()
    const href = props.href
    const [allproduct, setAllProduct] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [res, setRes] = useState(null)
    const [state, setState] = useState(true)
    const [formValue, setformValue] = useState({
        id: '',
        name: '',
        imageUrl:'',
        type: '',
        unitPrice:0,
        discountedPrice:0,
        breed:'',
        quantity:0,
        age:0,
        isBought:false,
    });

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('user')
            const result = href === 'pet'? await editPet(token, formValue) : href === 'food'? await editFood(token, formValue) : href === 'service'? await editService(token, formValue) : await editProduct(token, formValue)
            // console.log(formValue, result)
            if (result) setOpenModal(!openModal)

            const res = href === 'pet'? await getAllPets() : href === 'food'? await getAllPetFoods() : href === 'service'? await getAllServices() : await getAllProducts()
            setAllProduct(res)
        })()
    }, [state])

    const handleProduct = (pid) => {
        const result = allproduct.filter((item) => item.id === pid)[0]
        setRes(result)
        setformValue({
            ...formValue,
            'id': pid
        });
    }

    const handleChangeText = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="grid grid-cols-4 gap-4">
        {
            allproduct.map((item) => (
                <div key={item.id} className="rounded-xl bg-white drop-shadow-lg hover:-translate-y-2 transition">
                    <div 
                        onClick={() => {handleProduct(item.id); setOpenModal(!openModal)}}
                        className='cursor-pointer flex flex-row items-center justify-between py-4 px-8'
                    >
                        <div className="flex flex-col gap-y-4 justify-between">
                            <p className="text-[#333] text-sm">ID: {item.id}</p>
                            <p className="text-primary_color text-lg font-primary">{item.name}</p>
                            <p className="text-[#333] text-sm">Price: {item.unitPrice}</p>
                        </div>

                        <img className="w-1/3" src={item.imageUrl} alt={`${href}`}></img>

                    </div>
                </div>
            ))
        } 

            <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 bg-white drop-shadow-lg p-8">
                    <div className="flex flex-col mb-4">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name">Name</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" defaultValue={res && res.name}></input>
                    </div>

                    {/* image */}
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="image">Image Link</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="imageUrl" id="image" defaultValue={res && res.imageUrl}/>
                    </div>

                    {/* type */}
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="category">Type</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="type" id="category" defaultValue={res && res.type}/>
                    </div>

                    {/* price */}
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="price">Price</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name="unitPrice" id="price" defaultValue={res && res.unitPrice}/>
                    </div>

                    {/* discounted Price */}
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor=" dishDetails">Discounted Price</label>
                        <input onChange={handleChangeText}
                        className="border py-2 px-3 text-grey-800" type="text" name=" discountedPrice" id=" dishDetails" defaultValue={res && res.discountedPrice}/>
                    </div>

                    {/* breed */}
                    {
                        res && res.breed
                        ?
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="dishDescription">Chủng loại</label>
                            <input 
                                onChange={handleChangeText}
                                className="border py-2 px-3 text-grey-800" type="text" name="breed" id="dishDescription" defaultValue={res && res.breed}/>
                        </div>
                        :
                        null
                    }

                    {/* quantity */}
                    {
                        res && res.quantity
                        ?
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="dishQuantity">Số lượng</label>
                            <input 
                                onChange={handleChangeText}
                                className="border py-2 px-3 text-grey-800" type="text" name="quantity" id="dishQuantity" defaultValue={res && res.quantity}/>
                        </div>
                        :
                        null
                    }
                    <div>
                        <button onClick={() => { setState(!state) }} className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-2 rounded" type="submit">Update</button>
                    </div>
                    <div 
                        className="uppercase text-md font-semibold text-center p-4 rounded hover:text-blue-500 cursor-pointer"
                        onClick={() => { navigate('/admin') }}
                    >
                        Back
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default AdminDescription