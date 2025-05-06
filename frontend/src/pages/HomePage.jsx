import toast from "react-hot-toast";
import Profileinfo from "../components/Profileinfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import Sortrepos from "../components/Sortrepos";
import Spinner from "../components/Spinner";
import { useState, useEffect, useCallback } from "react";


const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setsortType] = useState([]);

  const getUserProfileAndRepos = useCallback( async (username="Ayan1024") => {
    setLoading(true)
    setRepos(repos);
      onSort("recent")
    
  
    try {
      const res = await fetch (`http://localhost:3000/api/users/profile/${username}`);
      const {repos, userProfile} = await res.json();

      setUserProfile(userProfile);
      setRepos(repos);
	  
    return {userProfile, repos};
    } catch (error) {
      toast.error(error.message);
      return { userProfile: null, repos: [] };
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);
  
  const onSearch = async (e, username) => {
    e.preventDefault ();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

 const {userProfile,repos} = await getUserProfileAndRepos(username);
 if (userProfile?.message === "Not Found") {
  toast.error("User not found.");
  setLoading(false);
  return;
}

 setUserProfile(userProfile);
    setRepos(repos);

    if (repos.length === 0) {
      toast.error("No repositories found for this user.");
    } else {
      toast.success("Repositories found!");
    }
    setLoading(false);


  }

  const onSort = (sortType) => {
    if (sortType === "recent") {
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
    }
  else if (sortType === "stars") {
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
  else if (sortType === "forks") {
    repos.sort((a, b) => b.forks_count - a.forks_count);
  }
  setsortType(sortType);
  setRepos([...repos]); // Create a new array reference to trigger re-render
  }



  return (
    <div className='m-4'>
      <Search onSearch={onSearch} />
      {repos.length >0 &&<Sortrepos onSort={onSort} sortType={setsortType} />}

	  {loading ? (
  <div className="flex justify-center items-center w-full h-screen">
    <Spinner />
  </div>
) : (
  <div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
    {userProfile && <Profileinfo userProfile={userProfile} />}
    {<Repos repos={repos} sortType={sortType} />}
  </div>
)}

    </div>
  );
};

export default HomePage;
