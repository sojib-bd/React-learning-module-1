

const productList = [
    {id: 1, productName: "T-shirt", price: 500},
    {id: 2, productName: "Jeans", price: 700},
    {id: 3, productName: "Shoe", price: 3000},
];

export default function RenderList () {
    const products = productList.map((product)=>( 
        <li key={product.id}>{product.productName} - <span>{product.price} BDT</span></li>
    ))

    return (
        <>
        <h1>Rendering List</h1>
        <ul>{products}</ul>
        </>
    )
}
