import './Product.css';

const Product = ({ name }) => {
    return (
        <div className="Product">
            <div className="wrapper">
                {name}
            </div>
        </div>
    );
}

export default Product;