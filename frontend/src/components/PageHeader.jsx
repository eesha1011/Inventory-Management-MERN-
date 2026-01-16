import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const PageHeader = ({title, action}) => {
    const {setSearch} = useContext(SearchContext);

    useEffect(() => {
        setSearch("");
    }, []);
    
    return (
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">{title}</h2>
            {action}
        </div>
    )
}

export default PageHeader;