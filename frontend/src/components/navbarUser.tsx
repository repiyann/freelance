import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose
} from '@/components/ui/sheet'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell, faMessage, faSun } from '@fortawesome/free-regular-svg-icons'
import { faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/utils/useTheme.tsx'

import logoDark from '/images/logo-dark.svg'
import logoLight from '/images/logo-light.svg'
import logoMobileLight from '/images/logoMobile-light.svg'
import logoMobileDark from '/images/logoMobile-dark.svg'

function NavbarUser() {
	const { theme, setTheme, actualTheme } = useTheme()
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
	const [shadow, setShadow] = useState(false)

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 768)
		}

		function handleScroll() {
			const show = window.scrollY > 0
			shadow !== show && setShadow(show)
		}

		window.addEventListener('resize', handleResize)
		document.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('resize', handleResize)
			document.removeEventListener('scroll', handleScroll)
		}
	}, [shadow])

	function handleThemeSelect(option: string) {
		option = option.toLowerCase();
		(option === 'light' || option === 'dark' || option === 'system') && setTheme(option)
	}

	function scrollToHome() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			<nav
				className={`pt-3 px-5 md:px-10 md:py-3 lg:px-28 bg-[#f2f2f2] dark:bg-[#282828] dark:shadow-gray-900 sticky top-0 z-50 ${
					shadow && 'shadow-md'
				}`}
			>
				<div className="flex justify-between pb-3 md:p-0">
					<a
						onClick={scrollToHome}
						className="flex items-center cursor-pointer"
					>
						<img
							src={
								isMobile
									? actualTheme === 'light'
										? logoMobileLight
										: logoMobileDark
									: actualTheme === 'light'
									? logoLight
									: logoDark
							}
							alt="logo YakinKerja"
						/>
					</a>
					<div className="hidden md:block md:relative md:pt-[2px]">
						<input
							type="text"
							placeholder="What service are you looking for?"
							className="px-3 w-[150px] lg:w-[700px] text-lg dark:bg-[#555555] rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						/>
						<button
							type="submit"
							className="absolute bg-[#264480] mt-[2px] pt-1 px-3 -right-[2px] top-0 rounded-r-md"
						>
							<FontAwesomeIcon
								icon={faSearch}
								className="mb-[2.5px]"
								style={{ color: '#f2f2f2' }}
							/>
						</button>
					</div>
					<div className="hidden md:flex md:items-center">
						<DropdownMenu>
							<DropdownMenuTrigger className="mx-3">
								<FontAwesomeIcon
									width={20}
									icon={theme === 'dark' ? faMoon : theme === 'light' ? faSun : faDisplay}
								/>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								{['Light', 'Dark', 'System'].map((option, index) => (
									<DropdownMenuItem
										onSelect={() => handleThemeSelect(option)}
										key={index}
									>
										<FontAwesomeIcon
											className={`${option === 'Dark' ? 'pr-2 pt-[2px] pl-1' : 'pr-2'}`}
											icon={option === 'Dark' ? faMoon : option === 'Light' ? faSun : faDisplay}
										/>
										{option}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faBell}
								size="lg"
							/>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<FontAwesomeIcon
										icon={faMessage}
										size="lg"
									/>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Notification</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Notification 1</DropdownMenuItem>
									<DropdownMenuItem>Notification 2</DropdownMenuItem>
									<DropdownMenuItem>Notification 3</DropdownMenuItem>
									<DropdownMenuItem>Notification 4</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faCartShopping}
								size="lg"
							/>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<FontAwesomeIcon
										icon={faUser}
										size="lg"
									/>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Profile</DropdownMenuItem>
									<DropdownMenuItem>Billing</DropdownMenuItem>
									<DropdownMenuItem>Setting</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					<div className="md:hidden flex">
						<div className="flex items-center">
							<FontAwesomeIcon
								icon={faSearch}
								className="px-4"
								size="lg"
							/>
						</div>
						<Sheet>
							<SheetTrigger>
								<FontAwesomeIcon
									icon={faUser}
									size="xl"
								/>
							</SheetTrigger>
							<SheetContent className="h-[210px] w-[200px] rounded-bl-lg">
								<SheetHeader>
									<SheetTitle>YakinKerja</SheetTitle>
									<SheetDescription>
										<SheetClose>
											<a
												className="text-lg"
												onClick={scrollToHome}
											>
												Profile
											</a>
										</SheetClose>
									</SheetDescription>
									<SheetDescription>
										<SheetClose>
											<a
												className="text-lg"
												onClick={scrollToHome}
											>
												About
											</a>
										</SheetClose>
									</SheetDescription>
									<SheetDescription>
										<Link to={'/login'}>
											<p className="text-lg cursor-pointer hover:text-[#6986C2] dark:hover:text-[#6986C2]">Sign In</p>
										</Link>
									</SheetDescription>
									<SheetDescription>
										<Link to={'/register'}>
											<p className="text-lg cursor-pointer hover:text-[#6986C2] dark:hover:text-[#6986C2]">Sign Up</p>
										</Link>
									</SheetDescription>
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavbarUser
