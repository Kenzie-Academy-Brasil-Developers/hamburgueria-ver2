import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import { ProductCard } from "../ProductCard"


export function ProductFeed(){
    const { products } = useContext(CartContext)
    
    return(
        <ul>
            {products?.map(({category, id, img, name, price}) => 
                <ProductCard name={name} category={category} id={id} img={img} price={price} key={id}/>
            )}
        </ul>
    )
}