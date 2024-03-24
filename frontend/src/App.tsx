import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import RegisterPage from './pages/auth/register'
import LoginPage from './pages/auth/login'
import Dashboard from './pages/dashboard'

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/register"
				element={<RegisterPage />}
			/>
			<Route
				path="/login"
				element={<LoginPage />}
			/>
			<Route
				path="/"
				element={<Dashboard />}
			/>
		</Routes>
	)
}

export default App
