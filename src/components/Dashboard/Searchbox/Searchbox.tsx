import { setSearchQuery } from '../../../store/dashboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { SearchboxWrapper, SearchInput } from './SearchboxStyles';

const Searchbox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.reducer.dashboard.searchQuery
  );
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };
  return (
    <SearchboxWrapper>
      <label htmlFor="filter">Filter:</label>
      <SearchInput
        type="text"
        id="filter"
        onChange={handleSearch}
        value={searchQuery}
        placeholder="Search item by name or category"
      />
    </SearchboxWrapper>
  );
};

export default Searchbox;
