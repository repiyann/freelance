import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import NavbarUser from '@/components/navbarUser'
import Spinner from '@/components/spinner'
import homeImage from '/images/home-image.svg'

function Dashboard() {
	const [loading, setLoading] = useState(true)
	const [imageLoaded, setImageLoaded] = useState(false)

	function handleImageLoad() {
		setImageLoaded(true)
	}

	useEffect(() => {
		imageLoaded && setLoading(false)
	}, [imageLoaded])
	return (
		<>
			{loading && <Spinner />}
			<NavbarUser />
			<section id="home">
				<div className="px-5 py-20 flex bg-[#f2f2f2] dark:bg-[#282828] justify-center items-center md:pt-5 md:pb-12 md:px-10 lg:px-[132px] md:grid md:grid-cols-2 md:gap-10">
					<div className="col-start-1 col-end-1 m-auto">
						<h1 className="text-5xl font-medium mb-5 dark:text-white text-[#6986C2]">
							<span style={{ color: '#264480', fontWeight: 700 }}> YakinKerja </span> — Freelancing Made Easy
						</h1>
						<div className="relative">
							<input
								type="text"
								placeholder="Search for services..."
								className="px-3 py-2 mb-5 w-full text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							/>
							<button
								type="submit"
								className="absolute bg-[#264480] pt-[14px] px-4 right-0 top-0 rounded-r-lg"
							>
								<FontAwesomeIcon
									icon={faSearch}
									className="mb-3"
									style={{ color: '#f2f2f2' }}
								/>
							</button>
						</div>
						<h2 className="font-medium text-lg dark:text-white text-[#6986C2]">Trending Services</h2>
						<div className="flex">
							<a
								href=""
								className="px-3 py-1 text-white text-lg font-semibold bg-[#6986C2] rounded-3xl hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								Designer
							</a>
							<a
								href=""
								className="px-3 py-1 mx-3 text-white text-lg font-semibold bg-[#6986C2] rounded-3xl hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								Programmer
							</a>
							<a
								href=""
								className="px-3 py-1 text-white text-lg font-semibold bg-[#6986C2] rounded-3xl hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								Writter
							</a>
						</div>
					</div>
					<div className="col-start-2 col-end-2">
						<img
							src={homeImage}
							onLoad={handleImageLoad}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Dashboard
