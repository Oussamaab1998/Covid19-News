import React from 'react';


import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImages from './images/image.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavgationBar/NavigationBar';
import { Home } from './components/Options/Home';
import { About } from './components/Options/About';
import { NoMatch } from './components/Options/NoMatch';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
    state = {
        data: {},
        country : '',
    }



    async componentDidMount () {
        const fetchedData = await fetchData ();
        this.setState({ data : fetchedData });
    }
    handleCountryChange = async (country) => {
        console.log(country);
        const fetchedData = await fetchData (country);
        console.log(fetchedData);
        this.setState({ data : fetchedData, country:country });
    }

    render() {
        const {data, country} = this.state;
        return(
           /* <React.Fragment>
                 <Router>
                   
                    <Sidebar />
                    <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/NoMatch" render={props => <NoMatch {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Switch>
                 </Router>
            </React.Fragment>*/

            <div className={styles.container}>
                <img className={styles.image} src={coronaImages} alt="Covid-19" />
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country = {country} />
            </div>
        )
    }
}
export default App;     