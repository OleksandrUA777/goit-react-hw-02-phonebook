import propTypes from 'prop-types';
export const ContactList = ({ dataContact, onDelete }) => {
  return (
    <>
      <ul>
        {dataContact.map(data => {
          return (
            <li key={data.id}>
              {data.name} : {data.number}
              <button id={data.id} onClick={onDelete}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
ContactList.propTypes = {
  dataContact: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
};
