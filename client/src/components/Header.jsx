import Logo from "./Logo";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-40 w-full h-16 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-4 mx-auto ">
        <div>
          <Link to={"/"}>
            <Logo width={90} height={50} />
          </Link>
        </div>

        <div className="items-center justify-between hidden w-full max-w-sm pl-2 border rounded-full lg:flex focus-within:shadow">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />

          <div className="text-lg text-slate-900 min-w-[50px] h-8 flex items-center justify-center rounded-r-full">
            <Search className="cursor-pointer" />
          </div>
        </div>

        {/* user */}

        <div className="flex items-center gap-4 text-lg cursor-pointer text-slate-900">
          <div>
            <User className="cursor-pointer" />
          </div>

          <div className="relative text-lg text-slate-900">
            <span>
              <ShoppingCart className="cursor-pointer" />
            </span>

            <div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-400 rounded-full -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>

          {/* login /log out */}
          <div>
            <Link
              to={"login"}
              className="px-3 py-1 text-white transition-all bg-red-400 rounded-full hover:bg-red-500"
            >
              login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
