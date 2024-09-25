import { CountryInfo } from "@/components/country-info";

export default async function CountryPage({
  params: { code },
}: {
  params: { code: string };
}) {
  return (
    <div className="flex items-center justify-center p-16">
      <CountryInfo country={code} />
    </div>
  );
}
