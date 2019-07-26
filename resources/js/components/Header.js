import React,{Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
class Header extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>

        )
    }
}
export default Header;