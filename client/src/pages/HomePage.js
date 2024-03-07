import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  // const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [checked, setChecked] = useState([]);
  // const [radio, setRadio] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  return (
    <Layout title={"All Products -Best offers"}>

      <div className="row">
        <div className="col-md-3">
          <h6 className="text-center">Filter By Category</h6>

        </div>
        <div className="col-md-9">
          <h1 className="text-center"> All Products</h1>
          </div>?
      </div>
       
    </Layout>
  );
};

export default HomePage