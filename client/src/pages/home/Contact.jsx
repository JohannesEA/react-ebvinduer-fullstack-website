import styled from "styled-components";
import { useState } from "react";
import Button from "../../components/Button";
import { send } from "emailjs-com";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Title from "../../components/Title";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
    email: "",
    phonenumber: "",
    title: "",
    message: "",
  });

  const validation = (email, phonenumber, title, message) => {
    if (email !== "" && phonenumber !== "" && title !== "" && message !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (
      validation(
        requestMessage.email,
        requestMessage.phonenumber,
        requestMessage.title,
        requestMessage.message
      )
    ) {
      send(
        "service_emat5xm",
        "template_82mchh6",
        requestMessage,
        "user_dtdFvD2gfolxxeHy6ZvlR"
      ).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setErrorMessage("");
          setConfirmationMessage(
            "Takk for at du ønsker å komme i kontakt med oss. Vi svarer så fort vi kan."
          );
        },
        function (error) {
          console.log("FAILED...", error);
          setErrorMessage("Noe gikk galt.");
        }
      );
    } else {
      setErrorMessage("Alle felt må være fylt ut. Prøv igjen.");
    }
  };

  const handleChange = (e) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  return (
    <Container id="contact">
      <Title color="color-2" text="Kontakt" data-aos="fade-up"></Title>

      <ContactInfoContainer>
        <IconBox src="" text="ebvinduer@gmail.com" title="Epost" />
        <IconBox src="" text="+47 90027989" title="Mobilnummer" />
      </ContactInfoContainer>

      <ContactForm
        data-aos="fade-up"
        name="myForm"
        onSubmit={handleSendRequest}
      >
        <ContactInfoContainer>
          <IconBox>
            <AiOutlinePhone color="black" fontSize={20} />
            <Text>+47 90027989</Text>
          </IconBox>
          <IconBox>
            <AiOutlineMail color="black" fontSize={20} />
            <Text>ebvinduer@gmail.com</Text>
          </IconBox>
        </ContactInfoContainer>
        {/* <Label>Email</Label> */}
        <Input
          type="text"
          placeholder="Epost"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.email}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Mobilnummer"
          name="phonenumber"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.phonenumber}</ErrorMessage> */}

        <Input
          type="text"
          placeholder="Tittel"
          name="title"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.title}</ErrorMessage> */}

        <TextArea
          type="text"
          placeholder="Melding"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        {/* <ErrorMessage>{messageState.message}</ErrorMessage> */}

        <Button
          text="Send"
          bc="color-2"
          btnOnClick={handleSendRequest}
        ></Button>
        {confirmationMessage.length > 0 && (
          <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>
        )}

        {errorMessage.length > 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ContactForm>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  flex-direction: column;
  text-align: center;
  border-radius: 1em;
  padding: 1em 1em 0 1em;
  background-color: #fff;
  box-shadow: 0px 0px 4px 2px #e1f5ff;
  width: 80%;
`;

// const Label = styled.label`
//   /* align-self: flex-start; */
//   font-size: 20px;
//   color: black;
// `;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  min-height: 4em;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #e1f5ff;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  padding: 5px;
  width: 100%;
  max-width: 100%;
  font-size: 1.2rem;
  min-height: 10em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
`;
const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: #032859;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-left: 0.5em;

  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
  @media (max-width: 280px) {
    font-size: 0.6rem;
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const IconBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
