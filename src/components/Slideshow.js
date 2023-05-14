import styled from "styled-components";

export default function Slideshow({ flashcards }) {
  // TODO: move buttons to move slideshow to APP to get the index & pass in index to slideshow ^

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={flashcards.image} alt={flashcards.alt} />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  border: 10px solid black;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 600px;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;
