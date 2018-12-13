import React, {Component} from 'react';

class Find extends Component {
    render(){
        return (
            <div>
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
                    <input type="submit" value="Find" /><br />
                </form>
            </div>
        );
    }
}

export default Find;