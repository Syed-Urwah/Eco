import React, { useState, useEffect } from 'react'
import ColorPicker from '../components/ColorPicker';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../utils/firebase';
import { RxCross2 } from "react-icons/rx";
import { Img } from 'react-image'
import axios from 'axios';


export default function AddProductForm({setAlert}) {




  const [img1, setImg1] = useState({
    file: "",
    url: "",
    loading: false
  });
  const [img2, setImg2] = useState({
    file: "",
    url: "",
    loading: false
  });
  const [img3, setImg3] = useState({
    file: "",
    url: "",
    loading: false
  });
  const [img4, setImg4] = useState({
    file: "",
    url: "",
    loading: false
  });


  const [color, setColor] = useState("#fff");
  const [product, setProduct] = useState({
    title: "",
    description: "",
    categories: [],
    size: "",
    status: "",
    price: ""
  })

  const [error, setError] = useState([])

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


  const handleProductAdd = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_BASEURL + '/api/product/add';
      let id = e.target.id
      console.log(e.target.id);
      const response = await axios.post(url, {
        title: product.title,
        description: product.description,
        img: [img1.url, img2.url, img3.url, img3.url],
        price: product.price,
        size: product.size,
        categories: product.categories,
        color: color,
        status: id == 'add' ? "published" : 'draft'
      }, {
        headers: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzkyNWEzZmNlNmU3YmNkOWVhODVhYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTA3NjU0MH0.ZBYiFrrGIaBbevVrX62RZw8Q03wHwmxllhwEVoPWSu0'
        }
      })
      console.log(response)
      setAlert({
        status: true,
        message: "product Added Successfully"
      })
      setTimeout(()=>{
        setAlert({
          status: false,
          message: ""
        })
      },5000)

    } catch (error) {
      console.log(error.response.data.errors)
      let errors = error.response.data.errors;
      // Convert object to array of key-value pairs
      const keyValueArray = Object.entries(errors);
      console.log(keyValueArray)
      keyValueArray.map((a)=>{
        console.log(a[1].message);
      })
      // const transformedObject = {};
      // for (const key in errors) {
      //   transformedObject[key] = errors[key] + '_transformed';
      // }
      // console.log(transformedObject)


    }


  }

  function handleCategories(e) {
    let cat = e.target.value.split(',')
    setProduct({ ...product, categories: cat });
  }

  const getImage = (e) => {
    console.log(e.target.id.split('-')[2])
    let imageOrder = e.target.id.split('-')[2];
    if (imageOrder == 1) {
      setImg1({ ...img1, file: e.target.files[0] });
      handleImageUpload(e.target.files[0], 1)
    }
    else if (imageOrder == 2) {
      setImg2({ ...img2, file: e.target.files[0] });
      handleImageUpload(e.target.files[0], 2)
    } else if (imageOrder == 3) {
      setImg3({ ...img3, file: e.target.files[0] });
      handleImageUpload(e.target.files[0], 3)
    } else {
      setImg4({ ...img4, file: e.target.files[0] });
      handleImageUpload(e.target.files[0], 4)
    }

  }

  const handleImageUpload = (image, imageOrder) => {
    console.log(image)
    console.log(imageOrder)
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
            imageOrder == 1 && setImg1({ ...img1, loading: true })
            imageOrder == 2 && setImg2({ ...img2, loading: true })
            imageOrder == 3 && setImg3({ ...img3, loading: true })
            imageOrder == 4 && setImg4({ ...img4, loading: true })
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
          imageOrder == 1 && setImg1({ ...img1, url: downloadURL, loading: false })
          imageOrder == 2 && setImg2({ ...img2, url: downloadURL, loading: false })
          imageOrder == 3 && setImg3({ ...img3, url: downloadURL, loading: false })
          imageOrder == 4 && setImg4({ ...img4, url: downloadURL, loading: false })
        });
      }
    );
  }

  // useEffect(() => {
  //   img1.file && handleImageUpload(img1.file, 1);
  // }, [img1.file])

  // useEffect(() => {
  //   img2.file && handleImageUpload(img2.file, 2);
  // }, [img2.file])

  // useEffect(() => {
  //   img3.file && handleImageUpload(img3.file);
  // }, [img3.file])

  // useEffect(() => {
  //   img4.file && handleImageUpload(img4.file);
  // }, [img4.file])


  return (
   
    <form onSubmit={handleProductAdd} className='flex gap-4 flex-wrap lg:flex-nowrap '>
      
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
                  img1.url ? <div className="image h-full w-full">
                    <RxCross2 onClick={() => setImg1({ ...img1, url: "", file: "" })} className='absolute text-3xl hover:cursor-pointer text-white bg-black rounded-full' />
                    <img src={img1.url} className='h-full w-full' alt="thumbnail" />
                  </div> : img1.loading ?

                    <div role="status" class="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                      <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                      </div>

                      <span class="sr-only">Loading...</span>
                    </div>

                    :
                    <label for="product-image-1" class="flex flex-col px-10 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-center text-gray-500 dark:text-gray-400">Thumbnail Image</p>
                      </div>
                      <input onChange={getImage} id="product-image-1" accept='image/*' type="file" class="hidden" />
                    </label>
                }

              </div>

              <div id="small-images" className='flex flex-wrap w-28 gap-y-1'>
                <div class="flex items-center justify-center w-full h-[125px]">
                  {
                    img2.url ? <div className="image h-full w-full">
                      <RxCross2 onClick={() => setImg2({ ...img2, url: "", file: "" })} className='absolute text-3xl hover:cursor-pointer text-white bg-black rounded-full' />
                      <img src={img2.url} className='h-full w-full' alt="thumbnail" />
                    </div> : img2.loading ?

                      <div role="status" class="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>

                        <span class="sr-only">Loading...</span>
                      </div>

                      :
                      <label for="product-image-2" class="flex flex-col items-center justify-center w-full h-[125px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p class="mb-2 text-[8px] text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-[8px] text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onChange={getImage} id="product-image-2" accept='image/*' type="file" class="hidden" />
                      </label>
                  }

                </div>

                <div class="flex items-center justify-center w-full ">
                  {
                    img3.url ? <div className="image h-full w-full">
                      <RxCross2 onClick={() => setImg3({ ...img3, url: "", file: "" })} className='absolute text-3xl hover:cursor-pointer text-white bg-black rounded-full' />
                      <img src={img3.url} className='h-full w-full' alt="thumbnail" />
                    </div> : img3.loading ?

                      <div role="status" class="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>

                        <span class="sr-only">Loading...</span>
                      </div>

                      :
                      <label for="product-image-3" class="flex flex-col items-center justify-center w-full h-[125px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p class="mb-2 text-[8px] text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-[8px] text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onChange={getImage} id="product-image-3" accept='image/*' type="file" class="hidden" />
                      </label>
                  }

                </div>
              </div>
            </div>

            <div class="flex items-center justify-center w-60 h-64">
              {
                img4.url ? <div className="image h-full w-full">
                  <RxCross2 onClick={() => setImg4({ ...img4, url: "", file: "" })} className='absolute text-3xl hover:cursor-pointer text-white bg-black rounded-full' />
                  <Img src={img4.url} className='h-full w-full' alt="thumbnail" />
                </div> : img4.loading ?

                  <div role="status" class="space-y-8 w-full h-full animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                    <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
                      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>

                    <span class="sr-only">Loading...</span>
                  </div>

                  :
                  <label for="product-image-4" class="flex flex-col px-10 items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p class="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input onChange={getImage} id="product-image-4" type="file" accept='image/*' class="hidden" />
                  </label>
              }

            </div>

          </div>


        </div>

        <div id="color-input" className='flex flex-col gap-2'>
          <label htmlFor="product-name" className=' text-gray-800 font-semibold'>Color</label>
          <ColorPicker color={color} setColor={setColor} />

        </div>

        <div id="bottom-button" className='flex gap-5'>
          <button id='add' onClick={handleProductAdd} className='bg-primary-btn text-white px-4 py-2 rounded'>Add Product</button>
          <button id='saved' onClick={handleProductAdd} className='bg-primary-btn text-white px-4 py-2 rounded'>Save Product</button>
          <button className='bg-primary-btn text-white px-4 py-2 rounded'>Schedule</button>
        </div>
      </div>
    </form>
  )
}
