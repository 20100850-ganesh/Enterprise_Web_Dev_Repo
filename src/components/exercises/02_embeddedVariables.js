import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  let modules = [
    {
      m_name: "Enterprise Web Dev",
      m_nolectures: 2,
      m_nopracticles: 2,
    },
    {
      m_name: "Data Mining",
      m_nolectures: 3,
      m_nopracticles: 4,
    },
  ];

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
            <td>{modules[0].m_name}</td>
            <td>{modules[0].m_nolectures}</td>
            <td>{modules[0].m_nopracticles}</td>
          </tr>
          <tr>
            <td>{modules[1].m_name}</td>
            <td>{modules[1].m_nolectures}</td>
            <td>{modules[1].m_nopracticles}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
