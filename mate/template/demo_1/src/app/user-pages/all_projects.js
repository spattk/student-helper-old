import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { Form } from 'react-bootstrap';
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"
import {CCard} from '@coreui/react';
import {CCardBody} from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardTitle } from '@coreui/react';
import { CCardText } from '@coreui/react';
import { CButton } from '@coreui/react'

export class All_Project extends Component {


  render () {
    return (
      <div class="row">
        <div className="col-6 grid-margin stretch-card">
          <CCard style={{ width: '18rem' }}>
          <CCardBody>
            <CCardTitle>Project 1</CCardTitle>
            <CCardText>
            Project 1 description
            </CCardText>
            <CButton href="/user-pages/single-project">Link to project</CButton>
          </CCardBody>
          </CCard>
        </div>
        <div className="col-6 grid-margin stretch-card">
          <CCard style={{ width: '22rem' }}>
          <CCardBody>
            <CCardTitle>Project 2</CCardTitle>
            <CCardText>
            Project 2 description
            </CCardText>
            <CButton href="/user-pages/single-project">Link to project</CButton>
          </CCardBody>
          </CCard>
        </div>
      </div>
    );
  }
}

export default All_Project;
