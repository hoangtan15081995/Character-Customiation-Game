import React from "react";
function Character({
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
  addNewTask,
}) {
  // const array = [
  //   "../components/character(1)/character/body",
  //   "../components/character(1)/character/accessories/earrings",
  //   "../components/character(1)/character/accessories/glasses",
  //   "../components/character(1)/character/accessories/hats",
  //   "../components/character(1)/character/accessories/neckwear",
  //   "../components/character(1)/character/clothes/layer_1",
  //   "../components/character(1)/character/clothes/layer_2",
  //   "../components/character(1)/character/clothes/layer_3",
  //   "../components/character(1)/character/eyebrows",
  //   "../components/character(1)/character/eyes",
  //   "../components/character(1)/character/facial_hair",
  //   "../components/character(1)/character/hair",
  //   "../components/character(1)/character/mouths",
  //   "../components/character(1)/character/noses",
  // ];

  const res = [
    { title: "Body", images: images0 },
    { title: "Facial_hair", images: images10 },
    { title: "Hair", images: images11 },
    { title: "Glasses", images: images2 },
    { title: "Hats", images: images3 },
    { title: "earrings", images: images1 },
    { title: "Neckwear", images: images4 },
    { title: "Layer_1", images: images5 },
    { title: "Layer_2", images: images6 },
    { title: "Layer_3", images: images7 },
    { title: "Eyebrows", images: images8 },
    { title: "Eyes", images: images9 },
    { title: "Mouths", images: images12 },
    { title: "Noses", images: images13 },
  ];
  const handleClickChar = (img) => {
    img.preventDefault();
    addNewTask(img);
  };
  return (
    <>
      <div className="character">
        {res.map((element) => {
          return (
            <div className="listTask">
              <h2>{element.title}</h2>
              <div className="option">
                <div className="everyOption">
                  {element.images.map((task) => {
                    return (
                      <img
                        onClick={handleClickChar}
                        key={task}
                        src={task}
                        alt="not find"
                      ></img>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Character;
