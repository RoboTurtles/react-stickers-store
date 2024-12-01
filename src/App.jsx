import './App.css';
import Navbar from './navbar';
import Incrementer from './incrementer';
import Itembox from './itembox';
import Components from './components.svg';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

    <main className="flex flex-col items-center justify-top min-h-screen pt-20 space-y-4">
      <h1 className="text-4xl text-white font-bold">Shop Page</h1>
      <p className="text-gray-300 text-2xl">The best stickers in the world (Guaranteed)</p>
      <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-600">
       Shop Now
      </button>
      <Incrementer />
      <Itembox image={Components}/>
    </main>
  </div>
  );
}
