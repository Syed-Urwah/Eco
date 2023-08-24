import React from 'react'
import SideBar from '../../../components/SideBar'
import sideBarClose from '../../../assets/functions/sidebarClose'

export default function AddProduct() {
    return (
        <div className="body-container  min-h-screen">
            <SideBar />
            <div onClick={sideBarClose} className="md:ml-64 ">
                <div className="px-4 rounded-lg">
                    <div className="title text-gray-900">
                        <h2 className='text-3xl'>Add Product</h2>
                    </div>

                    <div id="form-container" className='w-full mt-7 pt-20'>
                        <form action="" className='flex gap-4'>
                            <div id="left" className='w-full flex flex-col gap-4 outline outline-red-700'>

                                <div id='first-row' className="flex flex-col gap-2">
                                    <label htmlFor="product-name" className=' text-gray-800'>Product Name</label>
                                    <input className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="product-name" id="product-name" />
                                </div>

                                <div id='second-row' className="flex gap-2 ">
                                    <div id="category" className='flex flex-col gap-2 w-3/4  outline-blue-600'>
                                        <label htmlFor="category" className=' text-gray-800'>Category</label>
                                        <input className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="category" id="category" />
                                    </div>

                                    <div id="gender" className='flex flex-col gap-2 w-3/12 min-w-fit  outline-red-600'>
                                        <label htmlFor="gender" className=' text-gray-800'>Gender</label>
                                        <select id="large" class="block w-full px-4 py-1 text-base text-gray-900 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500  bg-transparent  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 border  border-gray-800">
                                            <option value='m' className='text-gray-800' selected>Male</option>
                                            <option value="f" className='text-gray-800'>Female</option>
                                        </select>
                                    </div>

                                </div>

                                <div id='third-row' className="flex flex-col gap-2">
                                    <label htmlFor="brand" className=' text-gray-800'>Brand</label>
                                    <input className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="brand" id="brand" />
                                </div>

                                <div id='fourth-row' className="flex flex-col gap-2">
                                    <label htmlFor="description" className=' text-gray-800'>Description</label>
                                    <textarea className='h-36 rounded resize-none bg-transparent border  border-gray-800  text-gray-800' name="description" id="description" />
                                </div>

                            </div>

                            <div id="right" className='w-full outline outline-green-700'>
                                <div id='first-row' className="flex flex-col gap-2">
                                    <p className=' text-gray-800'>Product Image</p>

                                    <div id="images" className='flex flex-row-reverse flex-wrap min-w-fit gap-2'>

                                      


                                        <div id="right-images" className='flex gap-2 '>

                                            <div class="flex items-center justify-center w-60 ">
                                                <label for="product-image" class="flex flex-col px-10 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p class="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>
                                                    <input id="product-image" type="file" class="hidden" />
                                                </label>
                                            </div>

                                            <div id="small-images" className='flex flex-wrap w-28 gap-y-1'>
                                                <div class="flex items-center justify-center w-full ">
                                                    <label for="product-image" class="flex flex-col items-center justify-center w-full h-[125px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg class="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p class="mb-2 text-[8px] text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p class="text-[8px] text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="product-image" type="file" class="hidden" />
                                                    </label>
                                                </div>

                                                <div class="flex items-center justify-center w-full ">
                                                    <label for="product-image" class="flex flex-col items-center justify-center w-full h-[125px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg class="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p class="mb-2 text-[8px] text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p class="text-[8px] text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="product-image" type="file" class="hidden" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex items-center justify-center w-60 ">
                                            <label for="product-image" class="flex flex-col px-10 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p class="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="product-image" type="file" class="hidden" />
                                            </label>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}
