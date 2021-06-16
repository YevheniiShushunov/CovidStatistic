import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';

const StatisticContainer = () => {
    const [covStat, setCovStat] = useState([]);
    const [isFetching, setIsFetching] = useState(1);
    
    useEffect(() => {
        axios.get("https://api.covid19api.com/summary").then(res => {
            setCovStat(res.data);
            setIsFetching(0);
            })
    },[isFetching])

    if (isFetching === 1) {
        return <div>zhdi</div>
    }
     
       return (
        <div>
            <Header covStat={covStat} />
            <Search covStat={covStat} isFetching={isFetching}/>          
        </div>
    )
}

export default StatisticContainer;