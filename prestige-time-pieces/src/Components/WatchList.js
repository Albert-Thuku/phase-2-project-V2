import React, { useEffect, useState } from "react";
import WatchItem from "./WatchItem";
import Manufacturers from "./Manufacturers";

function WatchList() {
  const [watchData, setWatchData] = useState([]);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);

  function handleSelectedManufacturer(manufacturer) {
    setSelectedManufacturer(manufacturer);
  }

  const filteredWatches = selectedManufacturer
    ? watchData.filter((watch) => watch.manufacturer === selectedManufacturer)
    : watchData;

  useEffect(() => {
    fetch("http://localhost:3000/watches")
      .then((resp) => resp.json())
      .then((data) => setWatchData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="shoppingSection">
      <header>
        <h2>Prestige Time Pieces</h2>
        <h4>Crafted to Perfection, Timelessly Elegant</h4>
      </header>
      <div id="Manufacturers">
        <Manufacturers watchData={watchData} onManufacturerSelect={handleSelectedManufacturer} />
      </div>
      <div id="WatchList">
        {filteredWatches.map((watch) => {
          return <WatchItem watch={watch} key={watch.id} />;
        })}
      </div>
      
    </section>
  );
}

export default WatchList;
