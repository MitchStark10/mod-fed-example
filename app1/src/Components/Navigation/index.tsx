import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ accessToken }) => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-start flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Example {accessToken}
        </span>
      </div>
      <div
        className={classnames(
          "w-full block lg:flex lg:items-center lg:w-auto gap-2"
        )}
      >
        <div className="text-sm">
          <Link
            to="/"
            className={classnames(
              "block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4",
              { underline: location.pathname === "/" }
            )}
          >
            Home
          </Link>
        </div>
        <div className="text-sm ">
          <Link
            to="/module1"
            className={classnames(
              "block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4",
              {
                underline: location.pathname.startsWith("/module1"),
              }
            )}
          >
            Module 1
          </Link>
        </div>

        <div className="text-sm ">
          <Link
            to="/module2"
            className={classnames(
              "block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4",
              {
                underline: location.pathname.startsWith("/module2"),
              }
            )}
          >
            Module 2
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
