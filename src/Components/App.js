import React, { Component } from "react";
import logo from "../logo.svg";
import "../CSS/App.css";
import { Tasks } from "../task.json";
import FormTask from "./FormTask";


class App extends Component {
  constructor() {
    super();
    this.state = {
      Tasks,
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleAddTask(task) {
    this.setState({
      Tasks: [...this.state.Tasks, task],
    });
  }
  handleRemoveTask(index){
    this.setState({
        Tasks: this.state.Tasks.filter((e,i)=>{
          return i !== index
        })
      });
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
            <div className="card-footer">
              <button className="btn btn-success" onClick={this.handleRemoveTask.bind(this,i)}>Finished</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App backg">
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Home{" "}
              <span className="badge badge-light">
                {this.state.Tasks.length}
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link text-white" href="#">
                  Pending tasks
                </a>
                <a className="nav-item nav-link text-white" href="#">
                  Completed Tasks
                </a>
              </div>
            </div>
          </nav>
        </div>
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
        <header className="App-header sticky-bottom">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="display-1"> Desarrollado en React </p>
        </header>
      </div>
    );
  }
}

export default App;
