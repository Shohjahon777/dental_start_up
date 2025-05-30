// components/auth/ProtectedRoute.tsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface ProtectedRouteProps {
	children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/auth" replace />;
	}

	return <>{children}</>;
}