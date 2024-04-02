import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import NavbarUser from '@/components/navbarUser'
import coding from '/images/coding-bro.svg'
import designer from '/images/Designer-bro.svg'
import writer from '/images/Novelist-bro.svg'
import video from '/images/Video-bro.svg'
import threeD from '/images/3d-bro.svg'
import { useState } from 'react'

function Dashboard() {
	const imagesWithDescriptions = [
		{ imageUrl: coding, description: 'Programmer' },
		{ imageUrl: designer, description: 'UI/UX Designer' },
		{ imageUrl: writer, description: 'Writter' },
		{ imageUrl: video, description: 'Video Editor' },
		{ imageUrl: threeD, description: '3D Editor' }
	]

	const [images] = useState(imagesWithDescriptions)
	return (
		<>
			<NavbarUser />
			<section id="home">
				<div className="px-5 py-20 flex bg-[#f2f2f2] dark:bg-[#282828] justify-center items-center md:pt-5 md:pb-12 md:px-10 lg:px-[132px]">
					<div className="flex-col items-start w-full">
						<div className="bg-[#3333] p-32 rounded-lg"></div>
						<div className="py-5">
							<h3 className="text-lg font-semibold">Popular Services</h3>
							<div className="grid grid-cols-3 md:gap-10 gap-2 pt-2">
								{['Mobile Developer', 'Web Developer', 'Writer'].map((category, i) => (
									<div
										className={`col-start-${i + 1} col-end-${i + 2}`}
										key={i}
									>
										<div className="bg-[#3333] px-5 py-2 rounded-lg">
											<p className="flex items-center justify-center text-center text-sm md:text-base min-h-[40px] md:min-h-0">{category}</p>
										</div>
									</div>
								))}
							</div>
							<div className="grid grid-cols-3 md:gap-10 gap-2 pt-3">
								{['3D Designer', 'UI/UX Designer', 'Video Editor'].map((category, i) => (
									<div
										className={`col-start-${i + 1} col-end-${i + 2}`}
										key={i}
									>
										<div className="bg-[#3333] px-5 py-2 rounded-lg">
											<p className="text-center">{category}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						{['Mobile Development', 'Web Development', 'Writer', 'UI/UX Designer', '3D Designer', 'Video Editor'].map(
							(category, i) => (
								<div
									className="py-5"
									key={i}
								>
									<div className="flex justify-between px-2 md:px-0">
										<h3 className="text-lg font-semibold">{category}</h3>
										<h2 className="text-md">Show All</h2>
									</div>
									<div className="md:flex md:flex-wrap hidden">
										{images.map((image, index) => (
											<div
												key={index}
												className="pt-1 px-2 md:basis-1/2 lg:basis-1/5"
											>
												<Card className="dark:bg-[#0c0c0c33]">
													<CardContent className="flex flex-col aspect-square items-center justify-center p-6">
														<img
															src={image.imageUrl}
															alt={`Image ${index + 1}`}
															className="w-full h-full object-cover"
														/>
														<h5 className="my-4 text-xl font-semibold">{image.description}</h5>
													</CardContent>
												</Card>
											</div>
										))}
									</div>
									<Carousel
										opts={{
											align: 'start',
											loop: true
										}}
										className="w-full block md:hidden"
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
																<h5 className="my-4 text-xl font-semibold">{image.description}</h5>
															</CardContent>
														</Card>
													</div>
												</CarouselItem>
											))}
										</CarouselContent>
									</Carousel>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</>
	)
}

export default Dashboard
