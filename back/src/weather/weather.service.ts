import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Weather } from './models/weather.entity';

@Injectable()
export class WeatherService {
  constructor() {}

  async getWeather(body): Promise<Weather> {
    const { latitude, longitude, localisation } = body;

    try {
      let result;
      if (localisation) {
        result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${localisation}&units=metric&APPID=d3abc0aee094d23d44763c7a9c79b819`,
        );
      } else {
        result = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=d3abc0aee094d23d44763c7a9c79b819`,
        );
      }
      const { id, weather, main, name } = result.data;
      let data = {
        id,
        description: weather[0].description,
        icon: weather[0].icon,
        temp_min: Math.round(main.temp_min),
        temp_max: Math.round(main.temp_max),
        city: name,
      };
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  }
}
