import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import { ProductCard } from "../ProductCard"
import { StyledProductFeed } from "./styles"

export function ProductFeed(){
    const { filteredProducts } = useContext(CartContext)
    return(
        <StyledProductFeed>
            {filteredProducts?.map(({category, id, img, name, price}) => 
                <ProductCard name={name} category={category} id={id} img={img} price={price} key={id}/>
            )}
        </StyledProductFeed>
    )
}