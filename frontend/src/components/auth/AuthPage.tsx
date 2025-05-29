// components/auth/AuthPage.tsx
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthPageProps {
	onAuthSuccess: (user: { name: string; email: string }) => void;
}

export function AuthPage({ onAuthSuccess }: AuthPageProps) {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleLogin = async (email: string, password: string) => {
		setIsLoading(true);
		setError('');

		try {
			// Simulate API call

			await new Promise(resolve => setTimeout(resolve, 1000));

			if (email === 'demo@example.com' && password === 'password') {
				onAuthSuccess({name: 'Demo User', email});
			} else {
				throw new Error('Invalid credentials');
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Login failed');
		} finally {
			setIsLoading(false);
		}
	};

	const handleRegister = async (name: string, email: string) => {
		setIsLoading(true);
		setError('');

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));

			// Mock registration - replace with your actual auth logic
			onAuthSuccess({name, email});
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Registration failed');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{isLogin ? (
					<LoginForm
						onLogin={handleLogin}
						onSwitchToRegister={() => setIsLogin(false)}
						isLoading={isLoading}
						error={error}
					/>
				) : (
					<RegisterForm
						onRegister={handleRegister}
						onSwitchToLogin={() => setIsLogin(true)}
						isLoading={isLoading}
						error={error}
					/>
				)}
			</div>
		</div>
	);
}