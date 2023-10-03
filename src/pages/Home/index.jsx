import DrinkDetailModal from "../../components/DrinkModal";
import DrinkRandom from "../../components/DrinkRandom";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";

export default function Home (){
    return (
        <div>
            <DrinkRandom/>
            <SearchForm/>
            <DrinksList/>
            <DrinkDetailModal/>
        </div>
    )
}