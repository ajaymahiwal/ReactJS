import Product from "./Product.jsx";
import "./ProductList.css";

// function ProductList(){
//     return(
//         <div className="ProductList bdr">
//         <Product title="ABC" subTitle="abc"/>
//         <Product title="EFG" subTitle="efg"/>
//         <Product title="XYZ" subTitle="xyz"/>
//         <Product title="GHI" subTitle="ghi"/>
//         <Product title="MNO" subTitle="mno"/>
//         </div>
//     );
// }

function ProductList() {
    return (
        <div className="ProductList">
            <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>
            <div className="ProductList-inner">
                <Product
                    title="Logitech MX Master 3S"
                    features={["8,000 DPI", "5 Programmable Buttons"]}
                    oldPrice={12999}
                    newPrice={9999}
                />
                <Product
                    title="Logitech MX Master 3S"
                    features={["8,000 DPI", "5 Programmable Buttons"]}
                    oldPrice={12999}
                    newPrice={9999}
                />
                <Product
                    title="Logitech MX Master 3S"
                    features={["8,000 DPI", "5 Programmable Buttons"]}
                    oldPrice={12999}
                    newPrice={9999}
                />
                <Product
                    title="Logitech MX Master 3S"
                    features={["8,000 DPI", "5 Programmable Buttons"]}
                    oldPrice={12999}
                    newPrice={9999}
                />
            </div>
        </div>
    );
}

export default ProductList;
