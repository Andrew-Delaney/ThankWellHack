package uk.co.blackpepper.thankwell.rest;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Thanks {
    @Id
    private UUID id;
    private String message;

    public Thanks() {
        // for JPA
    }

    public Thanks(UUID id, String message) {
        this.id = id;
        this.message = message;
    }

    public Thanks(String message) {
        this.message = message;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
