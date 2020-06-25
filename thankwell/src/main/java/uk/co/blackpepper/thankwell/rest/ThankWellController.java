package uk.co.blackpepper.thankwell.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import uk.co.blackpepper.thankwell.images.DecodedImage;
import uk.co.blackpepper.thankwell.images.Image;
import uk.co.blackpepper.thankwell.images.ImageService;
import uk.co.blackpepper.thankwell.thanks.ThankWellService;
import uk.co.blackpepper.thankwell.thanks.Thanks;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.zip.DataFormatException;

@RestController
@RequestMapping("/api")
public class ThankWellController {

    private ThankWellService thankWellService;
    private ImageService imageService;

    public ThankWellController(ThankWellService thankWellService, ImageService imageService) {
        this.thankWellService = thankWellService;
        this.imageService = imageService;
    }

    @PostMapping("thanks")
    @ResponseStatus(HttpStatus.CREATED)
    public Thanks createThanks(@RequestParam String message,
                               @RequestParam String recipient,
                               @RequestParam(required = false) MultipartFile image) throws IOException {
        UUID imageId = null;
        if (image != null) {
            Image createdImage = imageService.storeImage(image.getOriginalFilename(), image.getContentType(), image.getBytes());
            imageId = createdImage.getId();
        }

        return thankWellService.createThanks(message, recipient, imageId);
    }

    @GetMapping("thanks/{id}")
    public Thanks getThanksById(@PathVariable String id) throws NotFoundException {
        return thankWellService.getThanksById(id);
    }

    @GetMapping("all")
    public List<Thanks> getAllThanks() {
        return thankWellService.getAllThanks();
    }

    @GetMapping("image/{id}")
    public DecodedImage getImageById(@PathVariable String id) throws IOException, NotFoundException, DataFormatException {
        return imageService.getImage(id);
    }
}
