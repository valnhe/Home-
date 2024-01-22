function SortBy({setSortby}){

    const handleSortBy = (e) => {
        setSortby(e.target.value);
    }

    return (
        <div className="bg-[#E5E7EB] py-[12px] px-[24px] rounded-full text-[#0E1325] flex justify-center items-center gap-1">
            <span className="font-semibold:">Sort by:</span>
            <label className="flex gap-1 justify-center items-center">
                <select name="select" id="select" className="appearance-none bg-transparent font-bold" onChange={handleSortBy}>
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                </select>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9L12 15L6 9" stroke="#0E1325" strokeWidth="2"/>
                </svg>
            </label>

        </div>
    )
} export default SortBy;