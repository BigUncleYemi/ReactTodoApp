import React, { Component } from 'react';
import '../css/App.css';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import Header from './Header';


class App extends Component {
  constructor() {
    super();
	
  this.addTaskToPanel = this.addTaskToPanel.bind(this);
  this.removeTask = this.removeTask.bind(this);

    this.state = {
      Tasks: {},
      tagline: "We Got You Covered"
    };
  }
  removeTask(key){
    const Tasks = {...this.state.Tasks};
    delete Tasks[key];
    this.setState({
      Tasks: {...Tasks}
    })
    
  }

  addTaskToPanel(Task){
    const Tasks = {...this.state.Tasks};
    const timestamp = Date.now();
    Tasks[`Task-${timestamp}`] = Task;
  	this.setState({ Tasks });
	  console.log(Tasks)
  };

  componentWillMount(){
    const localStorageRef = localStorage.getItem(`Task-${this.state.tagline}`)
    
    if (localStorageRef){
      this.setState({
        Tasks: JSON.parse(localStorageRef)
      });
    }
  }
  componentWillUpdate(nextProps, nextState){
    console.log( nextProps, nextState);
    localStorage.setItem(`Task-${this.state.tagline}`, JSON.stringify(nextState.Tasks));
  }

  render() {
    return (
		<div>
			<Header tagline={this.state.tagline}/>
      <div className="layout">
      	<Task Tasks={this.state.Tasks} tagline={this.state.tagline} removeTask={this.removeTask} />
     		<AddTaskForm addTask={this.addTaskToPanel}/>
      </div>   
      <center>
        <footer >
            <div className="footer">
                <span>built with &hearts; from big uncle yemi</span>
            </div>
        </footer>
      </center>
	 	</div>
    );
  }
}

export default App;
