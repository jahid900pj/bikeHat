import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useSeller from '../../../hooks/useSeller';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [isVerify] = useSeller(user?.email)
    console.log(isVerify)



    // useEffect(() => {
    //     let date = new Date().getDate;
    //     let month = new Date().getMonth;
    //     let years = new Date().getFullYear;

    //     setCurrentDate(
    //         date + '/' + month + '/' + years
    //     )
    // }, [])

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target;

        const title = form.productName.value;
        const img = form.ImageURL.value;
        const seller = form.sellerName.value;
        const published_date = form.postDate.value;
        const original_price = form.originalPrice.value;
        const resale_price = form.sellingPrice.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const category_id = form.category.value;
        const description = form.description.value;

        const addProduct = { title, img, seller, published_date, original_price, resale_price, used, condition, phoneNumber, location, category_id, description, email: user.email, verified: isVerify }

        console.log(addProduct)

        fetch(`http://localhost:5000/addProduct`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // alert('Order place successfully')
                    toast.success('Product add  successfully')
                    form.reset()
                    navigate('/dashboard/myProducts')
                }
            })
            .catch(error => console.log(error))

    }


    return (
        <div className='w-full p-7 rounded-md shadow-2xl mx-auto'>
            {/* <h2 className='text-3xl '>Add DOCTORS</h2> */}
            <form onSubmit={handleAddProduct} className='grid gap-2'>

                <div className='lg:flex lg:justify-between'>
                    <div>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input name='productName' type="text" placeholder="product name" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">ImageURL</span>
                        </label>
                        <input name='ImageURL' type="text" placeholder="ImageURL" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input readOnly defaultValue={user?.displayName} name='sellerName' type="text" placeholder="seller name" className="input input-bordered w-full" />
                    </div>

                </div>

                <div className='lg:flex lg:justify-between'>
                    <div>
                        <label className="label">
                            <span className="label-text">Post Date</span>
                        </label>
                        <input readOnly defaultValue={moment().format("MMM Do YY")} name='postDate' type="text" placeholder="Post Date" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">original price</span>
                        </label>
                        <input name='originalPrice' type="text" placeholder="original price" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Selling price</span>
                        </label>
                        <input name='sellingPrice' type="text" placeholder="Selling price" className="input input-bordered w-full" />
                    </div>

                </div>

                <div className='lg:flex lg:justify-between'>
                    <div>
                        <label className="label">
                            <span className="label-text">Used Time</span>
                        </label>
                        <input name='used' type="text" placeholder="Used Time" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Product condition</span>
                        </label>
                        <input name='condition' type="text" placeholder="Product condition" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    </div>

                </div>

                <div className='lg:flex lg:justify-between'>
                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">1:Sports, 2:Naked, 3:Cruiser (bike)</span>
                        </label>
                        <select name='category' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>01</option>
                            <option>02</option>
                            <option>03</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>

                </div>

                <input className='btn btn-primary ' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;