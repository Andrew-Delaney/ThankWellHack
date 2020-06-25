package uk.co.blackpepper.thankwell.rest;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ThankWellService {
    private ThankWellRepository thankWellRepository;

    public ThankWellService(ThankWellRepository thankWellRepository) {
        this.thankWellRepository = thankWellRepository;
    }

    public Thanks createThanks(String message) {
        Thanks createdEntity = new Thanks(UUID.randomUUID(), message);
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
