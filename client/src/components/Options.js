import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Options extends Component {
    render() {
        return (
            <div>
                <h2>
                    <NavLink to="/Browse" activeClassName="is-active">Browse</NavLink>
                    <NavLink to="/Add" activeClassName="is-active">Add</NavLink>
                    <NavLink to="/Delete" activeClassName="is-active">Delete</NavLink>
                    <NavLink to="/Modify" activeClassName="is-active">Modify</NavLink>
                </h2>
            </div>
        );
    }
}

export default Options;