import React, { useState } from 'react'
import SideBar from '../../../components/SideBar'
import sideBarClose from '../../../assets/functions/sideBarClose'
import AddProductForm from '../../../Forms/AddProductForm';
import AlertSuccess from '../../../components/AlertSuccess';


export default function AddProduct() {


    const [alert, setAlert] = useState({
        status: false,
        message: ""
    });

    return (
        <div className="body-container  min-h-screen">

            <SideBar />
            <div className="md:ml-64 ">
                {alert.status && <AlertSuccess message={alert.message} />}
                <div className="px-4 rounded-lg">
                    <div className="title text-gray-900 pt-12">
                        <h2 className='text-3xl'>Add Product</h2>
                    </div>

                    <div id="form-container" className='w-full pt-20'>
                        <AddProductForm setAlert={setAlert} alert={alert} />
                    </div>

                </div>
            </div>
        </div>

    )
}
