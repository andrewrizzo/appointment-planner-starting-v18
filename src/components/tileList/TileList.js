import React, { useCallback, useEffect, useState } from "react";
import Tile from '../tile/Tile';

export default () => {
  const [tiles, setTiles] = useState([]);

  let getData = useCallback(() => {
    // Here you would call an API (backend) over the internet
    setTiles([
      {
        name: "Name 1",
        description: "Desc 1"
      },
      {
        name: "Name 2",
        description: "Desc 2"
      },
      {
        name: "Name 2",
        description: "Desc 2"
      },
    ])
  }, [setTiles]);

  useEffect(getData, [getData]);

  return (
    <div>
      {tiles.map(tile => 
        <>
          <Tile
            description={tile.description}
            name={tile.name}
          />
          <hr />
        </>
      )}
    </div>
  );
};
