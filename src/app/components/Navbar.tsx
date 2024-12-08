import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <img src="Logo Icon.png" alt="Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold text-gray-800">Comforty</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex space-x-8 text-gray-600">
          <Link href="/" passHref>
            <span className="hover:text-blue-600">Home</span>
          </Link>
          <Link href="/shop" passHref>
            <span className="hover:text-blue-600">Shop</span>
          </Link>
          <Link href="/products" passHref>
            <span className="hover:text-blue-600">Products</span>
          </Link>
          <Link href="/pages" passHref>
            <span className="hover:text-blue-600">Pages</span>
          </Link>
        </div>

        {/* Right Side: Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-gray-500">
            Contact:{" "}
            <a href="tel:0344-555-5555" className="text-blue-600">
              0344-555-5555
            </a>
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
