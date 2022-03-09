import { Controller, Get, Body } from '@nestjs/common';
import { WeatherBodyDto } from './models/weather-body.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  async weather(@Body() body: WeatherBodyDto) {
    return this.weatherService.getWeather(body);
  }
}
