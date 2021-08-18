import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };


    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    };




    render() {
        return (<div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>{' '}
            <button onClick={this.handleIncrement}
                className="btn btn-primary btn-sm">
                Increment</button>{' '}
            <button
                onClick={() => this.props.onDelete(this.props.id)}
                className="btn btn-danger sm">
                Delete</button>
        </div>);
    }



    getBadgeClasses() {
        let classes = "badge bg-Info bg";
        classes += (this.state.value === 0) ? "Success" : "Info";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
};


export default Counter;