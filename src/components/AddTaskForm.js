import React, { Component } from 'react';

class AddTaskForm extends Component {
    createTask(e) {
		e.preventDefault();
		var Task =  {
			name: this.name.value,
			date: this.date.value,
			time: this.time.value,
			venue: this.venue.value,
      priority: this.priority.value,
      notes: this.note.value
		};
    this.props.addTask(Task);
    this.taskForm.reset();
	} 
  render() {
    return (
      <div className="App">
        <center>
          <form  ref={(input) => this.taskForm = input} className="todo-edit" onSubmit={(e) => this.createTask(e)}>
            <label htmlFor="nameTask">Enter Name of Task</label>
            <input ref={(input) => this.name = input } type="text" id="nameTask" placeholder="e.g To play with Bee-Jay" required />
						<label htmlFor="nameTask">Enter Name of Task</label>
						<input ref={(input) => this.date = input } type="date" id="dateTask" required />
            <label htmlFor="timeTask">Set Task Due Time </label>
            <input ref={(input) => this.time = input } type="time" id="timeTask" required />
            <label htmlFor="venueTask">Enter Venue of Task</label>
            <input ref={(input) => this.venue = input } type="text" id="venueTask" placeholder="e.g Mayfair, Big Ben"/>
            <label htmlFor="priortyTask">Select Priority of Task</label>
            <select ref={(input) => this.priority = input } > 
              <option value="Free">Free</option>
              <option value="URGENT">Urgent!</option>
            </select>
            <p id="notestask">Notes</p>
            <textarea ref={(input) => this.note = input } name="notesTask" id="" cols="30" rows="10"></textarea>
            <button type="submit">Save Task</button>		
          </form>
        </center>
      </div>
    );
  }
}

export default AddTaskForm;
