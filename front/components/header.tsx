import Link from "next/link";
import { Button } from "./ui/button";
import { SelectCountry } from "./country-select";
import { Country } from "@/types";

export function Header({ countries }: { countries: Country[] }) {
  return (
    <header className="flex items-center justify-between p-4 border-b-2">
      <Link href="/">
        <Button variant={"link"}>Home</Button>
      </Link>
      <SelectCountry countries={countries} />
    </header>
  );
}
