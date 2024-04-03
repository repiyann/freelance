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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { useTheme } from '@/utils/useTheme.tsx'
import Dropdown from './themeDropdown.tsx'

import logoDark from '/images/logo-dark.svg'
import logoLight from '/images/logo-light.svg'
import logoMobileLight from '/images/logoMobile-light.svg'
import logoMobileDark from '/images/logoMobile-dark.svg'

function Navbar() {
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

	function scrollToAbout() {
		const aboutSection = document.getElementById('about')
		aboutSection && aboutSection.scrollIntoView({ behavior: 'smooth' })
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
					<div className="hidden md:flex md:items-center">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<FontAwesomeIcon
									width={30}
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
						<a
							onClick={scrollToAbout}
							className="ml-4 mr-3 text-lg cursor-pointer font-semibold dark:text-[#f2f2f2] hover:text-[#6986C2] dark:hover:text-[#6986C2]"
						>
							About
						</a>
						<Link to={'/login'} className='ml-3 mr-5'>
							<p className="text-lg cursor-pointer font-semibold dark:text-[#f2f2f2] hover:text-[#6986C2] dark:hover:text-[#6986C2]">
								Sign In
							</p>
						</Link>
						<Link to={'/register'}>
							<p className="px-5 py-2 text-white text-lg font-semibold bg-[#6986C2] rounded-lg hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
								Sign Up
							</p>
						</Link>
					</div>
					<div className="md:hidden flex">
						<div className="pr-3 mt-[3px]">
							<Dropdown
								options={['Light', 'Dark', 'System']}
								onSelect={handleThemeSelect}
								className="px-3"
								defaultOption={theme}
							/>
						</div>
						<Sheet>
							<SheetTrigger>
								<FontAwesomeIcon
									icon={faBars}
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
												Home
											</a>
										</SheetClose>
									</SheetDescription>
									<SheetDescription>
										<SheetClose>
											<a
												className="text-lg"
												onClick={scrollToAbout}
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

export default Navbar
