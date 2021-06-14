import style from './Statistic.module.css'

const Statistic = (props) => {
   
    if (props.isFetching === 1) {
        return <div>zhdi</div>
    }
    
    console.log(props);
    
    return (
        <div>
            <div className={style.totalCard}>
                <div className={style.statistic}>
                    <div>
                        <h3>newConfirmed:</h3> 
                        {props.covStat.Global.NewConfirmed}
                    </div>
                    <div>
                        <h3>TotalDeaths:</h3> 
                        {props.covStat.Global.TotalDeaths}
                    </div>
                    <div>
                        <h3>TotalConfirmed:</h3> 
                        {props.covStat.Global.TotalConfirmed}
                    </div>
                    <div>
                        <h3>TotalRecovered:</h3> 
                        {props.covStat.Global.TotalRecovered}
                    </div>
                </div>
                <div className={style.title}>
                    <div className={style.number}>
                     <div className={style.card}>№</div>
                    </div>
                    <div className={style.cards}>
                        <div className={style.card}>Country</div>
                    </div>
                    <div className={style.statCard}>
                        <div className={style.card}>TotalConfirmed</div>
                    </div>   
                </div>
                <div className={style.countryList}>
                    <div className={style.number}>
                        {props.covStat.Countries.map((nbr, i) => (
                            <div className={style.card} key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <div className={style.cards}>
                        {props.covStat.Countries.map((ctr, index) => (
                        <div className={style.card} key={index}>{ctr.Country}</div>)
                            )},
                    </div>
                    <div className={style.statCard}>
                        {props.covStat.Countries.map((el, ind) => (
                            <div className={style.card} key={ind}>{el.TotalConfirmed}</div>)
                        )}  
                    </div>
                </div>        
            </div>   
        </div>
    )
         
}

export default Statistic;