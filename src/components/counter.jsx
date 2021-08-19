import React, { Component } from 'react';

class Counter extends Component {


    render() {
        return (<div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>{' '}
            <button onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-primary btn-sm">
                Increment</button>{' '}
            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger sm">
                Delete</button>
        </div>);
    }



    getBadgeClasses() {
        let classes = "badge bg-Info bg";
        classes += (this.props.counter.value === 0) ? "Success" : "Info";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
};


export default Counter;