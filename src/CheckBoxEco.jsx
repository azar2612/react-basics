import React, { Component } from 'react';

class CheckBoxOptions extends Component {
    state = {
        metal: false,
        wood: false,
        plastic: false,
    };

    handleChange = (e) => {
        const { name, checked } = e.target;
        const { add, remove } = this.props;
        this.setState({
            [name]: checked
        });
        if (checked) {
            add(name);
        } else {
            remove(name);
        }
    }

    render() {
        const { metal, wood, plastic} = this.state;
        return (
            <>
                <input 
                    type="checkbox" 
                    name="metal"
                    checked={metal}
                    onChange={this.handleChange}    
                />
                Metal
                <input 
                    type="checkbox" 
                    name="wood"
                    checked={wood}
                    onChange={this.handleChange}      
                />
                Wood
                <input 
                    type="checkbox" 
                    name="plastic"
                    checked={plastic}
                    onChange={this.handleChange}      
                />
                Plastic
            </>
        )
    }
}


class CheckBoxEco extends Component {
    
    state = {
        selected: []
    }

    addSelected = select => this.setState(({ selected}) => ({ selected: [...selected, select] }));

    removeSelected = select =>  this.setState({ selected: this.state.selected.filter(s => s !== select)});

    render() {
        console.log(this.state.selected);
        return (
            <>
                <h3>Material</h3>
                <CheckBoxOptions add={this.addSelected} remove={this.removeSelected}/>
                {this.state.selected && this.state.selected.map(s => <p>{s}</p>)}
            </>
        )
    }
};

export default CheckBoxEco;
