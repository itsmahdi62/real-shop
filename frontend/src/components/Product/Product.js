import "./Product.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Product = ({product}) => {
    return (  
        <Card className="p-1 my-1 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
        </Link>      

        <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
                {product.name}
            </Card.Title>
        </Link>      
        <Link to={`/product/${product._id}`}>
            <Card.Text as="button" className="price">
                {product.price}
            </Card.Text>
        </Link>        
        </Card>
    )
}
  
export default Product;  
