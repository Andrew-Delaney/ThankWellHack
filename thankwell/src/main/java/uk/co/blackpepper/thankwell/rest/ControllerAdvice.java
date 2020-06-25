package uk.co.blackpepper.thankwell.rest;

import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@org.springframework.web.bind.annotation.ControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(NotFoundException.class)
    public void handleNotFoundException(HttpServletResponse response, NotFoundException e) throws IOException {
        response.sendError(HttpServletResponse.SC_NOT_FOUND);
    }
}
