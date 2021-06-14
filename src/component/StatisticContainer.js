import axios from 'axios';
import {useState, useEffect} from 'react';
import Statistic from './Statistic';

const StatisticContainer = () => {
    const [covStat, setCovStat] = useState([]);
    const [isFetching, setIsFetching] = useState(1);
    
    useEffect(() => {
        axios.get("https://api.covid19api.com/summary").then(res => {
            setCovStat(res.data);
            console.log(res.data);
            setIsFetching(0);
            })
    },[isFetching])
     
       return (
        <div>
           <Statistic covStat={covStat} isFetching={isFetching} />
        </div>
    )
}

export default StatisticContainer;