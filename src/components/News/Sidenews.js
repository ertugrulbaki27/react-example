import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from "./Error";

class Sidenews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&sortBy=publishedAt&apiKey=94a58e24476d44278f9ff7da1dcab638`;
        axios.post(url, {
            data: {
                news: {
                    title: 'bla bla',
                    description: 'boom'
                }
            }
        })

        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            })
    }


    renderItems() {
        if (!this.state.error) {
            return this.state.sidenews.map((item) => (
            <SingleSide key={item.url}
                item={item} />
            ));
        } else {
            return <Error/>
        }
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default Sidenews