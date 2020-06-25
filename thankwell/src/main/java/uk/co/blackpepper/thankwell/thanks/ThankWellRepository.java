package uk.co.blackpepper.thankwell.thanks;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

interface ThankWellRepository extends JpaRepository<Thanks, UUID> {
}
