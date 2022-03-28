import React, { useState } from "react";
import Character from "./Character";
import Show from "./Show";

function Main() {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images0 = importAll(
    require.context(
      "../components/character(1)/character/body",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images1 = importAll(
    require.context(
      "../components/character(1)/character/accessories/earrings",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const images2 = importAll(
    require.context(
      "../components/character(1)/character/accessories/glasses",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images3 = importAll(
    require.context(
      "../components/character(1)/character/accessories/hats",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images4 = importAll(
    require.context(
      "../components/character(1)/character/accessories/neckwear",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images5 = importAll(
    require.context(
      "../components/character(1)/character/clothes/layer_1",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images6 = importAll(
    require.context(
      "../components/character(1)/character/clothes/layer_2",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images7 = importAll(
    require.context(
      "../components/character(1)/character/clothes/layer_3",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images8 = importAll(
    require.context(
      "../components/character(1)/character/eyebrows",

      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images9 = importAll(
    require.context(
      "../components/character(1)/character/eyes",

      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images10 = importAll(
    require.context(
      "../components/character(1)/character/facial_hair",

      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images11 = importAll(
    require.context(
      "../components/character(1)/character/hair",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images12 = importAll(
    require.context(
      "../components/character(1)/character/mouths",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const images13 = importAll(
    require.context(
      "../components/character(1)/character/noses",

      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const randomBody = images0[Math.floor(Math.random() * images0.length)];
  const randomFacial_hair = images1[Math.floor(Math.random() * images1.length)];
  const randomHair = images2[Math.floor(Math.random() * images2.length)];
  const randomGlasses = images3[Math.floor(Math.random() * images3.length)];
  const randomHats = images4[Math.floor(Math.random() * images4.length)];
  const randomEarrings = images5[Math.floor(Math.random() * images5.length)];
  const randomNeckwear = images6[Math.floor(Math.random() * images6.length)];
  const randomLayer_1 = images7[Math.floor(Math.random() * images7.length)];
  const randomLayer_2 = images8[Math.floor(Math.random() * images8.length)];
  const randomLayer_3 = images9[Math.floor(Math.random() * images9.length)];
  const randomEyebrows = images10[Math.floor(Math.random() * images10.length)];
  const randomEyes = images11[Math.floor(Math.random() * images11.length)];
  const randomMouths = images12[Math.floor(Math.random() * images12.length)];
  const randomNoses = images13[Math.floor(Math.random() * images13.length)];

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

  const addNewTask = (element) => {
    console.log(images0);
    console.log(element.target);
    console.log(listRandom[0]);
  };
  return (
    <>
      <div className="main">
        <Show
          images0={images0}
          images1={images1}
          images2={images2}
          images3={images3}
          images4={images4}
          images5={images5}
          images6={images6}
          images7={images7}
          images8={images8}
          images9={images9}
          images10={images10}
          images11={images11}
          images12={images12}
          images13={images13}
          randomBody={randomBody}
          randomFacial_hair={randomFacial_hair}
          randomHair={randomHair}
          randomGlasses={randomGlasses}
          randomHats={randomHats}
          randomEarrings={randomEarrings}
          randomNeckwear={randomNeckwear}
          randomLayer_1={randomLayer_1}
          randomLayer_2={randomLayer_2}
          randomLayer_3={randomLayer_3}
          randomEyebrows={randomEyebrows}
          randomEyes={randomEyes}
          randomMouths={randomMouths}
          randomNoses={randomNoses}
        />
        <Character
          images0={images0}
          images1={images1}
          images2={images2}
          images3={images3}
          images4={images4}
          images5={images5}
          images6={images6}
          images7={images7}
          images8={images8}
          images9={images9}
          images10={images10}
          images11={images11}
          images12={images12}
          images13={images13}
          addNewTask={addNewTask}
        />
      </div>
    </>
  );
}

export default Main;
