import React, { useState } from 'react'
import SideBar from '../../../components/SideBar'
import sideBarClose from '../../../assets/functions/sideBarClose'
import AddProductForm from '../../../Forms/AddProductForm';


export default function AddProduct() {

    

    return (
        <div className="body-container  min-h-screen">
            <SideBar />
            <div onClick={sideBarClose} className="md:ml-64 ">
                <div className="px-4 rounded-lg">
                    <div className="title text-gray-900 pt-12">
                        <h2 className='text-3xl'>Add Product</h2>
                    </div>

                    <div id="form-container" className='w-full pt-20'>
                       

                        <AddProductForm/>
                    </div>

                </div>
            </div>
        </div>

    )
}
