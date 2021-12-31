import styled from "styled-components";
import Title from "../../components/Title";
import Text from "../../components/Text";
import getWindowDimensions from "../../common/Dimentions";
import IconBox from "../../components/IconBox";

const Services = () => {
  const { width } = getWindowDimensions();

  return (
    <Container id="services">
      {width > 800 ? (
        <>
          <Left>
            <Title color="color-2" text="Tjenester" />
            <Text
              text="Vi tilbyr nå 3 ulike typer tjenester. PVC, Trerammer og Skyvedørssystemer. Dette er 3 tjenester med ulik vanskelighets og kompleksitetsgrad og har derfor ulik pris. Trykk på tjenesten du ønsker for mer informasjon."
              color="color-2"
            />
          </Left>
          <Right>
            <IconContainer>
              <IconBox
                src="/assets/logos/window7.png"
                alt="mojo-logo"
                text="Pris fra 9000 kr"
                title="PVC"
              />
              <IconBox
                src="/assets/logos/window5.png"
                alt="mojo-logo"
                text="Pris fra 5000 kr"
                title="Trerammer"
              />
              <IconBox
                src="/assets/logos/window2.png"
                alt="mojo-logo"
                text="Pris fra 12000 kr"
                title="Skyvedørssystemer"
              />
            </IconContainer>
            {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}
          </Right>
        </>
      ) : (
        <>
          <Left>
            <Title color="color-2" text="Tjenester" />

            <Text
              text="Vi tilbyr nå 3 ulike typer tjenester. PVC, Trerammer og Skyvedørssystemer. Dette er 3 tjenester med ulik vanskelighets og kompleksitetsgrad og har derfor ulik pris. Trykk på tjenesten du ønsker for mer informasjon."
              color="color-2"
            />
          </Left>

          <IconContainer>
            <IconBox
              src="/assets/logos/window7.png"
              alt="mojo-logo"
              text="Pris fra 9000 kr"
              title="PVC"
            />
            <IconBox
              src="/assets/logos/window5.png"
              alt="mojo-logo"
              text="Pris fra 5000 kr"
              title="Trerammer"
            />
            <IconBox
              src="/assets/logos/window2.png"
              alt="mojo-logo"
              text="Pris fra 12000 kr"
              title="Skyvedørssystemer"
            />
          </IconContainer>
        </>
      )}
    </Container>
  );
};

export default Services;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  transition: grid-template-columns 0.3s ease;

  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-rows: 1fr;
  }
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  @media (max-width: 800px) {
    grid-template-rows: 1fr;
  }
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Right = styled.div`
  margin: 0;
`;
