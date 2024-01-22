import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import CategoriesCard from "./CategoriesCard";

function Recipes() {
    const [actualCategory, setActualCategory] = useState("Dessert");
    const [recipes, setRecipes] = useState([]);
    const [categories, setCategories] = useState([]);

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
                <ul className="mt-[40px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[32px]">
                    {
                        recipes.map((recipe) => (
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