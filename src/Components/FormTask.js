import React, { Component } from "react";

//Este componente corresponde al formulario donde se ingresara la informacion de una nueva tarea
class FormTasks extends Component {
  constructor() {
    super();
    this.state = {
      Title: "",
      Responsable: "",
      EstimatedTime: "",
      Description: "",
      Priority: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      Title: "",
      Responsable: "",
      EstimatedTime: "",
      Description: "",
      Priority: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container col-12 card">
        <h1 className="display-4">New Task</h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="tasktitle">Task title</label>
              <input
                required
                type="text"
                class="form-control"
                name="Title"
                onChange={this.handleInputChange}
                placeholder="Task title..."
              />
            </div>

            <div class="form-group col-md-6">
              <label for="responsable">Responsable</label>
              <input
                required
                type="text"
                class="form-control"
                name="Responsable"
                onChange={this.handleInputChange}
                placeholder="Responsable..."
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="estimatedtime">Estimated Time (days)</label>
              <input
                required
                type="number"
                class="form-control"
                name="EstimatedTime"
                onChange={this.handleInputChange}
                placeholder="Estimated time..."
              />
            </div>

            <div class="form-group col-md-6">
              <label for="priority">Priority</label>
              <select
                required
                name="Priority"
                className="form-control"
                onChange={this.handleInputChange}
              >
                <option selected disabled>
                  Choose...
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                required
                class="form-control"
                name="Description"
                rows="3"
                onChange={this.handleInputChange}
                placeholder="Description"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12 d-flex justify-content-center">
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormTasks;
