import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
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
							<div className="grid grid-cols-3 gap-10 pt-2">
								<div className="col-start-1 col-end-1">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
								<div className="col-start-2 col-end-2">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
								<div className="col-start-3 col-end-3">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-10 pt-3">
								<div className="col-start-1 col-end-1">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
								<div className="col-start-2 col-end-2">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
								<div className="col-start-3 col-end-3">
									<div className="bg-[#3333] px-5 py-2 rounded-lg">
										<p className="text-center">Programmer</p>
									</div>
								</div>
							</div>
						</div>
						<div className="py-5">
							<h3 className="text-lg font-semibold">Website Development</h3>
							<div className="px-[50px]">
								<Carousel
									opts={{
										align: 'start'
									}}
									className="w-full"
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
									<CarouselPrevious className="hidden lg:flex" />
									<CarouselNext className="hidden lg:flex" />
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Dashboard
