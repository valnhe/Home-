function MealCard({img, title, url}) {
    return (
        <li className="bg-[#394050] px-[8px] pt-[8px] rounded-lg">
            <a href={`/meals/${url}`}>
                <img src={img} alt={title} className="rounded-md"/>
                <h3 className="my-[12px]">{title}</h3>
            </a>
        </li>
        
    );
} export default MealCard;  