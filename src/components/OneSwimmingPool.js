import React, { Component, Fragment } from 'react';

export default class OneSwimmingPool extends Component {

    state = { swimmingPool: {} };

    componentDidMount() {
        this.setState({
            swimmingPool: {
                id: this.props.match.params.id,
                name: "Same pool",
                length: "25m",
            }
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Swimming Pool: {this.state.swimmingPool.name}</h2>

                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><strong>Title: </strong></td>
                            <td>{this.state.swimmingPool.name}</td>
                        </tr>
                        <tr>
                            <td><strong>Length: </strong></td>
                            <td>{this.state.swimmingPool.length}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}