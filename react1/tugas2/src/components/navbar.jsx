import logoimg from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#E6EEF5]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={logoimg} alt="Logo" className="h-12 w-12 ml-5" />
          <span className="text-black font-bold text-lg ml-2"></span>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-20 font-bold">
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Artikel
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Aplikasi
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-600">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-blue-700 text-white hover:bg-blue-800  mr-8 rounded-lg py-2 px-10">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
