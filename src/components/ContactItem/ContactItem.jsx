import PropTypes from 'prop-types';
import { HiUserMinus } from 'react-icons/hi2';
import { Item, Name, Number, RemoveBtn } from './ContactItem.styled';

export function ContactItem({ contacts, onRemoveContact }) {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        // console.log(typeof id);

        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <RemoveBtn type="button" onClick={() => onRemoveContact(id, name)}>
              <HiUserMinus />
            </RemoveBtn>
          </Item>
        );
      })}
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};
