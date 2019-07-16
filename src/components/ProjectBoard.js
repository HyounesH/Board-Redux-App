import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "./ProjectTask/TaskItem";
import PTCardHeader from "./ProjectTask/PTCardHeader";

class ProjectBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Link to="/addPT" className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {
          //<!-- Backlog STARTS HERE -->
        }
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PTCardHeader
                title="To Do"
                style="card-header bg-secondary text-white"
              />

              {
                //<!-- SAMPLE PROJECT TASK STARTS HERE -->
              }
              <TaskItem />

              {
                //<!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
            <div className="col-md-4">
              <PTCardHeader
                title="In Progress"
                style="card-header bg-primary text-white"
              />
              {
                //<!-- SAMPLE PROJECT TASK STARTS HERE -->
                //<!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
            <div className="col-md-4">
              <PTCardHeader
                title="Done"
                style="card-header bg-success text-white"
              />
              {
                //<!-- SAMPLE PROJECT TASK STARTS HERE -->
                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
              }
            </div>
          </div>
        </div>
        {
          //<!-- Backlog ENDS HERE -->
        }
      </div>
    );
  }
}

export default ProjectBoard;
