"use client";

import { Country } from "@/types";
import { SelectCountry } from "./country-select";

export function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div>
      <SelectCountry countries={countries} />
    </div>
  );
}
