
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class SwimmingPools extends Component {

    state = { pools: [] };

    componentDidMount() {
        //ToDo: Add API call
        this.setState({
            pools: [
                { id: 1, name: "Sport City Loreto", length: "25m" },
                { id: 2, name: "Sports World Tlanepantla", length: "25m" },
                { id: 3, name: "Carril4to", length: "50m / 25m" },
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Elige tu alberca</h2>

                <ul>
                    {this.state.pools.map((m) => (
                        <li key={m.id}>
                            <Link to={`/swimming-pool/${m.id}`}>{m.name}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}