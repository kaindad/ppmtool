package io.reliantinnovations.ppmtool.web;

import io.reliantinnovations.ppmtool.domain.Project;
import io.reliantinnovations.ppmtool.services.MapValidationErrorService;
import io.reliantinnovations.ppmtool.services.ProjectService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){

        if(result.hasErrors())
            return mapValidationErrorService.mapValidationErrorService(result);

        Project project1 = projectService.saveorUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId){
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable <?> getAllProjects(){
        return projectService.findAllProjects();
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<>("Project with ID: '"+projectId+"' was deleted", HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<?> updateProject(@Valid @RequestBody Project project, BindingResult result){
        if(result.hasErrors())
            return mapValidationErrorService.mapValidationErrorService(result);

        Project project1 = projectService.findProjectByIdentifier(project.getProjectIdentifier());
        projectService.saveorUpdateProject(project1);
        return new ResponseEntity<>(project1, HttpStatus.OK);
    }
}
