import komputer from '../assets/komputer.jpeg';
import biomedik from '../assets/biomedik.jpeg';
import elektro from '../assets/elektro.jpeg';
import { useEffect, useState } from 'react';

import React from "react";

const data = [
  {
    id: 1,
    title: "Teknik Komputer",
    body: "Mempelajari sistem komputer dari perangkat keras hingga perangkat lunak, termasuk jaringan dan sistem cerdas.",
    imageUrl: komputer,
  },
  {
    id: 2,
    title: "Teknik Elektro",
    body: "Fokus pada analisis dan perancangan sistem kelistrikan seperti tenaga, sinyal, dan elektronik.",
    imageUrl: elektro,
  },
  {
    id: 3,
    title: "Teknik Biomedik",
    body: "Menggabungkan ilmu teknik dan biologi untuk mengembangkan alat dan teknologi kesehatan guna mendukung diagnosis dan terapi medis.",
    imageUrl: biomedik,
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10! 🎉`);
    }
  }, [count]); 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
      <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
        <nav className="flex justify-between items-center px-10 py-4 ${darkMode ? 'border-white' : 'border-gray-300'} bg-black boundary-b-lg">
          <div className='flex flex-col items-center'>
            <div className="text-2xl text-white font-bold">Bonifasius Raditya Pandu Hendianto</div>
            <div className="text-sm text-gray-400 text-center">2306242350</div>
          </div>
          <div className="flex space-x-6 font-white">
            <a href="#" className="hover:text-blue">Profile</a>
            <a href="#" className="hover:text-blue">Home</a>
            <a href="#" className="hover:text-blue">Contact</a>
            <a href="#" className="hover:text-blue">About Me</a>
          </div>
          <button onClick={toggleMode} className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${darkMode ? 'bg-white' : 'bg-gray-400'}`}>
            <div className={`bg-black w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </nav>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Departemen Teknik Elektro!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="font-semibold text-black">{item.title}</h2>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-1000">
          <h1 className="text-4xl font-bold mb-6">Counter Up/Down</h1>
          <div className="text-6xl mb-6">{count}</div>
          <div className="flex space-x-4">
            <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                +
            </button>
            <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              -
            </button>
            <button onClick={reset} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Reset
            </button>
          </div>
        </div>
      </div>
  );
}
