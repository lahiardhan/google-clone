import PaginationButton from "../../atoms/PaginationButton";

function SearchResults({ data }) {
	console.log(data);

	return (
		<div className="mx-auto w-full px-3 sm:px-[5%] md:px-[14%] lg:pl-52">
			<p className="text-gray-600 text-md mb-5 mt-3">
				About {data.total} results 
            ({data.ts} seconds)
			</p>

         {data.results?.map((item, index) => (
            <div key={index} className="max-w-xl mb-8">
               <div className="group">
                  <a href={item.link} className="text-sm text-gray-500 line-clamp-1">
                     {item.link.length > 30 ? item.link.substring(0, 30) : item.link}
                  </a>
                  <a href={item.link}>
                     <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                        {item.title}
                     </h2>
                  </a>
               </div>
               <p className="line-clamp-2">{item.description}</p>
            </div>
         ))}

         <PaginationButton />
		</div>
	);
}

export default SearchResults;
