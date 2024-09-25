import { CountryList } from "@/components/country-list";

export default async function Home() {
  const data = await fetch("http://localhost:4000/countries");
  const countries = await data.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Countries</h1>
        <CountryList countries={countries} />
      </main>
    </div>
  );
}
