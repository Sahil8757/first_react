import logo from './logo.svg';
import './App.css';
import Country from './container/country';
import City from './container/city';
import CountryFun from './container/countryFun';
import CityFun from './container/cityFun';
import Time from './Time/Time';
import TimeFun from './Time/TimeFun';
// import Branch from './container/Branch';

function App() {


    
    return (
    <>
    <Country/>
    <City/>

      <h2>Function Based Component</h2>

    <CountryFun Gdp={5.8}/>
    <CityFun/>
    <Time/>
    <TimeFun/>
    {/* <Branch/> */}
    </>
  );
}

export default App;
        
