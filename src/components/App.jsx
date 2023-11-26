import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactsWrapper, Title, Wrapper } from './GlobalStyle';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <ContactsWrapper>
        <Filter />
        <ContactList />
      </ContactsWrapper>
    </Wrapper>
  );
};
