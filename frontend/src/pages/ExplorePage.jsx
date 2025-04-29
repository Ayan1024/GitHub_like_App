import React from 'react'

function ExplorePage() {
  return (
    <div className='px-4 '>
      <div className="bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-900
		 text-white max-w-2xl mx-auto rounded-md p-4  border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-4">Explore populer Repositories</h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
        <div className='flex flex-wrap gap-2 my-2 justify-center '>
					<img
						src='/javascript.svg'
						alt='JavaScript ogo'
						className='h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800 '
						// onClick={() => exploreRepos("javascript")}
					/>
					<img
						src='/typescript.svg'
						alt='TypeScript logo'
						className='h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800'
						// onClick={() => exploreRepos("typescript")}
					/>
					<img
						src='/c++.svg'
						alt='C++ logo'
						className='h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800'
						// onClick={() => exploreRepos("c++")}
					/>
					<img
						src='/python.svg'
						alt='Python logo'
						className='h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800'
						// onClick={() => exploreRepos("python")}
					/>
					<img
						src='/java.svg'
						alt='Java logo'
						className='h-11 sm:h-20 cursor-pointer hover:bg-gray-600/10 border border-gray-800'
						// onClick={() => exploreRepos("java")}
					/>
				</div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
