import styles from "./../styles/select-location.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../util/osm";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useMemo, useCallback } from "react";

export default function SelectLocation({ setLocation, location, setLocModal }) {
  const [pos, setPos] = useState(location);

  function handleCancel() {
    setLocModal(false);
  }
  function handleSelect() {
    setLocation(pos || location);
    setLocModal(false);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["mymap-container"]}>
        <MapContainer
          center={location}
          zoom={10}
          style={{
            height: "100%",
            borderRadius: "5px",
            boxShadow: "0 0 5px 2px #ccc",
          }}
        >
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />
          <DraggableMarker setLocation={setPos} location={location} />
        </MapContainer>
      </div>
      <div className={styles["btn-container"]}>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSelect}>Select</button>
      </div>
    </div>
  );
}

function DraggableMarker({ setLocation, location }) {
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(location);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          setLocation(marker.getLatLng());
        }
      },
    }),
    []
  );
  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d);
  // }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      // onClick={toggleDraggable}
    >
      <Popup minWidth={90}>
        <span>{draggable ? "Marker is draggable" : "Marker is draggable"}</span>
      </Popup>
    </Marker>
  );
}
