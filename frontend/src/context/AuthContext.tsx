// contexts/AuthContext.tsx
import { createContext, useContext, useState } from 'react';

interface User {
	name: string;
	email: string;
}

interface AuthContextType {
	user: User | null;
	login: (user: User) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	const login = (userData: User) => {
		setUser(userData);
		// You can also store in localStorage here if needed
		// localStorage.setItem('user', JSON.stringify(userData));
	};

	const logout = () => {
		setUser(null);
		// localStorage.removeItem('user');
	};

	const value = {
		user,
		login,
		logout,
		isAuthenticated: !!user,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}