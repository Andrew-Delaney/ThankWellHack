package uk.co.blackpepper.thankwell.thanks;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Thanks {
    @Id
    private UUID id;
    private String message;
    private String recipient;
    private UUID imageId;

    public Thanks() {
        // for JPA
    }

    public Thanks(UUID id, String message, String recipient, UUID imageId) {
        this.id = id;
        this.message = message;
        this.recipient = recipient;
        this.imageId = imageId;
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

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public UUID getImageId() {
        return imageId;
    }

    public void setImage(UUID imageId) {
        this.imageId = imageId;
    }
}
