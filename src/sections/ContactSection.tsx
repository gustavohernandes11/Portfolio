import { ContactForm } from "components/ContactForm";
import { Heading } from "components/Heading";
import { SectionContainer } from "components/SectionContainer";

export const ContactSection = () => (
    <SectionContainer id="contact">
        <Heading>Contato</Heading>
        <ContactForm />
    </SectionContainer>
);
