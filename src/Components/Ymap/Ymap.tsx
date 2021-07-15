import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";
import { selectorLat, selectorLong } from "../../Store/Selector";

function Ymap() {
  // @ts-ignore
  const lat: any = useSelector(selectorLat);
  // @ts-ignore
  const long: any = useSelector(selectorLong);
  const mapData = {
    center: [lat, long],
    zoom: 9,
    controls: ["zoomControl", "fullscreenControl"],
    autoFitToViewport: "always",
  };

  const coordinates = [[lat, long]];
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <YMaps>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <Map
        defaultState={mapData}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width="700px"
        height="400px"
      >
        {coordinates.map((coordinate, index) => (
          // eslint-disable-next-line react/react-in-jsx-scope
          <Placemark key={index} geometry={coordinate} />
        ))}
      </Map>
    </YMaps>
  );
}
export default Ymap;
