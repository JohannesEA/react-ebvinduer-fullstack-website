import styled from "styled-components";
// import ImageBox from "../../components/IphoneBox";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import getWindowDimensions from "../../common/Dimentions";
import { Link } from "react-scroll";

const About = () => {
  const { width } = getWindowDimensions();

  const onClick = () => {
    window.location.href = "https://johanneseandresen.netlify.app/";
  };

  return (
    <Container id="about">
      {width > 800 ? (
        <>
          <Left>
            <Title color="color-2" text="Om Oss" />
            <Text
              text="Gjennom godt samarbeid med europeiske glassleverandører, er målet vårt å komme med bedre tilbud enn våre konkurrenter. Vi har et bredt sortiment av ulike varer. Dette består av blant annet verandadører, små og store vinduer, kreative løsninger til vinterhager eller uteområder med glass. Vi gjennomfører installasjonen og riving av eksisterende vinduer."
              color="color-2"
            />
            <ButtonContainer>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Kontakt Oss" bc="color-2" />
              </Link>
            </ButtonContainer>
          </Left>
        </>
      ) : (
        <>
          <Left>
            <Title color="color-2" text="Om Oss" />

            <Text
              text="Gjennom godt samarbeid med europeiske glassleverandører, er målet vårt å komme med bedre tilbud enn våre konkurrenter. Vi har et bredt sortiment av ulike varer. Dette består av blant annet verandadører, små og store vinduer, kreative løsninger til vinterhager eller uteområder med glass. Vi gjennomfører installasjonen og riving av eksisterende vinduer."
              color="color-2"
            />
            <ButtonContainer>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Kontakt Oss" bc="color-2" />
              </Link>{" "}
            </ButtonContainer>
          </Left>
        </>
      )}
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr;
  transition: grid-template-columns 0.3s ease;

  /* grid-column-gap: 50px; */

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  max-height: 70vh;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
`;

const Right = styled.div`
  text-align: center;
  margin-top: 1em;
`;
