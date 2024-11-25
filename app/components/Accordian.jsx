export default function Accordian({ longDesc, dimensions, weight, quantity }) {
  return (
    <div className="ollapse-arrow">
      <div className="text-xl font-medium pb-8">Product Details</div>
      <div className="">
        <ul className="space-y-4">
          <li>
            <span className="font-bold">Description</span>
            <p className="pt-2">{longDesc}</p>
          </li>
          <li>
            <span className="font-bold">Quantity</span>
            <p className="pt-2">{quantity}</p>
          </li>
          <li>
            <span className="font-bold">Dimensions</span>
            <p className="pt-2">{dimensions}</p>
          </li>
          <li>
            <span className="font-bold">Weight</span>
            <p className="pt-2">{weight}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
