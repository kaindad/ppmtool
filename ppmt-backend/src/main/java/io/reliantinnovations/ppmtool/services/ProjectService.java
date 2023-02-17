package io.reliantinnovations.ppmtool.services;

import io.reliantinnovations.ppmtool.domain.Project;
import io.reliantinnovations.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveorUpdateProject(Project project){
        return projectRepository.save(project);
    }
}
