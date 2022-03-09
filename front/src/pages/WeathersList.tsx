import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import WrapperAccount from "../components/WrapperAccount";
import MeteoCard from "../components/MeteoCard";
import Section from "../components/Section";

const cities = [
  "Los Angeles",
  "Nantes",
  "Paris",
  "Berlin",
  "Moscou",
  "Chicago",
  "Grenoble",
  "Rome",
  "Barcelone",
  "Fez",
  "Abou Dhabi",
  "Bilbao",
  "Brazilia",
  "Houston",
  "Montréal",
];

function WeathersList() {
  const [meteo, setMeteo] = useState({
    city: null,
    image: null,
    description: null,
    temp_min: null,
    temp_max: null,
  });

  const requestMeteo = async (city: string) => {
    // const {data} = await axios.get("weather",{
    //   localisation : city
    // })
    // setMeteo({
    //   city:data.city,
    //   image:data.icon,
    //   description:data.description,
    //   temp_min : data.temp_min,
    //   temp_max:data.temp_max
    // })
    console.log(city);
  };

  const RemoveToList = (city: string | null) => {
    //const {data} = await axios.get("user")
    // const { result } = await axios.put(`users/${data.id}`, {
    //   localisations:[city,...data.localisations]
    // });
    console.log(city);
  };

  return (
    <WrapperAccount>
      <Section width={"30%"} borderRight={"1px solid black"}>
        <ul>
          {cities.map(city => (
            <li
              style={{ padding: "4px 0 4px 0", cursor: "pointer" }}
              onClick={() => requestMeteo(city)}
              key={city}
            >
              {city}
            </li>
          ))}
        </ul>
      </Section>
      <Section width={"70%"}>
        <MeteoCard
          city={meteo.city ?? "My City"}
          image={meteo.image ?? ""}
          description={meteo.description ?? "Une description"}
          temp_min={meteo.temp_min ?? 15}
          temp_max={meteo.temp_max ?? 18}
          title={"Remove To Your List"}
          onClick={() => RemoveToList(meteo.city)}
        />
      </Section>
    </WrapperAccount>
  );
}

export default WeathersList;
