function CategoriesCard({img, title , setCategory, isActive}){
    return(
        <li className={ isActive ? "cursor-pointer text-[#0E1325] bg-[#FEBD2E] border rounded-lg border-[#FEBD2E] p-4" : "cursor-pointer border rounded-lg border-[#394150] p-4 bg-transparent"} onClick={() => setCategory(title)}>
            {title}
        </li>
    );
} export default CategoriesCard;