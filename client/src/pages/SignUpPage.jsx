import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginIcon from "../assets/signin.gif";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePicture: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="signup"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="container p-4 mx-auto">
        <div className="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md">
          <div className="w-20 h-20 p-2 py-5 mx-auto">
            <img src={loginIcon} alt="loginIcon" />
          </div>

          <form className="pt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name :
              </label>
              <div className="bg-gray-200 rounded-md">
                <input
                  onChange={handleOnChange}
                  name="name"
                  value={data.name}
                  className="w-full h-10 px-3 bg-transparent rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email :
              </label>
              <div className="bg-gray-200 rounded-md">
                <input
                  onChange={handleOnChange}
                  name="email"
                  value={data.email}
                  className="w-full h-10 px-3 bg-transparent rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password :
              </label>
              <div className="flex items-center bg-gray-200 rounded-md">
                <input
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                  className="w-full h-10 px-3 bg-transparent rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                />
                <div
                  className="p-2 text-lg cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <EyeOff /> : <Eye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password :
              </label>
              <div className="flex items-center bg-gray-200 rounded-md">
                <input
                  onChange={handleOnChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  className="w-full h-10 px-3 bg-transparent rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                />
                <div
                  className="p-2 text-lg cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>{showConfirmPassword ? <EyeOff /> : <Eye />}</span>
                </div>
              </div>
            </div>

            <button className="block w-full px-5 py-2 mx-auto text-white bg-red-300 rounded-full hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Already have an account?{" "}
            <Link className="text-red-300 hover:text-red-500" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
