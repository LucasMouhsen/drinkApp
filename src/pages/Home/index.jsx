import DrinkDetailModal from "../../components/DrinkModal";
import DrinkRandom from "../../components/DrinkRandom";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";

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