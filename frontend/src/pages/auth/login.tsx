import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '@/components/spinner'
import loginImage from '/images/Login-bro.svg'

function LoginPage() {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
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
							src={loginImage}
							className="w-full h-full object-cover mx-auto"
							onLoad={handleImageLoad}
						/>
					</div>
				</div>

				<div className="bg-[#f2f2f2] dark:bg-[#282828] w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
					<div className="w-full h-100">
						<h1 className="text-xl dark:text-white md:text-2xl font-bold leading-tight mt-12">
							Log in to your account
						</h1>

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
									name="name"
									placeholder="Enter Username"
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="mt-4">
								<label className="block text-gray-700 dark:text-white"> Password </label>
								<input
									type="password"
									name="password"
									placeholder="Enter Password"
									minLength={8}
									className="w-full px-4 py-3 rounded-lg bg-[#e1e6f2] mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<Link to={'/dashboard'}
								className="w-full items-center justify-center flex bg-[#264480] hover:bg-[#031842] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-white font-semibold rounded-lg px-4 py-3 mt-6"
							>
								Log In
							</Link>
						</form>

						<hr className="my-6 border-gray-300 w-full" />
						<div className="mt-2 dark:text-white items-center flex">
							Don't have an account?
							<Link
								to={'/register'}
								className="text-blue-500 ml-1 hover:text-blue-700 font-semibold"
							>
								Sign in
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

export default LoginPage
