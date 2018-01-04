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
                <h2>{yemi.name} </h2>
                <h3>{yemi.time}</h3>
                <p>{yemi.venue}</p>
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