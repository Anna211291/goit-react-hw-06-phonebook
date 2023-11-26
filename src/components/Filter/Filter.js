import { RiUserSearchFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { contactFilter } from 'redux/filtersSlice';
import { FilterLable, InputdWrapper, StyledFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  return (
    <StyledFilter>
      <FilterLable>
        Find contacts by name <RiUserSearchFill />
      </FilterLable>
      <InputdWrapper
        type="text"
        value={filters}
        onChange={evt => dispatch(contactFilter(evt.target.value))}
        placeholder="Filter by name..."
      />
    </StyledFilter>
  );
};
