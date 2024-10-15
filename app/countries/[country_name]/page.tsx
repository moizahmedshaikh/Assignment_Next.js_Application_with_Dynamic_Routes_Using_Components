import React from "react";
import CountryDetailCard from "@/app/components/CountryDetailCard/card";
import { CountryDetailsType } from "@/types/type";


const countriesName = ({ params }: { params: { country_name: string } }) => {
  const contrydetails: CountryDetailsType[] = [
    {
      name: "Qatar",
      population: 28810534,
      capital: "Doha",
    },
    {
      name: "Iraq",
      population: 40222493,
      capital: "Baghdad",
    },
    {
      name: "Montenegro",
      population: 628066,
      capital: "Podgorica",
    },
    {
      name: "Bhutan",
      population: 771608,
      capital: "Thimphu",
    },
  ];

  const country = contrydetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );
  if (!country) {
    return <h1>Yahan nhi he ye country</h1>;
  }

  return (
    <div>
      <CountryDetailCard
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
    </div>
  );
};

export default countriesName;
