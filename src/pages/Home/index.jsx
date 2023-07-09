import DrinkDetailModal from "../../components/DrinkModal/drinkModal";
import DrinksList from "../../components/DrinksList/drinkList";
import SearchForm from "../../components/SearchForm/searchForm";

export default function Home (){
    return (
        <div>
            <SearchForm/>
            <DrinksList/>
            <DrinkDetailModal/>
        </div>
    )
}