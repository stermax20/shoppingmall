import { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
// import { useProductContext } from "../contexts/ProductContext"

type ProductType = {
    id: number;
    name: string;
    explanation: string;
    price: number
}

function ProductPage() {
    const {productId} = useParams<{productId: string}>()
    // const [products] = useProductContext()
    const [product, setProduct] = useState<ProductType | null>(null)
    
    useEffect(() => {
        fetch(`/product/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data.product))
    }, [productId])

    // const foundProduct = products.find((product) => 
    //     product.id === parseInt(productId!, 10)
    // )

    if( !product ) {
        return <h1>찾으시는 상품이 없습니다.</h1>
    }
    
    return (
        <div>
            <h1>{product?.name}</h1>
            <p>{product?.explanation}</p>
            <span>{product?.price}</span>
        </div>
    )
}

export default ProductPage