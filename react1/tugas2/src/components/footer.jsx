import footerimg from "../images/footerlogo.png";
import footerimg1 from "../images/gambarfooter.png";
import loginimg from "../images/gambarlogin.png";
import logoimg from "../images/logo.png";
import logoinput from "../images/vectorkalender.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#395176] p-10">
        <div className="container mx-auto flex items-center ml-7 py-10">
          <img src={footerimg} alt="Logo" className=" h-auto" />
          <div className="ml-5">
            <h1 className="text-6xl text-white font-semibold">ParentPal</h1>
            <p className="text-white">PT ParentPal Indonesia</p>
            <p className="text-white">Jl.Jendral Sudirman Kav.50 jakarta pusat</p>
          </div>
          <div className="ml-96 pt-10">
            <p className="text-white text-2xl font-semibold mb-5">Sitemap</p>
            <a href="#" className="text-white hover:text-blue-500 block">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-white hover:text-blue-500 block">
              Kebijakan
            </a>
            <a href="#" className="text-white hover:text-blue-500 block">
              Privasi
            </a>
            <a href="#" className="text-white hover:text-blue-500 block">
              Karir
            </a>
            <a href="#" className="text-white hover:text-blue-500 block">
              Blog
            </a>
          </div>
          <div className="ml-10 pt-16">
            <p className="text-white text-2xl font-semibold mb-5">Download App on</p>
            <img src={footerimg1} alt="playstore" />
            <p className="text-white text-2xl font-semibold mb-5">Apakah Anda Psikologi?</p>
            <button className="bg-blue-700 text-white hover:bg-blue-800  mr-8 rounded-lg py-2 px-10">Daftar</button>
          </div>
        </div>
      </footer>
      <div className="h-20 bg-[#07294A] flex  ">
        <p className="text-white pt-7 ml-20">©PARENTPAL PROJECT, 2023. ALL RIGHT RESERVED</p>
        <p className="text-white pt-7 ml-auto mr-20">Social Media </p>
        <a className="mr-2 pt-7">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white ">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a className="mr-2 pt-7">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a className="mr-28 pt-7">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>

      <div className="flex h-screen  items-center justify-center  bg-slate-500">
        <div className="bg-[#F0F8FF] rounded-2xl  p-10 mt-72 ">
          <div className="flex h-screen rounded-lg shadow-xl">
            <div className="bg-white flex-1 flex flex-col justify-center items-center p-10">
              <div className="max-w-sm">
                <h2 className="text-4xl font-semibold   mb-1">Masuk</h2>
                <p className="mb-4 text-base font-medium">Masuk terlebuh dahulu untuk melanjutkan.</p>
                <div className="mb-4">
                  <input type="email" id="email" placeholder="Masukkan email" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
                </div>
                <div className="mb-4">
                  <input type="password" id="password" placeholder="Password" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none bg-[#a1dff5] focus:border-blue-500 shadow-md placeholder-[#07294A]" />
                </div>
                <div className="flex justify-items-center mb-4">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <label htmlFor="remember" className="text-gray-700 rounded-lg ">
                    Ingat Saya
                  </label>
                  <p className="ml-16">Lupa Password Anda?</p>
                  <a href="#" className="ml-auto text-blue-500">
                    Klik Disini
                  </a>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-20 rounded shadow hover:bg-blue-600 mb-4">
                  Masuk
                </button>
                <button type="button" className="w-full bg-white text-black  py-2 rounded border-2 border-blue-800 shadow hover:bg-sky-600 mb-4">
                  <span className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.88 14.88l-1.06 1.06L12 13.06l-4.82 4.82L6 16.94l4.82-4.82L6 7.29l1.06-1.06L12 10.94l4.88-4.88z" />
                    </svg>
                    Masuk menggunakan Google
                  </span>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-white p-10">
              <img src={loginimg} alt="Ilustrasi" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-64"></div>
      <div className="flex justify-center items-center h-screen pt-64 bg-slate-600">
        <div className="w-10/12 p-6 bg-white rounded-lg shadow-lg mb-60 mt-64">
          <div className="mt-5 ml-5">
            <img src={logoimg} alt="Logo" className="h-8 w-8 mr-2" />
          </div>
          <div className="flex justify-center mb-4">
            <h2 className="text-xl font-bold mb-16">Daftar</h2>
          </div>
          <form className="ml-60">
            <div className="mb-4 flex items-center">
              <input type="email" id="fullName" placeholder="Nama Lengkap" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4">
              <input type="email" id="fullName" placeholder="Username" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4">
              <input type="email" id="fullName" placeholder="Email" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4">
              <input type="email" id="fullName" placeholder="Passwoord" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4">
              <input type="email" id="fullName" placeholder="Konfirmasi Password" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4 flex items-center">
              <input type="text" id="birthDate" placeholder="Tanggal Lahir" className="w-4/12 border rounded-md px-3 py-2  border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]" />
              <img src={logoinput} alt="Daftar" className="h-8 w-8 ml-2" />
              <select id="gender" className="w-4/12 border rounded-md px-3 py-2 ml-10 border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]">
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="mb-4">
              <input type="email" id="fullName" placeholder="Nomor Telpon" className="w-9/12 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 bg-[#a1dff5] shadow-md placeholder-[#07294A]"></input>
            </div>
            <div className="mb-4">
              <div className="flex flex-col">
                <div className="flex items-center mb-5">
                  <input type="checkbox" className="checkbox checkbox-info mr-2" />
                  <p>Harap tidak menyebarkan informasi yang tidak benar terkait konsultasi kepada orang tua</p>
                </div>
                <div className="flex items-center mb-5">
                  <input type="checkbox" className="checkbox checkbox-info mr-2" />
                  <p>Semua proses pelayanan kesehatan berlangsung otomatis melalui sistem ParentPal</p>
                </div>
                <div className="flex items-center mb-5">
                  <input type="checkbox" className="checkbox checkbox-info mr-2" />
                  <p>Bersedia mematuhi segala bentuk peraturan yang telah ditetapkan terkait dengan pelayanan yang diberikan</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="checkbox checkbox-info mr-2" />
                  <p>Bersedia membantu dalam pelayanan kesehatan</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 ml-72">
              <button type="submit" className="bg-[#0072C6] text-white py-2 px-10 hover:bg-blue-800 rounded-md flex">
                <img src={footerimg} alt="Daftar" className="h-5 w-5 mr-3 mt-1 text-white" />
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pt-60"></div>
    </>
  );
};

export default Footer;
