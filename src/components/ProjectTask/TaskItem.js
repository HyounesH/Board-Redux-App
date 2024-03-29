import React from "react";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: projectSequence</div>
        <div className="card-body bg-light">
          <h5 className="card-title">summary</h5>
          <p className="card-text text-truncate ">acceptanceCriteria</p>
          <a href="?" className="btn btn-primary">
            View / Update
          </a>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default TaskItem;
