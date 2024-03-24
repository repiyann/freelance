import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '@/components/spinner'
import registerImage from '/images/Sign-bro.svg'

function RegisterPage() {
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState(true)
	const [imageLoaded, setImageLoaded] = useState(false)

	function handleImageLoad() {
		setImageLoaded(true)
	}

	useEffect(() => {
		imageLoaded && setLoading(false)
	}, [imageLoaded])

	return (
		<>
			{loading && <Spinner />}
			<section className="flex flex-col md:flex-row h-screen items-center">
				<div className="bg-indigo-600 hidden lg:flex justify-center w-full md:w-1/2 xl:w-2/3 h-screen border-r-2 dark:border-black">
					<div className="flex items-center">
						<img
							src={registerImage}
              onLoad={handleImageLoad}
							className="w-full h-3/4 object-cover mx-auto"
						/>
					</div>
				</div>

				<div className="bg-[#f2f2f2] dark:bg-[#282828] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
					<div className="w-full h-100">
						<h1 className="text-xl dark:text-white md:text-2xl font-bold leading-tight mt-12">Create your account</h1>

						<form
							className="mt-6"
							method="POST"
							onSubmit={(e) => {
								e.preventDefault()
							}}
						>
							<div>
								<label className="block text-gray-700 dark:text-white"> Username </label>
								<input
									type="text"
									placeholder="Enter Username"
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="mt-4">
								<label className="block text-gray-700 dark:text-white"> Email Address </label>
								<input
									type="email"
									placeholder="Enter Email Address"
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mt-4">
								<label className="block text-gray-700 dark:text-white"> Password </label>
								<input
									type="password"
									placeholder="Enter Password"
									minLength={8}
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="mt-4">
								<label className="block text-gray-700 dark:text-white"> Confirm Password </label>
								<input
									type="password"
									placeholder="Enter Confirm Password"
									minLength={8}
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>
							<Link to={'/login'}
								className="w-full flex items-center justify-center bg-[#264480] hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-white font-semibold rounded-lg px-4 py-3 mt-6"
							>
								Sign In
							</Link>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<div className="mt-2 dark:text-white items-center flex">
							Have an account?
							<Link to={'/login'}>
								<p className="text-blue-500 ml-1 hover:text-blue-700 font-semibold">Log in</p>
							</Link>
						</div>
					</div>
				</div>

				<nav className="absolute top-0 left-0 right-0 p-4 flex justify-between w-full">
					<Link
						to={'/'}
						className="text-white bg-[#6986C2] md:bg-indigo-600 px-4 py-2 rounded-lg"
					>
						Back
					</Link>
				</nav>
			</section>
		</>
	)
}

export default RegisterPage
