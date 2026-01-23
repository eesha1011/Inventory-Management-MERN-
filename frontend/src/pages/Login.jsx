import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { user, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user) navigate("/");
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        
        try {
            if(isRegister){
                await axios.post("http://localhost:5000/users/register", {
                    name,
                    email,
                    password,
                    role,
                });

                alert("Registration successful. Please login.");
                setIsRegister(false);
                setName("");
                setEmail("");
                setPassword("");
                setRole("");
            } else {
                await login(email, password);
            }
        } catch (error) {
            // console.log("LOGIN ERROR 👉", error.response?.data);
            console.log("FULL ERROR 👉", error);

            if (error.response) {
                setError(error.response.data.message);
            } else if (error.request) {
                setError("Server not responding");
            } else {
                setError(error.message);
            }
            // setError(error.response?.data?.message ||"Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-900">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
            {isRegister ? "Register" : "Login"}
        </h1>

        {isRegister && (
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        )}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" required />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" required />

        {isRegister && (
            <select name="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400" required>
                <option value="">Select Role</option>
                <option value="Admin">Admim</option>
                <option value="User">User</option>
            </select>            
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer transition">
          {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
        </button>

        <p className=" text-center mt-4">
            {isRegister ? "Already have an account?" : "New user?"}
            <span onClick={() => setIsRegister(!isRegister)} className="text-blue-500 cursor-pointer ml-1">
                {isRegister ? "Login" : "Register"}
            </span>
        </p>
      </form>
    </div>
  )
}

export default Login;