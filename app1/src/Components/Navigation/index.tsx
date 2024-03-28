import classnames from "classnames";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-start flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Example</span>
      </div>
      <div
        className={classnames(
          "w-full block lg:flex lg:items-center lg:w-auto gap-2"
        )}
      >
        <div className="text-sm ">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
          >
            Home
          </a>
        </div>
        <div className="text-sm ">
          <a
            href="/module1"
            className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
          >
            Module 1
          </a>
        </div>

        <div className="text-sm ">
          <a
            href="/module2"
            className="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white mr-4"
          >
            Module 2
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
