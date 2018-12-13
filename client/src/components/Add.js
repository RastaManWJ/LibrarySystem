import React, {Component} from 'react';

class Add extends Component {
    render(){
        return (
            <div>
                <p>Tu będzie layout dodawania</p>
                <form>
                    Title:
                    <input type="text" name="title" /><br />
                    Author:
                    <input type="text" name="author" /><br />
                    ISBN:
                    <input type="text" name="isbn" /><br />
                    Genre:
                    <input type="text" name="genre" /><br />
                    Publisher:
                    <input type="text" name="publisher" /><br />
                    Release date:
                    <input type="date" name="releasedate" /><br />
                    Description:
                    <textarea name="description" cols="40" rows="5" /><br />
                    <input type="submit" value="Submit" /><br />

                </form>
            </div>
        );
    }
}

export default Add;