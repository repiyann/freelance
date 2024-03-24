import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Spinner from '@/components/spinner'
import Navbar from '@/components/navbar'
import homeImage from '/images/home-image.svg'
import aboutImage from '/images/about-image.svg'
import coding from '/images/coding-bro.svg'
import designer from '/images/Designer-bro.svg'
import writer from '/images/Novelist-bro.svg'
import video from '/images/Video-bro.svg'
import threeD from '/images/3d-bro.svg'

function Home() {
	const imagesWithDescriptions = [
		{ imageUrl: coding, description: 'Programmer' },
		{ imageUrl: designer, description: 'UI/UX Designer' },
		{ imageUrl: writer, description: 'Writter' },
		{ imageUrl: video, description: 'Video Editor' },
		{ imageUrl: threeD, description: '3D Editor' }
	]

	const [loading, setLoading] = useState(true)
	const [imageLoaded, setImageLoaded] = useState(false)
	const [images] = useState(imagesWithDescriptions)

	function handleImageLoad() {
		setImageLoaded(true)
	}

	useEffect(() => {
		imageLoaded && setLoading(false)
	}, [imageLoaded])

	return (
		<>
			{loading && <Spinner />}
			<Navbar />
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

			<section
				id="menu"
				className="pt-20 dark:bg-[#282828] bg-[#f2f2f2]"
			>
				<div className="px-5 z-[900] flex bg-[#f2f2f2] dark:bg-[#282828] justify-center flex-col items-center md:pt-5 md:pb-12 md:px-10 lg:px-[132px]">
					<h1 className="text-4xl mb-5 font-semibold text-center dark:text-white">Services</h1>
					<Carousel
						opts={{
							align: 'start',
							loop: true
						}}
						className="w-full lg:max-w-screen-lg"
					>
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-1/4"
								>
									<div className="p-1">
										<Card className="dark:bg-[#0c0c0c33]">
											<CardContent className="flex flex-col aspect-square items-center justify-center p-6">
												<img
													src={image.imageUrl}
													alt={`Image ${index + 1}`}
													className="w-full h-full object-cover"
												/>
												<h6 className="my-4 font-semibold">{image.description}</h6>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="hidden lg:flex" />
						<CarouselNext className="hidden lg:flex" />
					</Carousel>
				</div>
			</section>

			<section id="about">
				<div className="px-5 py-20 flex bg-[#f2f2f2] dark:bg-[#282828] justify-center items-center md:pt-5 md:pb-12 md:px-10 lg:px-[132px] md:grid md:grid-cols-2 md:gap-10">
					<div className="col-start-1 col-end-1 mt-5">
						<img
							src={aboutImage}
							onLoad={handleImageLoad}
						/>
					</div>
					<div className="col-start-2 col-end-2 m-auto">
						<h1 className="text-4xl mb-5 font-semibold dark:text-white">About us</h1>
						<h3 className="text-2xl mb-1 font-semibold dark:text-white">Why choose us?</h3>
						<br />
						<div className="text-justify">
							<p className="mb-1 dark:text-white">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ex animi fugit dignissimos quos. A
								corrupti voluptate similique laborum ratione libero molestias consequuntur facilis eos, nulla
								perspiciatis ab nam accusamus!
							</p>
							<br />
							<p className="dark:text-white">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ad accusantium placeat repudiandae quo
								corporis, vel minus distinctio consectetur obcaecati at aut, in non dolorem quos voluptatem maiores.
								Eum, vitae.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="footer">
				<div className="py-5 bg-[#6986C2] dark:bg-[#264480]">
					<div className="flex flex-col md:flex-row justify-center items-center">
						<h3 className="px-1 md:px-3 dark:text-white">Home</h3>
						<h3 className="px-1 md:px-3 dark:text-white">Experience</h3>
						<h3 className="px-1 md:px-3 dark:text-white">News</h3>
						<h3 className="px-1 md:px-3 dark:text-white">About Us</h3>
						<h3 className="px-1 md:px-3 dark:text-white">Jobs</h3>
						<h3 className="px-1 md:px-3 dark:text-white">Contact</h3>
					</div>
					<div className="flex pt-3 justify-center items-center">
						<h3 className="dark:text-white">
							Created by <a href="https://github.com/repiyann">@repiyann</a>
						</h3>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
