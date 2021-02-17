import React, { Component } from 'react';
import { Cards, Chart, CountryPicker, NavBar } from "./components";
import FetchData from "./api/index";
import styles from './App.module.css';
import coronaImage from "../src/images/image.png"



class App extends Component {
  state = {
    data: {},
    country: ''
  }

  handleCountryChange = async (country) => {
    const fetchData = await FetchData(country)
    this.setState({ data: fetchData, country: country })
  }

  async componentDidMount() {
    const data = await FetchData()
    this.setState({ data })
  }
  render() {
    const { data, country } = this.state
    return (
      <div>
        <NavBar />
        <div className={styles.container}>


          <div >
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
