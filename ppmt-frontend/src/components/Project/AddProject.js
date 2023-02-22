import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "./actions/projectActions";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";

function AddProject (props) {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  
  const [project, setProject] = useState({
    projectName: "",
    projectIdentifier: "",
    description: "",
    startDate: "",
    endDate: ""
  });
  const navigate = useNavigate();

  //Lifecycle hooks
  useEffect(() => {
    if(errors){
      setErrors(props.errors);
      console.log('project object: UseEffect(): Errors = > '+JSON.stringify(errors));
    }
  }, [props.errors])
  

  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
    // console.log('project object: onChange() = > '+JSON.stringify(project)); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Function createProject() has been called 1');
    console.log('project object: '+JSON.stringify(project));
    
    // props.createProject(project);

    dispatch(createProject(project, navigate));
    console.log('Function createProject() has been called 3');
    
    // navigate('/dashboard');
  };

  
  return (
    <div>
      {
        //check name attribute input fields
        //create constructor
        //set state
        //set value on input fields
        //create onChange function
        //set onChange on each input field
        //bind on constructor
        //check state change in the react extension
      }

      

      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project form</h5>
              <hr />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={ classNames("form-control form-control-lg ", {
                      "is-invalid": errors.projectName
                    })}
                    placeholder="Project Name"
                    name="projectName"
                    value={project.projectName}
                    onChange={onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.projectName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={ classNames("form-control form-control-lg ", {
                      "is-invalid": errors.projectIdentifier
                    })}
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={project.projectIdentifier}
                    onChange={onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.projectIdentifier}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={ classNames("form-control form-control-lg ", {
                      "is-invalid": errors.description
                    })}
                    placeholder="Project Description"
                    name="description"
                    value={project.description}
                    onChange={onChange}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={project.startDate}
                    onChange={onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={project.endDate}
                    onChange={onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors : state.errors
});
export default connect(
  mapStateToProps,
  { createProject }
)(AddProject);