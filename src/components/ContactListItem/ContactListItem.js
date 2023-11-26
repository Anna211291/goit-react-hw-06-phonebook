import { RiDeleteBinLine, RiContactsFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import {
  ContactInfo,
  DelBtn,
  StyledContactListItem,
} from './ContactListItem.styled';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactList);
  const filters = useSelector(state => state.filters);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  console.log(filters);
  return (
    <>
      {filterContacts.map(({ name, number, id }) => (
        <StyledContactListItem key={id}>
          <ContactInfo>
            <RiContactsFill size={22} />
            {name}: {number}
          </ContactInfo>
          <DelBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            <RiDeleteBinLine size={20} />
          </DelBtn>
        </StyledContactListItem>
      ))}
    </>
  );
};
