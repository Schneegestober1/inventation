import React, { useEffect, useRef } from "react";
import styles from "../MapComponent/map-component.module.scss";

const YandexMap = () => {
  const mapRef = useRef(null); 
  useEffect(() => {
    if (window.ymaps && mapRef.current) {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.949449, 38.086293],
          zoom: 10,
        });

        const placemark = new window.ymaps.Placemark([55.949449, 38.086293]);
        map.geoObjects.add(placemark);
      });
    } else {
      console.error("Yandex Maps API не был загружен.");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div ref={mapRef} className={styles.map}></div>
    </div>
  );
};

export default YandexMap;
