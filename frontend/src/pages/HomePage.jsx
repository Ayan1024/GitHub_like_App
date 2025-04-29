import Profileinfo from "../components/Profileinfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import Sortrepos from "../components/Sortrepos";
import Spinner from "../components/Spinner";

const HomePage = () => {
	return (
		<div className='m-4'>
			<Search />
			<Sortrepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
			<Profileinfo />
				<Repos />
				<Spinner />
			</div>
		</div>
	);
};
export default HomePage;