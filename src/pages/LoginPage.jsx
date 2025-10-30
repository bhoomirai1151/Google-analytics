import LoginForm from "../components/Loginform";

export default function LoginPage({ onLoginSuccess }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-center w-full max-w-md p-6">
       <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  );
}
