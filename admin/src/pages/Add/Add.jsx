import React, { useState } from 'react';
import './Add.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url } from '../../assets/assets';
import { useAuth } from '../../contexts/AuthContext';
const AdminAdd = () => {

  const { token } = useAuth()


  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error('Image not selected');
      return null;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'braaishack');

    try {
      const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/braaishack/image/upload', formData);
      const imageUrl = await cloudinaryResponse.data.secure_url;

      const productData = {
        ...data,
        image: imageUrl,
        price: Number(data.price)
      };

      const response = await axios.post('http://localhost:4000/api/food/add', productData, {
        headers: {
          authorization: token // Use Bearer scheme if needed
        }
      });
      

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          description: "",
          price: "",
          category: data.category
        });
        setImage(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Image upload failed');
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
          <label htmlFor="image">
            <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="Upload Preview" />
          </label>
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select name='category' onChange={onChangeHandler} >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product Price</p>
            <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
          </div>
        </div>
        <button type='submit' className='add-btn' >ADD</button>
      </form>
    </div>
  );
};

export default AdminAdd;
