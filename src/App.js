import React, {useState, useEffect} from "react";
import Carcard from "./components/Carcard.js";
import Header from "./components/Header.js";
import images from "./images.js";
import './App.css';

const App = () => {
  const [image, setImage] = useState(images);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState ({message: "Click image to begin."});
  const [topscore, setTopscore] = useState(0);

  const appletController = id => {
    for (let i = 0; i < image.length; i++) {
      if (image[i].id == id) {
        if (image[i].clicked == false) {
          image[i].clicked = true;
          setCount(count + 1);
          if (count >= topscore) {
            setTopscore(topscore + 1);
          }
          setMessage({ message: "you guessed right!" });
          setImage(shuffle(image));
          break;
        } else {
          if (count > topscore) {
            setTopscore(count);
          }
          setCount(0);
          setImage(clickdefault(image));
          setMessage({ message: "you guessed wrong!" });
        }
      }
    }
  };

  const clickdefault = arr => {
    return arr.map(element => {
      element.clicked = false;
      return element;
    });
  };

  function shuffle(array) {
    let counter = array.length;
    let temp;
    let index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  return (
    <div>
      <Header message={message.message} score={count} topscore={topscore} />
      <Carcard cards={image} clickcount={appletController} />
    </div>
  );
}
export default App;
