import Incrementer from "./incrementer";

export default function Itembox({ item, img, description }) {
  return (
    <div className="rounded-lg border border-gray-300 overflow-hidden">
      <img alt={`Picture for ${item}`} src={img} className="w-full" />
      <header className="p-4">
        <h4 className="text-lg font-semibold">{item}</h4>
      </header>
      <div className="p-4">
        {description}
      </div>
      <Incrementer />
    </div>
  );
}