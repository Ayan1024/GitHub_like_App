import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Spinner from '../components/Spinner'
import Repos from '../components/Repos'

function ExplorePage() {
	const [loading, setloading] = useState(false)
	const [repos, setRepos] = useState([])
	const [selectedLanguage, setSelectedLanguage] = useState('')

	const exploreRepos = async (language) => {
		setloading(true)
		setRepos([])

		try {
			const res = await fetch(
				`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`, {
					headers: {
						Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
						Accept: 'application/vnd.github.v3+json',
					},
				}
			)
			const data = await res.json()
			setRepos(data.items)
		} catch (error) {
			toast.error('Error fetching repositories')
		} finally {
			setloading(false)
		}
	}

	const handleClick = (language) => {
		setSelectedLanguage(language)
		exploreRepos(language)
	}

	return (
		<div className="px-4">
			<div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-900 text-white max-w-2xl mx-auto rounded-md p-4 border border-gray-800 ">
				<h1 className="text-2xl font-bold text-center mb-4">Explore Popular Repositories</h1>
				<div className="flex flex-wrap gap-2 my-2 justify-center">
					<img
						src="/javascript.svg"
						alt="JavaScript logo"
						className="h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800"
						onClick={() => handleClick('javascript')}
					/>
					<img
						src="/typescript.svg"
						alt="TypeScript logo"
						className="h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800"
						onClick={() => handleClick('typescript')}
					/>
					<img
						src="/c++.svg"
						alt="C++ logo"
						className="h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800"
						onClick={() => handleClick('c++')}
					/>
					<img
						src="/python.svg"
						alt="Python logo"
						className="h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800"
						onClick={() => handleClick('python')}
					/>
					<img
						src="/java.svg"
						alt="Java logo"
						className="h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800"
						onClick={() => handleClick('java')}
					/>
				</div>

				{repos.length > 0 && (
					<h2 className="text-lg font-semibold text-center my-4">
						<span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full">
							{selectedLanguage.toUpperCase()}
						</span>
						Repositories
					</h2>
				)}
<div className="flex justify-center w-full">
				{loading ? <Spinner /> : repos.length >0 && <Repos repos={repos} />}</div>
			</div>
		</div>
	)
}

export default ExplorePage
