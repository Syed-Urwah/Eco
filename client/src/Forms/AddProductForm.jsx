import React, { useState, useEffect } from 'react'
import ColorPicker from '../components/ColorPicker';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../utils/firebase';
import { RxCross2 } from "react-icons/rx";

export default function AddProductForm() {




  const [img1, setImg1] = useState({
    file: "",
    url: ""
  });
  const [color, setColor] = useState("#fff");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: [],
    categories: [],
    size: "",
    status: "",
    price: ""
  })

  const [uploadTask, setUploadTask] = useState(null);



  function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
  }

  function numberValidation(e) {
    if (isNumber(e.target.value) || e.target.value == "") {
      console.log(e.key);
      setProduct({ ...product, price: e.target.value })
    }
  }


  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log(color)
  }

  function handleCategories(e) {
    let cat = e.target.value.split(',')
    setProduct({ ...product, categories: cat });
  }

  const getImage = (e) => {
    console.log(e.target.files[0]);
    setImg1({ ...img1, file: e.target.files[0] });
  }

  const handleImageUpload = (image) => {
    const storageRef = ref(storage, 'images/' + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
    setUploadTask(uploadTask)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImg1({ ...img1, url: downloadURL })
        });
      }
    );
  }

  useEffect(() => {
    img1.file && handleImageUpload(img1.file);
  }, [img1.file])


  return (
    <form onSubmit={handleProductSubmit} className='flex gap-4 flex-wrap lg:flex-nowrap '>
      <div id="left1" className='w-full flex flex-col gap-4  outline-red-700'>

        <div id='first-row' className="flex flex-col gap-2">
          <label htmlFor="product-name" className=' text-gray-800 font-semibold'>Product Name</label>
          <input value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="product-name" id="product-name" />
        </div>

        <div id='second-row' className="flex gap-2 ">
          <div id="category" className='flex flex-col gap-2 w-3/4  outline-blue-600'>
            <label htmlFor="category" className=' text-gray-800 font-semibold'>Category</label>
            <input onChange={handleCategories} className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="category" id="category" placeholder='seperate by comma' />

          </div>

          <div id="size" className='flex flex-col gap-2 w-3/12 min-w-fit  outline-red-600'>
            <label htmlFor="size" className=' text-gray-800 font-semibold'>Size</label>
            <select value={product.size} onChange={(e) => setProduct({ ...product, size: e.target.value })} id="large" class="block w-full px-4 py-1 text-base text-gray-900 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500  bg-transparent  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 border  border-gray-800">
              <option className='text-gray-800 font-semibold' selected>Select Size</option>
              <option value='s' className='text-gray-800 font-semibold'>S</option>
              <option value="m" className='text-gray-800 font-semibold'>M</option>
              <option value="l" className='text-gray-800 font-semibold'>L</option>
              <option value="xl" className='text-gray-800 font-semibold'>XL</option>
            </select>
          </div>

        </div>

        <div id='third-row' className="flex flex-col gap-2">
          <label htmlFor="price" className=' text-gray-800 font-semibold'>Price</label>
          <input value={product.price} onChange={numberValidation} className='h-8 rounded bg-transparent border  border-gray-800  text-gray-800' type="text" name="price" id="price" pattern="[1-9]" />
        </div>

        <div id='fourth-row' className="flex flex-col gap-2">
          <label htmlFor="description" className=' text-gray-800 font-semibold'>Description</label>
          <textarea value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} className='h-36 rounded resize-none bg-transparent border  border-gray-800  text-gray-800' name="description" id="description" />
        </div>

      </div>

      <div id="right" className='w-full outline-green-700 flex flex-col justify-between gap-4'>
        <div id='images-row' className="flex flex-col gap-2">
          <p className=' text-gray-800 font-semibold'>Product Images</p>

          <div id="images" className='flex flex-wrap min-w-fit gap-2'>




            <div id="right-images" className='flex gap-2 '>

              <div class="flex items-center justify-center w-60 ">
                {
                  img1.url ? <div className="image">
                          <RxCross2/>
                          <img src={img1.url} className='h-full w-full' alt="thumbnail" />
                        </div> :
                    <label for="product-image" class="flex flex-col px-10 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-center text-gray-500 dark:text-gray-400">Thumbnail Image</p>
                      </div>
                      <input onChange={getImage} id="product-image" accept='image/*' type="file" class="hidden" />
                    </label>
                }

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
                    <input id="product-image" accept='image/*' type="file" class="hidden" />
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

        <div id="color-input" className='flex flex-col gap-2'>
          <label htmlFor="product-name" className=' text-gray-800 font-semibold'>Color</label>
          <ColorPicker color={color} setColor={setColor} />

        </div>

        <div id="bottom-button" className='flex gap-5'>
          <button onClick={handleProductSubmit} className='bg-primary-btn text-white px-4 py-2 rounded'>Add Product</button>
          <button className='bg-primary-btn text-white px-4 py-2 rounded'>Save Product</button>
          <button className='bg-primary-btn text-white px-4 py-2 rounded'>Schedule</button>
        </div>
      </div>
    </form>
  )
}
