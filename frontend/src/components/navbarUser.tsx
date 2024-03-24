import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/utils/useTheme.tsx'
import Dropdown from './themeDropdown.tsx'
import logoDark from '/images/logo-dark.svg'
import logoLight from '/images/logo-light.svg'
import logoMobileLight from '/images/logoMobile-light.svg'
import logoMobileDark from '/images/logoMobile-dark.svg'
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons'

function NavbarUser() {
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

	return (
		<>
			<nav className="pt-3 px-5 md:px-10 md:py-3 lg:px-28 bg-[#f2f2f2] dark:bg-[#282828] shadow-lg dark:shadow-gray-900 sticky top-0 z-50">
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
          <div className="relative pt-[2px]">
							<input
								type="text"
								placeholder="What service are you looking for?"
								className="px-3 w-[700px] text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							/>
							<button
								type="submit"
								className="absolute bg-[#264480] mt-[2px] pt-1 px-3 -right-[2px] top-0 rounded-r-md"
							>
								<FontAwesomeIcon
									icon={faSearch}
                  className='mb-[2.5px]'
									style={{ color: '#f2f2f2' }}
								/>
							</button>
						</div>
					<div className="hidden md:flex items-center">
						<Dropdown
							options={['Light', 'Dark', 'System']}
							onSelect={handleThemeSelect}
							className="px-3"
							defaultOption={theme}
						/>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faBell}
								size="lg"
							/>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faMessage}
								size="lg"
							/>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faCartShopping}
								size="lg"
							/>
						</div>
						<div className="px-3 py-1 hover:bg-[#3333] rounded-md">
							<FontAwesomeIcon
								icon={faUser}
								size="lg"
                className=''
							/>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavbarUser
