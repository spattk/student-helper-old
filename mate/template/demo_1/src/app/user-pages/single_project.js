import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { Form } from 'react-bootstrap';
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"
import YoutubeEmbed from "./you-tube";
import { CCardImage } from '@coreui/react';
export class Single_Project extends Component {


  render () {
    return (
      <div class="video">
        <h2>Student Helper</h2>
        <h4>DOMAIN: Software Development</h4>
        <div class="row">
        <div className="col-6 grid-margin stretch-card">
            To get a aggregated inventory of all previous keystone and capstone projects for students to lookup as well as for faculty to check for plagiarism
            Easy collaboration between student team and faculty
            Easy transition and collaboration between the keystone and capstone project teams
            Helpful in planning and scheduling courses for the upcoming quarter
        </div>
        <div className="col-6 grid-margin stretch-card">
            <img src={require("../../assets/images/GitHub-Mark.png")} alt="logo" width="170" height="170"/>
        </div>
        </div>
        <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    );
  }
}

export default Single_Project;
