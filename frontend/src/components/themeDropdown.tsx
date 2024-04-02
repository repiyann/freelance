import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

interface themeDropdownProps {
	options: string[]
	onSelect: (option: string) => void
	className?: string
	defaultOption?: string
}

function ThemeDropdown({ options, onSelect, className, defaultOption }: themeDropdownProps) {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)
	const [isOpen, setIsOpen] = useState(false)
	const [opened, setOpened] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		defaultOption && !selectedOption && opened && (setSelectedOption(defaultOption), onSelect(defaultOption))

		function handleClickOutside(event: MouseEvent) {
			dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && setIsOpen(false)
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [defaultOption, onSelect, selectedOption, opened])

	function handleOptionClick(option: string) {
		setSelectedOption(option)
		setIsOpen(false)
		onSelect(option)
		setOpened(false)
	}

	return (
		<div
			ref={dropdownRef}
			className={`${className || ''}`}
		>
			<div
				className="cursor-pointer text-black dark:text-white"
				onClick={() => {
					setIsOpen(!isOpen)
					setOpened(true)
				}}
			>
				{isOpen ? (
					<>
						<FontAwesomeIcon icon={defaultOption === 'dark' ? faMoon : defaultOption === 'light' ? faSun : faDisplay} />
					</>
				) : (
					<>
						<FontAwesomeIcon icon={defaultOption === 'dark' ? faMoon : defaultOption === 'light' ? faSun : faDisplay} />
					</>
				)}
			</div>
			{isOpen && (
				<div className="absolute -translate-x-[85px] z-10 bg-[#f2f2f2] dark:bg-[#282828] border dark:border-gray-500 shadow-lg rounded-lg">
					{options.map((option, index) => (
						<div
							key={index}
							className="hover:bg-[#d3d3d3] dark:hover:bg-[#333333] rounded-lg"
						>
							<button
								onClick={() => {
									handleOptionClick(option)
								}}
								className="px-4 text-black flex dark:text-white"
								disabled={selectedOption === option}
							>
								<FontAwesomeIcon
									className={`pt-1 ${option === 'Dark' ? 'pr-2 pl-1' : 'pr-2'}`}
									icon={option === 'Dark' ? faMoon : option === 'Light' ? faSun : faDisplay}
								/>
								{option}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default ThemeDropdown
