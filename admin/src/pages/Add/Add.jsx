import React, { useState } from 'react';
import './Add.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminAdd = () => {
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
    formData.append('image', image);

    try {
      const cloudinaryResponse = await axios.post(`http://localhost:5000/api/upload`, formData);
      const imageUrl = cloudinaryResponse.data.url;

      const productData = {
        ...data,
        image: imageUrl,
        price: Number(data.price)
      };

      const response = await axios.post(`http://localhost:5000/api/food/add`, productData);

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
            <img src={!image ? 'path_to_your_placeholder_image' : URL.createObjectURL(image)} alt="Upload Preview" />
          </label>
        </div>
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
        </div>
        <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea name='description' onChange={onChangeHandler} value={data.description} rows={6} placeholder='Write content here' required />
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product category</p>
            <select name='category' onChange={onChangeHandler}>
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
            <input type="number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default AdminAdd;
