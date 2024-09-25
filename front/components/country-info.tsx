"use client";

import { Info } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PopulationChart } from "./population-chart";
import { Card, CardHeader } from "./ui/card";

export function CountryInfo({ country }: { country: string }) {
  const [countryInfo, setCountryInfo] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/countries/" + country, {
      cache: "force-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
        setLoading(false);
      });
  }, [country]);

  return (
    <div>
      {countryInfo && !loading ? (
        <div className="flex flex-col items-center justify-center gap-8">
          {countryInfo.flag?.data?.flag && (
            <Image
              className="rounded-lg max-h-[200px]"
              src={countryInfo.flag.data.flag}
              alt={countryInfo.flag.data.name}
              width={300}
              height={300}
            />
          )}
          {countryInfo.population ? (
            <PopulationChart population={countryInfo.population} />
          ) : (
            <p>No population data available</p>
          )}
          <div className="flex flex-col items-center justify-center">
            <span>
              <h3 className="font-bold">Borders:</h3>
              <ul className="flex gap-4 flex-wrap">
                {countryInfo.borders.map((border) => (
                  <Card
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      router.push(`/countries/${border.countryCode}`);
                    }}
                    key={border.countryCode}
                  >
                    <CardHeader>{border.commonName}</CardHeader>
                  </Card>
                ))}
              </ul>
            </span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
