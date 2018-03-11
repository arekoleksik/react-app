import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/home/Home.component';
import About from './routes/about/About.component';
import Contact from './routes/contact/Contact.component';
import Api from './routes/api/api.component';
import {BrowserRouter, Route} from 'react-router-dom'
import SettingsRoute from './SettingsRoute';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Api" component={Api}/>
            <Route path="/Contact" component={SettingsRoute}/>
        </div>
    </BrowserRouter>,

  document.getElementById('root')
);
