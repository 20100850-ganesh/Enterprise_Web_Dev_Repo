import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name of the course</th>
            <th>No of lectures</th>
            <th>No of practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Mining</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Enterprise Web Dev</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
