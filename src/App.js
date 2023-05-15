import "./styles.css";
import styled from "styled-components";
import Slideshow from "./components/Slideshow";
import { useState, useEffect } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState('');

  const flashcards = [
    {
      image: "https://i.ebayimg.com/images/g/iZ0AAOSwdE9gtRTH/s-l1600.png",
      alt: "Turtle shaped silhouette",
      name: "squirtle"
    },
    {
      image: "https://i.ebayimg.com/images/g/08IAAOSwvWBjio5K/s-l640.jpg",
      alt: "Misshapen pikachu silhouette",
      name: "mimikyu"
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51QCoZh-6NL._AC_UF894,1000_QL80_.jpg",
      alt: "Skull head pokemon with bone in hand",
      name: "marowak"
    },
    {
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51VhrgoyhdL.jpg",
      alt: "Dragon shaped silhouette with ridges",
      name: "gyarados"
    },
    {
      image: "http://i.imgur.com/qgnF2.png",
      alt: "Oval shaped with wispy bottom",
      name: "omanyte"
    },
    {
      image: "http://i.imgur.com/SY3Eh.png",
      alt: "complex figure holding one spoon in left hand",
      name: "kadabra"
    },
    {
      image: "http://i.imgur.com/L0Mjo.png",
      alt: "figure with tube snout and back spikes",
      name: "seadra"
    },
    {
      image: "http://i.imgur.com/yVpMd.png",
      alt: "figure with scythe arms and small wings",
      name: "scyther"
    },
    {
      image: "http://i.imgur.com/FyCxs.png",
      alt: "cat-like figure with small round ears",
      name: "persian"
    },
    {
      image: "http://i.imgur.com/aiy0e.png",
      alt: "fox-like figure with poofy tail",
      name: "vulpix"
    },
    {
      image: "http://i.imgur.com/UvVWR.png",
      alt: "hedge-hog like figure with claws",
      name: "sandslash"
    },
    {
      image:
        "https://www.kindpng.com/picc/m/363-3637084_pokemon-silhouette-transparent-background-hd-png-download.png",
      alt: "salamander like figure with large crescent shaped tail",
      name: "slowpoke"
    },
    //Added a new pokemon by @Yash8840
    {
    image: "https://www.pngitem.com/pimgs/m/95-958057_whos-that-pokemon-hd-png-download.png",
    alt: "A mouse like figure with a lightning shaped tail",
    name: "pikachu"
  }
  ];

  // hide website response if slide switched
  useEffect(() => {
    setInputValue("");
    setHint(''); // reset the hint whenever slide is switched
  }, [index]);

  // get user's answer
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // activate everytime the user checks their answer
  function handleButtonClick() {
    if (inputValue.toLowerCase() === flashcards[index].name) {
      alert("Correct!");
      setIndex(index + 1);
    } else {
      alert("Incorrect Try again!");
    }
  }

  // activates when a user clicks on the 'Hint' button
  function handleDisplayHint(pokemonName) {
    const length = pokemonName.length;
    // mask 60% of the characters in hint text
    const noOfCharsToMask = Math.floor(0.6*length);
    const remainingNoOfChars = length - noOfCharsToMask;
    const hintToDisplay = pokemonName.slice(0, Math.floor(remainingNoOfChars/2)) + '*'.repeat(noOfCharsToMask) + pokemonName.slice(noOfCharsToMask+Math.floor(remainingNoOfChars/2));
    setHint(`Hint: ${hintToDisplay}`);
  }

  return (
    <Wrapper>
      {/* <h1> Who's that Pokemon? </h1> */}
      <div>
        <Slideshow flashcards={flashcards[index]} />
        <div className="hint-section">   
          <div style={{ visibility: hint ? 'visible' : 'hidden' }} className="hint-text">{hint}</div>
          <button type="button" id="hint-btn" onClick={() => handleDisplayHint(flashcards[index].name)}>
            Hint
          </button>
        </div>
      </div>
      <section className="guess">
        <img src="https://camo.githubusercontent.com/5d1fe59c3f0e4cfb5480bb8d8b1eb3ba58906acef846904fde8afcc5f773adbb/68747470733a2f2f692e696d6775722e636f6d2f583962314b75362e706e67" />
        <label>Enter your guess:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button id="answr-btn" onClick={handleButtonClick}>
          Check Answer
        </button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 150px;
`;

const Controls = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
