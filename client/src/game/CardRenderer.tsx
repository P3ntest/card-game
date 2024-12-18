import { cardMap } from "../../../server/src/common/content/cards/index";

export function CardRenderer({ id }: { id: string }) {
  const card = cardMap.get(id);

  if (!card) {
    return <div>Card not found</div>;
  }

  const artSrc = `art/${card.id}.png`;

  return (
    <div
      className="bg-slate-700 text-white rounded-xl m-4 border-yellow-500 border-4"
      style={{
        aspectRatio: "5/7",
      }}
    >
      <div className="flex flex-row justify-between items-center p-2 px-4">
        <div className="text-xl uppercase font-bold">{card.type}</div>
        <div className="flex flex-row items-center gap-2 italic">
          {card.cost.map((cost, i) => (
            <div key={i}>
              {cost.amount} {cost.currency}
            </div>
          ))}
        </div>
      </div>
      <img src={artSrc} alt="" className="" />
      <div className="p-4">
        <div className="text-xl font-bold">{card.name}</div>
        <div>{card.description}</div>
      </div>
    </div>
  );
}
