import { useState } from "react";
import { Link } from 'react-router-dom'
import { ProductType } from "../../types";

interface ProductItemProps {
    product: ProductType;
    onDelete: (id: number) => void;
    onUpdate: (product: ProductType) => void;
}

const ProductItem = ({product, onDelete, onUpdate}: ProductItemProps) => {
    const {id, name, price, explanation} = product
    const [isEditMode, setIsEditMode] = useState(false)
    const [editName, setEditName] = useState(product.name)
    const [editExplanation, setEditExplanation] = useState(product.explanation)
    const [editPrice, setEditPrice] = useState(product.price)
  
    return (
      <div>
        <div>{id}</div>
        <div>
          <Link to={`/${id}`}>{name}</Link>
        </div>
        <div>{price}</div>
        <div>{explanation}</div>
  
        <button type='button' onClick={() => onDelete(id)}>
          삭제하기
        </button>
        <button type='button' onClick={() => setIsEditMode((prev) => !prev)}>
          수정하기
        </button>
  
        {isEditMode && (
          <form 
            onSubmit={(event) => {
              event.preventDefault()
              onUpdate({
                id,
                name: editName,
                explanation: editExplanation,
                price: editPrice
              })
            }}>
            <input 
              value={editName}
              onChange={(event) => setEditName(event.target.value)}
              type="text" placeholder='상품이름' />
            <input 
              value={editExplanation}
              onChange={(event) => setEditExplanation(event.target.value)}
              type="text" placeholder='상품설명' />
            <input 
              value={editPrice}
              onChange={(event) => setEditPrice(parseInt(event.target.value))}
              type="number" placeholder='상품가격' />
            <input type="submit" value='상품수정하기' />
          </form>
        )}
      </div>
    )
  }

  export default ProductItem