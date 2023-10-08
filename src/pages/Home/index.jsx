import DrinkDetailModal from "../../components/DrinkModal";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";
import DrinkRandom from "../../components/DrinkRandom";

export default function Home() {
    return (
        <main>
            <DrinkRandom/>
            <SearchForm />
            <DrinksList />
            <DrinkDetailModal />
        </main>
    )
}