package uk.co.blackpepper.thankwell.images;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.UUID;

@Entity
public class Image {
    @Id
    private UUID id;
    private String name;
    private String type;
    @Lob
    private byte[] content;

    public Image() {

    }

    public Image(UUID id, String name, String type, byte[] content) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.content = content;
    }


    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }


}
