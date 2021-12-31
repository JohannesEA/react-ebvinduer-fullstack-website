import styled from "styled-components";
import Text from "../../components/Text";
import Button from "../../components/Button";
import getWindowDimensions from "../../common/Dimentions";
import { Link } from "react-scroll";

const Hero = () => {
  const { width } = getWindowDimensions();

  return (
    <Container id="hero">
      {width > 800 ? (
        <>
          <Left>
            {/* <Title color="color-2" text="MoJo Websites" /> */}
            <span></span>
            <Text
              text="Vi tilbyr nå glass og vinduer av høy kvalitet til veldig gode priser!"
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
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Tjenester" bc="color-1" />
              </Link>
            </ButtonContainer>
          </Left>
          <Right>
            <Image src="/assets/logos/logo3.png" alt="ebvinduer-logo" />
          </Right>
        </>
      ) : (
        <>
          <Right>
            <Image src="/assets/logos/logo3.png" alt="ebvinduer-logo" />
          </Right>
          <Left>
            <Text
              text="Vi tilbyr nå glass og vinduer av høy kvalitet til veldig gode priser!."
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
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
              >
                <Button text="Tjenester" bc="color-1" />
              </Link>
            </ButtonContainer>
          </Left>
        </>
      )}
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 12em;
  margin: 0 auto;
  flex-direction: row;

  @media (max-width: 800px) {
    min-width: 11em;
  }

  @media (max-width: 250px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
  text-align: center;
`;

const Image = styled.img`
  transition: max-height 0.3s ease;
  max-height: 25em;

  @media (max-width: 800px) {
    max-height: 22em;
  }

  @media (max-width: 400px) {
    max-height: 20em;
  }

  @media (max-width: 350px) {
    max-height: 18em;
  }

  @media (max-width: 300px) {
    max-height: 16em;
  }

  @media (max-width: 250px) {
    max-height: 14em;
  }
`;
