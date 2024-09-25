import express, { type Request, type Response } from "express";
import cors from "cors";

const DATE_NAGER_API_URL = process.env.DATE_NAGER_API_URL;
const COUNTRIES_NOW_API_URL = process.env.COUNTRIES_NOW_API_URL;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/countries", async (req: Request, res: Response) => {
  const response = await fetch(`${DATE_NAGER_API_URL}/AvailableCountries`);

  const countries = await response.json();

  res.json(countries);
});

app.get("/countries/:countryCode", async (req: Request, res: Response) => {
  const countryCode = req.params.countryCode;

  const infoResponse = await fetch(
    `${DATE_NAGER_API_URL}/CountryInfo/${countryCode}`
  );

  const info = await infoResponse.json();

  const populationResponse = await fetch(
    `${COUNTRIES_NOW_API_URL}/countries/population`,
    {
      method: "POST",
      body: JSON.stringify({
        country: info.commonName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const populationInfo = await populationResponse.json();

  const flagResponse = await fetch(
    `${COUNTRIES_NOW_API_URL}/countries/flag/images`,
    {
      method: "POST",
      body: JSON.stringify({
        country: info.commonName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const flag = await flagResponse.json();

  res.json({
    borders: info.borders,
    population: populationInfo,
    flag: flag,
  });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
