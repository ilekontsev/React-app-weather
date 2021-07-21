export interface DescPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}
export interface DescWeatherNow {
  weather: [
    {
      main: string;
    }
  ];
  coord: {
    lon: string;
    lat: string;
  };
  main: {
    temp: number;
  };
  name: string | undefined;
  sys: {
    country: string;
  };
  wind: {
    speed: number;
  };
}
export interface DescSavedCities {
  name: string;
  country: string;
  coord: {
    lon: string;
    lat: string;
  };
}
export interface DescHourlyWeather {
  main: {
    temp: number;
  };
  myDay: string;
  myTime: string;
  myMonth: string;
  myNumber: string;
  weather: [
    {
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
}

export interface DescWeek {
  dt: number;
  temp: {
    day: number;
  };
  myDay: string;
  myNumber: string;
  myMonth: string;
  weather: [
    {
      main: string;
    }
  ];
}
export interface DescWeatherCity {
  data: {
    features: object[];
  };
}
export interface DescResWeek {
  data: {
    daily: [
      {
        dt: number;
        temp: {
          day: number;
        };
        weather: [{ main: string }];
      }
    ];
    lat: number;
    lon: number;
  };
}
export interface DescResHourly {
  data: {
    list: [{ dt: number }];
  };
}
export interface DescResWeather {
  data: {
    coord: { lon: number; lat: number };
    name: string;
    sys: {
      country: string;
    };
    main: { temp: number };
    weather: [
      {
        main: string;
      }
    ];
  };
}
