import propTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input type="text" onChange={onChange} value={value} />
      </label>
    </>
  );
};
Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
