import React, { useEffect, useState } from "react";

function Admin(){
    const [watchData, setWatchData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/watches")
          .then((resp) => resp.json())
          .then((data) => setWatchData(data))
          .catch((err) => console.error(err));
      }, []);

      const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        price: 0,
        manufacturer: "",
        quantity: 0,
        rating: '',
      });
      function handleInputChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
      }
      function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/watches", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
      .then((response) => response.json())
      .then((data) => {
        setWatchData([...watchData, data]);
        setFormData({
          name: "",
          image: "",
          description: "",
          price: 0,
          manufacturer: "",
          quantity: 0,
          rating: 0,
        });
      })
      .catch((error) => console.error(error));
      }

      return(
        <div id="addProductForm-div">
            <form onSubmit={handleSubmit}>
                <h3>Add Product Form</h3>
                <br />
                <label htmlFor="watchName">Watch Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter watch name"
                />
                <label htmlFor="watchImage">Watch Image</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                />
                <label htmlFor="watchDescription">Watch Description</label>
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter watch description"
                />
                <label htmlFor="watchPrice">Watch Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter watch price"
                />
                <label htmlFor="watchManufacturer">Watch Manufacturer</label>
                <input
                    type="text"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleInputChange}
                    placeholder="Enter watch manufacturer"
                />
                <label htmlFor="watchQuantity">Watch Quantity</label>
                <input 
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Enter quantity in stock"
                />
                <label htmlFor="watchRating">Watch Rating</label>
                <input 
                type="text"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                placeholder="Enter watch rating"
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
      );
}

export default Admin;