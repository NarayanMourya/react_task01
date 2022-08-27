import React, {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const [productName,setProductName] = useState('');
    const [price,setProductPrice] = useState('');
    const [searchText,setSearchText] = useState('');
    const [products,setProducts] = useState([]);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    const handleAddProduct = () =>{
        if (!productName || !price || products.filter(product => product.productName === productName).length){
            return;
        }
        setProducts((prevProducts) => [...prevProducts,{id:prevProducts.length + 1,productName,price}]);
        setProductName('');
        setProductPrice('');

    }
    const handleDeleteProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id))
    }

    useEffect(() => {
        if(!localStorage.getItem('token')) navigate('/')
    },[localStorage.getItem('token')])

    const filteredProducts = products.filter(product => product.productName.toLowerCase().includes(searchText.toLowerCase()));

    return(
        <div className="container text-center bg-light">

<div className="mt-4">
                
                <button className="  mx-5 d-flex justify-content-end " onClick={handleLogout}>Logout</button>
            </div>
            <h1 className="mt-2 ">HOME PAGE</h1>
           
            <div>
                <div className="mt-4 d-flex justify-content-center">
                   <h4 className="p-2">Product:</h4>  <input  className="form-control w-25 " type="text" value={productName} onChange = {(e) => setProductName(e.target.value) } />
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <h4 className="p-2">Price:</h4> <input className="form-control w-25" type="number" value={price} onChange = {(e) => setProductPrice(e.target.value)}  />
                </div >
                <button className="mt-4 w-25" onClick={handleAddProduct}>Add</button>
            </div>
            <div className="mt-4">
                <div >Search:</div>
                <input type="text" className="form-control w-25 mx-auto" value={searchText} onChange={e => setSearchText(e.target.value) } />
            </div>
            <div>
            <div>
					{filteredProducts.length > 0 ? filteredProducts.map(product => (
						<div key={product.id}>
							<div>Product Name: {product.productName}</div>
							<div className=" w-25 m-auto ">Price: {product.price}</ div>
							<button className="d-flex m-auto" onClick={() => handleDeleteProduct(product.id)}>❌</button>
						</div>
					)): 'No Product Found'}
                    
				</div>
            </div>
           
        </div>

    )
}
export default Homepage;