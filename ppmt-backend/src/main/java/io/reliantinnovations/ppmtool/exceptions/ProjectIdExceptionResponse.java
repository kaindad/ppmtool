package io.reliantinnovations.ppmtool.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectIdExceptionResponse {
    public String projectIdentifier;

    public ProjectIdExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
