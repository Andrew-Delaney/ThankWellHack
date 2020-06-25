package uk.co.blackpepper.thankwell.thanks;

import org.springframework.stereotype.Service;
import uk.co.blackpepper.thankwell.rest.NotFoundException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ThankWellService {
    private ThankWellRepository thankWellRepository;

    public ThankWellService(ThankWellRepository thankWellRepository) {
        this.thankWellRepository = thankWellRepository;
    }

    public Thanks createThanks(String message, String recipient, UUID imageId) {
        Thanks createdEntity = new Thanks(UUID.randomUUID(), message, recipient, imageId);
        thankWellRepository.save(createdEntity);
        return createdEntity;
    }

    public Thanks getThanksById(String id) throws NotFoundException {
        return thankWellRepository
                .findById(UUID.fromString(id))
                .orElseThrow(NotFoundException::new);
    }

    public List<Thanks> getAllThanks() {
        return thankWellRepository.findAll();
    }
}
