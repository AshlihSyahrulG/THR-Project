import { Link } from "react-router-dom";

function Card({data}) {

  return (
<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 ml-10 mb-56">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Ashlih Syahrul Ghifari</a>
		</div>
	</div>
    <Link to={`/detail/${data.id}`}>
	<div>
		<img src={data.imgUrl} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{data.title}</h2>
		<p className="text-sm dark:text-gray-400">{data.description}</p>
	</div>
    </Link>

</div>
  );
}

export default Card;