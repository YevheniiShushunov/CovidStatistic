
class SearchInfo extends Component {
    state = {
      filterText: "",
    };
  
    onFilterTextChange = (filterText) => {
      this.setState({ filterText: filterText });
    };
  
    handleFilterTextChange = (e) => {
      this.onFilterTextChange(e.target.value);
    };
  
    handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    };

    render() {
        const rows = [];
        const { filterText } = this.state;
        const Countries = this.props.Countries;
    
        return (
          <Card className="card card-form">
            <CardHeader
              title=""
              subheader=""
            />
            <div className="space">
              <form noValidate>
                <input
                  type="text"
                  list="data"
                  placeholder=""
                  value={filterText}
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleFilterTextChange}
                />
                <datalist id="data">
                  {Countries &&
                    Countries.map((item, key) => (
                      <option key={key} value={item.Country} />
                    ))}
                </datalist>
              </form>
              <div>
                {Countries &&
                  Countries.map((item, key) => {
                    if (item.Country.indexOf(filterText) === -1) {
                      return;
                    }
                    rows.push(<SearchCountryInfo key={key} Countries={item} />);
                  })}
                <div>{rows.length > 2 ? "" : rows}</div>
              </div>
            </div>
          </Card>
        );
      }
    }
