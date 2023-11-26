import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AddBtn,
  ErrorWrapper,
  FieldWrapper,
  StyledForm,
  StyledLable,
} from './ContactForm.styled';
import { RiUserAddFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactSlice';

const PhonebookValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short! Must be min 1 letter')
    .max(30, 'Too Long! Must be no more than 30 letters')
    .required('No valide name. Must be min 1 letter'),
  number: Yup.string()
    .min(7, 'Too Short! Must be min 7 numbers')
    .max(11, 'Too Long! Must be no more than 11 numbers')
    .required('No valide phone number. Must be min 7 max 11 numbers'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contactList);

  const onSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const dublicateContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (dublicateContact) {
      alert(
        'Contact with this name already exists. Please enter a different name.'
      );
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhonebookValidSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <StyledLable>
          Name
          <FieldWrapper name="name" />
          <ErrorWrapper name="name" component="span" />
        </StyledLable>

        <StyledLable>
          Number
          <FieldWrapper type="tel" name="number" />
          <ErrorWrapper name="number" component="span" />
        </StyledLable>

        <AddBtn type="submit">
          <RiUserAddFill size={16} /> Add contact
        </AddBtn>
      </StyledForm>
    </Formik>
  );
};
