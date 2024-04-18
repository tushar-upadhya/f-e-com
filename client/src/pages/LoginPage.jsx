import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginIcon from "../assets/signin.gif";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto py-5 p-2">
            <img src={loginIcon} alt="loginIcon" />
          </div>

          <form className="pt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  onChange={handleOnChange}
                  name="email"
                  value={data.email}
                  className="w-full h-full outline-none bg-transparent"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                  className="w-full h-full outline-none bg-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                />
                <div
                  className="cursor-pointer text-lg"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <EyeOff /> : <Eye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline transition-all"
              >
                Forget Password
              </Link>
            </div>

            <button className="bg-red-300 hover:bg-red-500 text-white mx-auto block mt-4 w-full px-5 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all">
              Login
            </button>
          </form>

          <p className="my-4">
            Don't have an account?{" "}
            <Link
              className="hover:text-red-200 hover:underline"
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
