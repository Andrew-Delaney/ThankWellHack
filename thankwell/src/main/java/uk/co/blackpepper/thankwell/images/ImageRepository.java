package uk.co.blackpepper.thankwell.images;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

interface ImageRepository extends JpaRepository<Image, UUID> {
}
