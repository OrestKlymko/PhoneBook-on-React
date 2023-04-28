import css from './contactlist.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/API/operations';
import Loader from 'components/loader';

export function ContactList() {
  const contacts = useSelector(state => state.newContact.items);
  const filter = useSelector(state => state.filter);
  const isLoad = useSelector(state => state.newContact.isLoading);

  const dispatch = useDispatch();

  return (
    <>
      {isLoad && <Loader />}
      <ul>
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter))
          .map(contact => {
            return (
              <li key={contact.name}>
                {contact.name}: {contact.number}
                <button
                  className={css.deleteBtn}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
