import { useState } from 'react';
import Statistic from '../Statistic/Statistic';
import style from './Search.module.css';



const Search = (props) => {
  const [value, setValue] = useState("");

  if (props.isFetching === 1) {
    return <div>zhdi</div>
   }

let findCountry = (cntr) => {
  console.log(cntr.Countries);
  
  return cntr.Countries.filter((e) => e.Country.toLowerCase().indexOf(value) > -1)
}

  return(
    <div>
        <form>
          <input
            type="text"
            placeholder="Search"
            className={style.Search}
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
          <Statistic countries={findCountry(props.covStat)} covStat={props.covStat} isFetching={props.isFetching} />   
    </div>  
  );


}



    export default Search;