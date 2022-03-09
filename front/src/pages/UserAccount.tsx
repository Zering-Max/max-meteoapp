import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import MeteoCard from "../components/MeteoCard";
import WrapperAccount from "../components/WrapperAccount";
import Section from "../components/Section";

function UserAccount() {
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<string | null>(null);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string | null>(null);
  const [temp_min, setTempMin] = useState<null | number>(null);
  const [temp_max, setTempMax] = useState<null | number>(null);
  const [myLocation, setMyLocation] = useState({
    city: null,
    image: null,
    description: null,
    temp_min: null,
    temp_max: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      let latitude, longitude;
      navigator.geolocation.getCurrentPosition(async position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        // const {data} = await axios.get("weather",{
        //   latitude,
        //   longitude
        // })
        // setMyLocation({
        //   city: data.city,
        //   image : data.icon,
        //   description:data.description,
        //   temp_min:data.temp_min,
        //   temp_max:data.temp_max
        // })
      });
    }
  }, []);

  const searchMeteo = async () => {
    // const { data } = await axios.get("weather", {
    //   localisation:search
    // });
    console.log(search);
  };

  const addToList = (city: string | null) => {
    //const {data} = await axios.get("user")
    // const { result } = await axios.put(`users/${data.id}`, {
    //   localisations:[city,...data.localisations]
    // });
    console.log(city);
  };

  return (
    <WrapperAccount>
      <Section width={"50%"} borderRight={"1px solid black"}>
        <div>
          <label
            style={{
              margin: "0 1rem 0 0",
              color: "orange",
              fontWeight: "bold",
            }}
            htmlFor="search"
          >
            Search a location :
          </label>
          <input
            style={{
              padding: 8,
              borderRadius: "8px",
              border: "2px solid orange",
            }}
            placeholder="tape a city..."
            id="search"
            name="search"
            type="search"
            onChange={e => setSearch(e.target.value)}
            onKeyPress={e => {
              if (e.code === "Enter") {
                searchMeteo();
              }
            }}
          />
        </div>
        <MeteoCard
          city={city ?? "Your location search"}
          image={image ?? ""}
          description={description ?? "ceci est une description"}
          temp_min={temp_min ?? 15}
          temp_max={temp_max ?? 18}
          title={"Add To Your List"}
          onClick={() => addToList(city)}
        />
      </Section>
      <Section width={"50%"}>
        <MeteoCard
          city={myLocation.city ?? "My location"}
          image={myLocation.image ?? ""}
          description={myLocation.description ?? "Ceci est une description"}
          temp_min={myLocation.temp_min ?? 15}
          temp_max={myLocation.temp_max ?? 18}
          title={"Add To Your List"}
          onClick={() => addToList(city)}
        />
      </Section>
    </WrapperAccount>
  );
}

export default UserAccount;
