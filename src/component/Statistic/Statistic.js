import style from './Statistic.module.css'


const Statistic = (props) => {
    
    return (
        <div>
            <div className={style.totalCard}>               
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
                        {props.countries.map((nbr, i) => (
                            <div className={style.card} key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <div className={style.cards}>
                        {props.countries.map((ctr, index) => (
                        <div className={style.card} key={index}>{ctr.Country}</div>)
                            )},
                    </div>
                    <div className={style.statCard}>
                        {props.countries.map((el, ind) => (
                            <div className={style.card} key={ind}>{el.TotalConfirmed}</div>)
                        )}  
                    </div>
                </div>        
            </div>   
        </div>
    )       
}

export default Statistic;