import Logo from "./Logo";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link>
            <Logo width={90} height={90} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full outline-none"
          />

          <div className="text-lg min-w-[50px] h-8 bg-red-400 flex items-center justify-center rounded-full">
            <Search />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <User />
        </div>

        <div className="text-2xl cursor-pointer">
          <span>
            <ShoppingCart />
          </span>

          <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-between">
            <p className="text-sm">0</p>
          </div>
        </div>

        <div>
          <Link
            to={"/login"}
            className="px-3 py-1 rounded-full bg-red-400 hover:bg-red-500"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
