import React from "react";

class PTCardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {title,style} =this.props;
    return (
      <div className="card text-center mb-2">
        <div className={style}>
          <h3>{title}</h3>
        </div>
      </div>
    );
  }
}

export default PTCardHeader;
