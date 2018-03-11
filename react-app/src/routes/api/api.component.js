import React, { PureComponent } from 'react';
import Header from '../../components/header/Header.component'
// import Footer from '../../components/footer/Footer.component'
// import Section from '../../components/section/Section.component'
import '../../App.css';
import ApiList from './list.component'


class Api extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded: false,
            items:[]
        }
    }

    componentWillMount(){
        fetch('http://nflarrest.com/api/v1/team')
            .then(res => res.json())
            .then(
                (result)=>{
                    console.log('result');
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(this.state);
                },
                (error)=> {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const {error,isLoaded,items} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return(
                <div className="About">
                    <Header name="About"/>
                    <div> Loading...</div>
                </div>
            )
        }else {
            return (
                <div className="About">
                    <Header name="About"/>
                    <p className="About-intro">
                        About <code>src/About.js</code> and save to reload.
                    </p>
                    <ApiList items={items}/>

                </div>
            )
        }

    }
}


export default Api;