import React, { Component } from 'react';
import '../css/slide.css';
import '../css/advert1.css';
import '../css/advert.css';
import '../css/footer.css';
import Slide from '../components/Slide';
import HomeScreenProducts from '../components/HomeScreenProducts';
import MoreHomeScreenProducts from '../components/MoreHomeScreenProducts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { scrollleft, scrollright } from '../actions/action';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

class HomePage extends Component{
    constructor(props){
        super(props);
        this.scrollleft = scrollleft.bind(this);
        this.scrollright = scrollright.bind(this);
    }
    
    state = {
        value: 0,
        current: 0,
      }

    render() {
        return (
            <div>
                <Header />
                <Slide leftClick={this.scrollleft} rightClick={this.scrollright} value={this.state.value}/>
                <HomeScreenProducts />
                <MoreHomeScreenProducts />
                <Footer />
            </div>
        );
    }
}
export default HomePage;