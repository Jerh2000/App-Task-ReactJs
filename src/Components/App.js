import React, { Component } from "react";
import logo from "../logo.svg";
import "../CSS/App.css";
import { Tasks } from "../task.json";
import FormTask from "./FormTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    this.setState({
      Tasks: [...this.state.Tasks, task]
    })
  }

  render() {
    const task = this.state.Tasks.map((tasks, i) => {
      return (
        <div className="col-md-6">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header mt-0 mb-0">
              <h4 className="mt-0 mb-0 lead"> {tasks.Title} </h4>
            </div>
            <div className="card-body mt-0 mb-0">
              <h6 className="card-title lead mt-0 mb-0">Autor:</h6>
              <p>{tasks.Responsable}</p>
              <h6 className="card-title lead mt-0 mb-0">Description:</h6>
              <p className="card-text">{tasks.Description}</p>

              <h6 className="card-title lead mt-0 mb-0">Estimated Time:</h6>
              <p className="card-text">{tasks.EstimatedTime}</p>

              <h6 className="card-title lead mt-0 mb-0">Priority:</h6>
              <p className="card-text">
                <span class="badge badge-pill badge-success">
                  {tasks.Priority}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5">
              <FormTask onAddTask={this.handleAddTask} />
            </div>
            <div className="col-md-7">
              <div className="row">{task}</div>
            </div>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="display-1"> Bienvenido a React </p>
        </header>
      </div>
    );
  }
}

export default App;
