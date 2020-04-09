import React from 'react';
import { NavLink, Route, Redirect} from 'react-router-dom';
import {HTMLCourses, CSSCourses, JSCourses} from '../data/courses';
import CourseContainer from './courses/CourseContainer'

const Courses = ({ match }) => ( // using match object to dynamically use route
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Using redirect to reroute html route when users first is on Courses NavLink (to show content of html route)
      * Using data props in Components via Routes
      */}
    <Route exact path={`${match.path}`} render={ () => <Redirect to={`${match.path}/html`}/> }/>
    <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses}/>}/>
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses}/>}/>
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses}/>}/>
  </div>
);

export default Courses;