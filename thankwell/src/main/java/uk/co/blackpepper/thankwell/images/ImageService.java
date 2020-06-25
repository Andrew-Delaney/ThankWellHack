package uk.co.blackpepper.thankwell.images;

import org.springframework.stereotype.Service;
import uk.co.blackpepper.thankwell.rest.NotFoundException;

import java.util.Base64;
import java.util.UUID;

@Service
public class ImageService {
    private ImageRepository imageRepository;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public Image storeImage(String name, String type, byte[] content) {
        return imageRepository.save(new Image(UUID.randomUUID(), name, type, content));
    }

    public DecodedImage getImage(String id) throws NotFoundException {
        Image image = imageRepository.findById(UUID.fromString(id))
                .orElseThrow(NotFoundException::new);

        return new DecodedImage(image.getName(), new String(Base64.getEncoder().encode(image.getContent())), image.getType());
    }
}
