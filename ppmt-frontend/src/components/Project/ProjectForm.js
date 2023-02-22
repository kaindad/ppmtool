import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from './actions/projectActions';

export default function ProjectForm({ createProject }) {
  const navigate = useNavigate();
  const [project, setProject] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    // e.preventDefault();
    createProject(project);
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  return (
    <div className="register">
        <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Project Name"
                    name="projectName"
                    value={project.projectName}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentifier"
                    value={project.projectIdentifier}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                    <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={project.startDate}
                    onChange={handleChange}
                    />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                    <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={project.endDate}
                    onChange={handleChange}
                    />
                </div>
                <input type="submit" className="btn btn-primary btn-block mt-4" />
                </form>
            </div>
            </div>
        </div>
        </div>
  );
}
