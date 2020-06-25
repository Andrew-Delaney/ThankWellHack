package uk.co.blackpepper.thankwell.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ThankWellController {

    private ThankWellService thankWellService;

    public ThankWellController(ThankWellService thankWellService) {
        this.thankWellService = thankWellService;
    }

    @PostMapping("thanks")
    @ResponseStatus(HttpStatus.CREATED)
    public Thanks createThanks(@RequestBody String message) {
        return thankWellService.createThanks(message);
    }

    @GetMapping("thanks/{id}")
    public Thanks getThanksById(@PathVariable String id) throws NotFoundException {
        return thankWellService.getThanksById(id);
    }

    @GetMapping("all")
    public List<Thanks> getAllThanks() {
        return thankWellService.getAllThanks();
    }
}
