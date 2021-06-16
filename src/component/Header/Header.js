import style from './Header.module.css';

const Header = (props) => {

    return (
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
    )
}

export default Header;