import { ListGroup, Col, Row, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css"
// import { useDispatch,useSelector } from "react-redux";
// import { fetchPosts } from "../counterSlice";
import axios from 'axios'
const Product = () => {
  // const { id } = useParams();
  // const dispatch = useDispatch()
  // const product = useSelector( state => state.post.postList[{id}] )
  // useEffect(() =>{
  //     dispatch(fetchPosts())  
  // })
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data);
    };
    getApi();
  });
  return (
    <div className="one-product">
      <div>
      <Link to="/" className="btn btn-check ">
        بازگشت به صفحه اصلی
      </Link>
      </div>
        <div>
          <Image src={product.image} fluid />
        </div>
        <div className="description">
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <Link className="btn btn-check" to="/">
            افزودن به سبد خرید
          </Link>
        </div>
    </div>
  );
}

export default Product;
