export default async function TestBlock() {
  let data;

  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/wartortle");
    if (!res.ok) throw new Error("Failed to fetch");

    data = await res.json();
  } catch (err) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <p>{data.name}</p>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}