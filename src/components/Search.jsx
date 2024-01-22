import { useState } from "react";

function Search({handleSearchBy}){
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        handleSearchBy(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label className="flex items-center text-[#394150] border-[#394150] border-2 rounded-full gap-[12px]  py-[12px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[24px]">
                <circle cx="11" cy="11" r="7" stroke="#394150" strokeWidth="2"/>
                <path d="M20 20L17 17" stroke="#394150" strokeWidth="2" strokeLinecap="round"/>
             </svg>

            <input type="text" className="appearance-none bg-transparent placeholder:text-placeholdercolor placeholder:font-semibold" placeholder="Search recipes and more..."  onChange={handleChange} value={search}/>
            </label>    
        </form>
        
    )
} export default Search;