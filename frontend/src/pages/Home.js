import { Col, Row } from "react-bootstrap";
import Product from "../components/Product/Product";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from '../counterSlice'

const Home = () => {
  const dispatch = useDispatch()
  const postList = useSelector( state => state.post.postList )
  useEffect(() =>{
      dispatch(fetchPosts())  
  })
  return (
    <div>
         <Row>
          {postList.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4} className="my-4">
                <Product product={item} />
              </Col>
            );
          })} 
          </Row>

       
    </div>
  );
};
export default Home;
