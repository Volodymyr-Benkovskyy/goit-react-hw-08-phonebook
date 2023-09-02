
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter}  from 'components/redux/filterSlice';

const Filter = () => {
   const dispatch = useDispatch();
  return (
    <div className={s.filterBox}>
      <label className={s.filterText}>Find contacts by name</label>
      <input
        className={s.filterInput}
        type="text"
        onChange={(event) => {
         dispatch(setFilter(event)) ;
        }}
      />
    </div>
  );
};


export default Filter;
