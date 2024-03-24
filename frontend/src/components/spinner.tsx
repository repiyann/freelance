import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Spinner() {
	return (
		<div className="flex justify-center items-center h-screen">
			<FontAwesomeIcon
				icon={faSpinner}
				spinPulse
				className="text-black dark:text-white"
				size="2xl"
			/>
		</div>
	)
}

export default Spinner
