import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../providers/CartContext";
import { UserContext } from "../../../providers/UserContext";
import { StyledSearch } from "./styles";
// import { ReactComponent as SearchImg } from "../../../Images/SearchBtn.svg"

interface IFilter{
  name: string;
  category: string;
}

export function SearchInput() {
  const { products } = useContext(UserContext);
  const { setFilteredProducts } = useContext(CartContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const SearchFiltered = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    

    const filtered = products.filter(
      ({ name, category }: IFilter) =>
        name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(SearchFiltered) ||
        category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(SearchFiltered)
    );
    search === "" || undefined
      ? setFilteredProducts(products)
      : setFilteredProducts(filtered);
  }, [search]);

  return (
    <StyledSearch action="submit" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(text) => setSearch(text.target.value)}
      />
      <button type="submit">       
        {/* <SearchImg className="search-img"/> */}
      </button>
    </StyledSearch>
  );
}
