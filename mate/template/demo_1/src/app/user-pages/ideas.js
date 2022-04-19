import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { Form } from 'react-bootstrap';
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {


  render () {
    return (
      <div className="col-12 grid-margin stretch-card">
        <p> Display card view of all ideas</p>
      </div>

    );
  }
}

export default Dashboard;
