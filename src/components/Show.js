import React, { useState } from "react";

function Show({
  images0,
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
  images11,
  images12,
  images13,
  randomBody,
  randomFacial_hair,
  randomHair,
  randomGlasses,
  randomHats,
  randomEarrings,
  randomNeckwear,
  randomLayer_1,
  randomLayer_2,
  randomLayer_3,
  randomEyebrows,
  randomEyes,
  randomMouths,
  randomNoses,
}) {
  const [listRandom, setListRandom] = useState([
    { key1: "0", key2: randomBody },
    { key1: "800", key2: randomFacial_hair },
    { key1: "900", key2: randomHair },
    { key1: "800", key2: randomGlasses },
    { key1: "1000", key2: randomHats },
    { key1: "100", key2: randomEarrings },
    { key1: "600", key2: randomNeckwear },
    { key1: "500", key2: randomLayer_1 },
    { key1: "500", key2: randomLayer_2 },
    { key1: "500", key2: randomLayer_3 },
    { key1: "700", key2: randomEyebrows },
    { key1: "700", key2: randomEyes },
    { key1: "700", key2: randomMouths },
    { key1: "700", key2: randomNoses },
  ]);

  const handleClick = () => {
    const randomBody = images0[Math.floor(Math.random() * images0.length)];
    const randomFacial_hair =
      images1[Math.floor(Math.random() * images1.length)];
    const randomHair = images2[Math.floor(Math.random() * images2.length)];
    const randomGlasses = images3[Math.floor(Math.random() * images3.length)];
    const randomHats = images4[Math.floor(Math.random() * images4.length)];
    const randomEarrings = images5[Math.floor(Math.random() * images5.length)];
    const randomNeckwear = images6[Math.floor(Math.random() * images6.length)];
    const randomLayer_1 = images7[Math.floor(Math.random() * images7.length)];
    const randomLayer_2 = images8[Math.floor(Math.random() * images8.length)];
    const randomLayer_3 = images9[Math.floor(Math.random() * images9.length)];
    const randomEyebrows =
      images10[Math.floor(Math.random() * images10.length)];
    const randomEyes = images11[Math.floor(Math.random() * images11.length)];
    const randomMouths = images12[Math.floor(Math.random() * images12.length)];
    const randomNoses = images13[Math.floor(Math.random() * images13.length)];
    setListRandom(() => {
      return [
        { key1: "0", key2: randomBody },
        { key1: "800", key2: randomFacial_hair },
        { key1: "900", key2: randomHair },
        { key1: "800", key2: randomGlasses },
        { key1: "1000", key2: randomHats },
        { key1: "100", key2: randomEarrings },
        { key1: "600", key2: randomNeckwear },
        { key1: "500", key2: randomLayer_1 },
        { key1: "500", key2: randomLayer_2 },
        { key1: "500", key2: randomLayer_3 },
        { key1: "700", key2: randomEyebrows },
        { key1: "700", key2: randomEyes },
        { key1: "700", key2: randomMouths },
        { key1: "700", key2: randomNoses },
      ];
    });
  };
  return (
    <>
      <div className="show">
        <div className="showDetail">
          <div className="person-random">
            {listRandom.map((listItem) => {
              return (
                <img
                  z-index={listItem.key1}
                  src={listItem.key2}
                  alt="not found"
                ></img>
              );
            })}
          </div>
          <button onClick={handleClick} className="random">
            RANDOM
          </button>
        </div>
      </div>
    </>
  );
}

export default Show;
