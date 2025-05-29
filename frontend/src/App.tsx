// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { AuthPage } from '@/components/auth/AuthPage';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import MockTest from "@/pages/MockTest.tsx";

// Navigation component with logout functionality
function Navigation() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-800">Medical Assessment</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
                    <button
                        onClick={logout}
                        className="text-sm text-red-600 hover:text-red-800 font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

// Main app content that requires authentication
function AuthenticatedApp() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
                <Route path="/test" element={<MockTest />} />
                <Route path="/" element={<Navigate to="/test" replace />} />
            </Routes>
        </div>
    );
}

// Auth wrapper component
function AuthWrapper() {
    const { isAuthenticated, login } = useAuth();

    if (!isAuthenticated) {
        return <AuthPage onAuthSuccess={login} />;
    }

    return <AuthenticatedApp />;
}

// Main App component
function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/auth" element={<AuthWrapper />} />
                    <Route
                        path="/*"
                        element={
                            <ProtectedRoute>
                                <AuthenticatedApp />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;