import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@/utils/useTheme.tsx'
import Dropdown from './themeDropdown.tsx'
import HamburgerMenu from './hamburger.tsx'
import logoDark from '/images/logo-dark.svg'
import logoLight from '/images/logo-light.svg'
import logoMobileLight from '/images/logoMobile-light.svg'
import logoMobileDark from '/images/logoMobile-dark.svg'

function Navbar() {
	const { theme, setTheme, actualTheme } = useTheme()
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 768)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	function handleThemeSelect(option: string) {
		option = option.toLowerCase()
		;(option === 'light' || option === 'dark' || option === 'system') && setTheme(option)
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
			<nav className="pt-3 px-5 md:px-10 md:py-3 lg:px-28 bg-[#f2f2f2] dark:bg-[#282828] shadow-lg dark:shadow-gray-900 sticky top-0 z-[1000]">
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
					<div className="hidden md:flex items-center">
						<Dropdown
							options={['Light', 'Dark', 'System']}
							onSelect={handleThemeSelect}
							className="px-3"
							defaultOption={theme}
						/>
						<div>
							<a
								onClick={scrollToAbout}
								className="px-3 text-lg cursor-pointer font-semibold hover:text-[#6986C2] dark:text-[#f2f2f2] dark:hover:text-[#6986C2]"
							>
								About
							</a>
						</div>
						<div>
							<Link to={'/login'}>
								<p className="pl-3 pr-5 text-lg cursor-pointer font-semibold hover:text-[#6986C2] dark:text-[#f2f2f2] dark:hover:text-[#6986C2]">
									Sign In
								</p>
							</Link>
						</div>
						<div>
							<Link to={'/register'}>
								<p className="px-5 py-2 text-white text-lg font-semibold bg-[#6986C2] rounded-lg hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
									Sign Up
								</p>
							</Link>
						</div>
					</div>
					<div className='md:hidden'>
						<HamburgerMenu />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
