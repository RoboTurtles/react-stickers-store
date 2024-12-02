import Incrementer from "./incrementer";

export default function Itembox({ item, img, description, price }) {
  return (
    <div className="w-64 rounded-lg border border-gray-300 overflow-hidden flex flex-col">
      <div className="w-full h-40 flex items-center justify-center bg-gray-800">
        <img
          alt={`Picture for ${item}`}
          src={img}
          className="max-h-full max-w-full"
        />
      </div>
      <header className="p-2">
        <h4 className="text-lg font-bold text-white">
          {item} <br /> ${price} / Unit
        </h4>
      </header>
      <div className="px-2 text-gray-300 text-wrap overflow-hidden">
        {description}
      </div>
      <br />
      <Incrementer />
    </div>
  );
}