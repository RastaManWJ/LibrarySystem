import React, {Component} from 'react';
import Find from './Find';
import BrowseList from './BrowseList'
import axios from 'axios';


class Browse extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {books: []}
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/books/browse")
                .then(res => {this.setState({books: res.data})})
                .catch(e => console.log(e));
    }

    render(){
        if(this.state.books.length){
        return (
            <div>
                <p>Tu będzie layout wyszukiwania</p>
                <Find />
                <BrowseList items={this.state}/>
            </div>
        );
        }
        else {
            return (
            <div>
                Brak danych
            </div>
            );
        }
    }
}

export default Browse;