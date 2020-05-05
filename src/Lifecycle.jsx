import React, { Component } from 'react';

class Lifecycle extends Component {
    state = {
        person: null
    };

    componentWillMount() {
        console.log("will mount");
    }

    componentDidMount() {
        console.log("did mount");
        fetch("https://randomuser.me/api")
            .then(response => response.json())
            .then(data => this.setState({ person: data.results[0] }))
    }

    componentWillReceiveProps() {
        console.log("receive props");
    }

    shouldComponentUpdate() {
        console.log("should update");
    }

    componentWillUpdate() {
        console.log("will update");
    }

    componentDidUpdate() {
        console.log("did update");
    }

    componentWillUnmount() {
        console.log("will unmount");
    }

    render() {
        const { person } = this.state; 
        return (
        <>
            {person ? (
                <>
                    <img src={person.picture.large} alt=""/>
                    <p>Title : {person.name.title}</p>
                    <p>Name : {person.name.first} {person.name.last}</p>
                    <p>City : {person.location.city}</p>
                    <p>State : {person.location.state}</p>
                    <p>Country : {person.location.country}</p>
                </>) : (
                <p>No data in the state, CLick the button above to fetch data from the API.</p>
            )}
        </>
        );
    }
}

export default Lifecycle;
