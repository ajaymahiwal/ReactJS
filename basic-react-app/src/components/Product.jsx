import "./Product.css";


// function Product({title,subTitle}){
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit, fugiat illum sunt debitis vero, sit suscipit qui ipsam dolor eius fuga amet vitae maxime numquam. Numquam eveniet nisi labore iure voluptatum nulla rem tempora quam vero ipsa doloremque, ducimus, praesentium maxime eius incidunt. Atque quas reprehenderit iste excepturi similique!</p>
//             <h2>{subTitle}</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam molestias earum cum, saepe ipsam asperiores consequuntur eos expedita ducimus aut voluptatem dicta corrupti eaque, magni, blanditiis temporibus? Exercitationem, veritatis.</p>
//         </div>
//     );
// }



function Product({title,features,oldPrice,newPrice}){
    let featuresList = features.map((f)=> <li>{f}</li>);
    return(
        <div className="pro-outer">
            <div className="pro-inner">
                <h1>{title}</h1>
                <ul>
                    {featuresList}
                </ul>
            </div>
            <del>{oldPrice}</del> <b>{newPrice}</b>
        </div>
    );
}

export default Product;