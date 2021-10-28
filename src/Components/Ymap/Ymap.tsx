import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
import {
  selectorLat,
  selectorLong,
  selectorSavedCities,
  selectorWeatherNow,
} from "../../Store/Selector";
import { useEffect } from "react";

function Ymap() {
  const lat: any = useSelector(selectorLat);
  const long: any = useSelector(selectorLong);
  const nameCity: any = useSelector(selectorWeatherNow);

  useEffect(() => {}, [lat]);
  const mapData = {
    center: [lat, long],
    zoom: 9,
    controls: ["zoomControl", "fullscreenControl"],
    autoFitToViewport: "always",
  };
  const properties = {
    hintContent: nameCity?.name,
    balloonContent: nameCity?.name,
  };
  const coordinates = [[lat, long]];

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {lat && (
        // eslint-disable-next-line react/react-in-jsx-scope
        <YMaps>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Map
            defaultState={mapData}
            modules={[
              "control.ZoomControl",
              "control.FullscreenControl",
              "geoObject.addon.balloon",
              "geoObject.addon.hint",
            ]}
            width="700px"
            height="400px"
          >
            {coordinates.map((coordinate, index) => (
              // eslint-disable-next-line react/react-in-jsx-scope
              <Placemark
                key={index}
                geometry={coordinate}
                properties={properties}
              />
            ))}
          </Map>
        </YMaps>
      )}
    </>
  );
}
export default Ymap;
