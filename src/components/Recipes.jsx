import { useEffect, useState } from "react";

import MealCard from "./MealCard";
import CategoriesCard from "./CategoriesCard";
import SortBy from "./SortBy";
import Search from "./Search";

function Recipes() {
    const [actualCategory, setActualCategory] = useState("Dessert");
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

    const [sortby, setSortby] = useState("name");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${actualCategory}`)
            .then((response) => response.json())
            .then((data) => setRecipes(data.meals));
    }, [actualCategory]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
            .then((response) => response.json())
            .then((data) => setCategories(data.meals));
    }, []);

    const filterRecipes = recipes.filter((recipe) => recipe.strMeal.toLowerCase().includes(search.toLowerCase()));
    const sorteredRecipes = sortby === "name" ? filterRecipes.sort((a, b) => a.strMeal.localeCompare(b.strMeal)) : filterRecipes.sort((a, b) => a.idMeal - b.idMeal);

    return (
        <main className="grid gap-[32px] grid-cols-1 lg:grid-cols-4 mx-[64px] mb-24">
            <section className="col-span-1">
                <h2 className="my-[32px] font-bold text-[24px]">Categories</h2>
                <ul className="grid gap-[12px] grid-cols-2 lg:grid-cols-1">
                    {
                        categories.map((category) => (
                            <CategoriesCard
                                key={category.strCategory}
                                title={category.strCategory}
                                setCategory={setActualCategory}
                                isActive={category.strCategory === actualCategory}
                            />
                        ))
                    }
                </ul>
            </section>
            <section className="col-span-3">
                <div className="flex justify-between mt-[32px]">
                    <Search handleSearchBy={setSearch}/>
                    <SortBy setSortby={setSortby}/>
                </div>
                <ul className="mt-[40px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[32px]">
                    {
                        sorteredRecipes.map((recipe) => (
                            <MealCard
                                key={recipe.idMeal}
                                img={recipe.strMealThumb}
                                title={recipe.strMeal}
                                url={recipe.idMeal}
                            />
                        ))
                    }
                </ul>
                
            </section>
        </main>
    );
} export default Recipes;