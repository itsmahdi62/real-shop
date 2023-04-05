import { ListGroup, Col, Row, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "../counterSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = useSelector( state => state.post.postList[{id}] )
  useEffect(() =>{
      dispatch(fetchPosts())  
  })
  // const [product, setProduct] = useState({});
  // const { id } = useParams();
  // useEffect(() => {
  //   const getApi = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8000/api/products/${id}`
  //     );
  //     setProduct(response.data);
  //   };
  //   getApi();
  // });
  return (
    <div>
      <Link to="/" className="btn btn-check my-3">
        بازگشت به صفحه اصلی
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h3>help</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Link className="btn btn-check" to="/">
            افزودن به سبد خرید
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
