import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class SubjectBBSPagination extends Component{
    constructor(props){
        super(props);
        console.log(props.pathName);
    }
    render(){
        return(
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" href="#">&laquo;</a>
                </li>
                <li class="page-item">
                    <NavLink className="page-link" to={"/prof_and_stud/subjectBBS/list/"+this.props.pathName.params.name+"/1"} activeClassName="page-item active">1</NavLink>
                </li>
                <li class="page-item">
                    <NavLink className="page-link" to={"/prof_and_stud/subjectBBS/list/"+this.props.pathName.params.name+"/2"} activeClassName="page-item active">2</NavLink>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">5</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">&raquo;</a>
                </li>
            </ul>
        )
    }
}
export default SubjectBBSPagination;