import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			menuRef.current && !menuRef.current.contains(event.target as Node) && setIsOpen(false)
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	function toggleMenu() {
		setIsOpen(!isOpen)
	}

	function scrollToHome() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
	}

	function scrollToAbout() {
		const aboutSection = document.getElementById('about')
		aboutSection && aboutSection.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
	}

	return (
		<div
			className="md:hidden"
			ref={menuRef}
		>
			<button
				className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
				onClick={toggleMenu}
			>
				<FontAwesomeIcon
					icon={faBars}
					size="xl"
				/>
			</button>
			{isOpen && (
				<div className="fixed top-[54px] left-0 w-full h-auto bg-[#f2f2f2] border-b shadow-sm">
					<ul className="flex flex-col items-center justify-center h-full">
						<li>
							<a
								onClick={scrollToHome}
								className="text-gray-900 py-2 hover:bg-gray-100 block w-full"
							>
								Home
							</a>
						</li>
						<li>
							<a
								onClick={scrollToAbout}
								className="text-gray-900 py-2 hover:bg-gray-100 block w-full"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-900 py-2 hover:bg-gray-100 block w-full"
							>
								Sign In
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-900 pt-2 p-4 hover:bg-gray-100 block w-full"
							>
								Sign Up
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default HamburgerMenu
