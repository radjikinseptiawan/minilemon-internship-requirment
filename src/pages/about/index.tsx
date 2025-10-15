import React from "react";

export default function Abouts(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">About</h1>
      <p className="max-w-2xl text-center text-gray-700 mb-4">
        <strong>Find Yours Schools</strong> adalah platform sederhana yang membantu kamu menemukan
        informasi sekolah di seluruh Indonesia. Kami menyediakan data seperti nama sekolah,
        alamat, dan lokasi agar kamu bisa menemukan sekolah yang sesuai dengan kebutuhanmu
        dengan mudah dan cepat.
      </p>
      <p className="max-w-2xl text-center text-gray-700 mb-4">
        Website ini dikembangkan menggunakan teknologi modern seperti <strong>React</strong> dan
        <strong> Tailwind CSS</strong> untuk memberikan pengalaman pengguna yang cepat, responsif,
        dan mudah diakses dari berbagai perangkat.
      </p>
      <p className="max-w-2xl text-center text-gray-700">
        Proyek ini dibuat sebagai bentuk kontribusi kecil untuk dunia pendidikan digital di
        Indonesia, dengan harapan dapat mempermudah siswa dan orang tua dalam mencari sekolah
        terbaik bagi masa depan mereka.
      </p>
    </div>
  );
};
