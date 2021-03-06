  import React, { Component } from 'react';
  import CSSTransitionGroup from 'react-addons-css-transition-group';


  export default class Task extends Component {

      constructor(props) {
          super(props)
          this.renderTask = this.renderTask.bind(this);
      }
      renderTask(key){
          const yemi = this.props.Tasks[key];
          const isUrgent = yemi.priority === 'URGENT';
          const buttonText = isUrgent ? 'Urgent!' : 'Free';
          const removeButton = <button className="remove" onClick={() => this.props.removeTask(key)}>&times;</button>;
          const updateButton = <i className="fa fa-pen" style={{margin: '5px 10px', cursor: 'pointer'}} onClick={() => this.props.UpdateTask(key)}/>;
      return (
          <li key={key}>
            <div  className="task-layout">
                <div style={{ display: 'flex'}}>
                  {removeButton}
                  {updateButton}
                </div>
                  <p className="label">Task:</p>
                  <h2>{yemi.name} </h2>
                  <p className="label">Date:</p>
                  <h3>{yemi.date}</h3>
                  <p className="label">Time:</p>
                  <h3>{yemi.time}</h3>
                  <p className="label">Venue:</p>
                  <h3 className="venue">{yemi.venue}</h3>
                  <p className="label">Priority:</p>
                  <span disabled={isUrgent}>{buttonText}</span>
                  <p className="notes">{yemi.notes}</p>           
              </div>
          </li>
        )
      }

      render() {
          const orderIds = Object.keys(this.props.Tasks);

          return (
                  <CSSTransitionGroup
                  className="task"
                  component="ul"
                  transitionName="task"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                      {
                          orderIds.map(this.renderTask)
                      }
                  </CSSTransitionGroup>           
          );
      }
  }