import React, { Component } from 'react';

export default class Task extends Component {

    constructor(props) {
        super(props)
        this.renderTask = this.renderTask.bind(this);
    }
    renderTask(key){
        const yemi = this.props.Tasks[key];
        const isUrgent = yemi.priority === 'URGENT';
        const buttonText = isUrgent ? 'Urgent!' : 'Free';
        const removeButton = <button className="remove" onClick={() => this.props.removeTask(key)}>&times;</button>
    return (
        <li key={key}>
          <div  className="task-layout">
                {removeButton}
                <p className="label">Task:</p>
                <h2>{yemi.name} </h2>
                <p className="label">Time:</p>
                <h3>{yemi.time}</h3>
                <p className="label">Venue:</p>
                <h3 className="venue">{yemi.venue}</h3>
                <p className="label">Priority:</p>
                <span disabled={isUrgent}>{buttonText}</span>           
            </div>
        </li>
      )
    }

    render() {
        const orderIds = Object.keys(this.props.Tasks);
    
        return (
                <ul className="task">
                    {
                        orderIds.map(this.renderTask)
                    }
                </ul>            
        );
    }
}