import React, {Component} from 'react';
import axios from 'axios'

class Modify extends Component {
    handler = (event) => {
        axios.post("http://localhost:5000/api/books/dupka", {data: "czesc"}).then(res => {console.log(res.data)}).catch(e => console.log(e));

        // axios({
        //     url: 'http://localhost:5000/api/books/dupka',
        //     method: 'post',
        //     data: {
        //       foo: 'bar'
        //     }
        //   })
    }

    render(){
        return (
            <div>
                <p>Tu będzie layout modyfikacji</p>
                <button onClick={this.handler}>Kau</button>
            </div>
        );
    }
}

export default Modify;