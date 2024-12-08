import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function RegisterForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk mengirim formulir ke backend
  const handleRegisterClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/register", formData);
      alert(response.data.message);
      navigate("/login"); // Arahkan ke halaman login setelah berhasil registrasi
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-cover bg-[url(/assets/Background.svg)] ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-xl font-bold text-gray-800 mb-4">Daftar Akun</h1>

        {/* Input Nama */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
          <input
            type="text"
            name="name"y
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukan nama Anda"
            className="w-full p-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Input Email */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukan email Anda"
            className="w-full p-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Input Kata Sandi */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Kata Sandi</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukan kata sandi Anda"
              className="w-full p-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-12"
              style={{ paddingRight: "3rem" }}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* Input Konfirmasi Kata Sandi */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Konfirmasi Kata Sandi</label>
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Konfirmasi kata sandi Anda"
              className="w-full p-2 border rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 pr-12"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* Tombol Daftar */}
        <button
          className="w-full bg-orange-500 text-white text-sm font-bold py-2 rounded-md hover:bg-orange-600 transition"
          onClick={handleRegisterClick}
        >
          Daftar Akun
        </button>
        {/* Divider */}
        <div className="flex items-center my-3">
          <span className="flex-grow h-px bg-gray-300"></span>
          <span className="mx-3 text-sm text-gray-500">atau</span>
          <span className="flex-grow h-px bg-gray-300"></span>
        </div>

        {/* Daftar dengan */}
        <div className="flex justify-center mb-2">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            alt="Google"
            className="w-11 h-15"
          />
          <img
            src="https://banner2.cleanpng.com/20180706/hpz/aax76xlah.webp"
            alt="Facebook"
            className="w-13 h-9 mt-1"
          />
        </div>

        {/* Link Login */}
      <p className="text-center text-sm text-gray-600">
      Sudah memiliki akun?{" "}
      <Link to="/login" className="text-orange-500 font-semibold">
        Masuk
      </Link>
    </p>
      </div>
    </div>
  );
}


export default RegisterForm;
