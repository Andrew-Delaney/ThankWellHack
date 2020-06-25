package uk.co.blackpepper.thankwell.images;

public class DecodedImage {
    private String name;
    private String decodedContent;
    private String type;

    public DecodedImage(String name, String decodedContent, String type) {
        this.name = name;

        this.decodedContent = decodedContent;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDecodedContent() {
        return decodedContent;
    }

    public void setDecodedContent(String decodedContent) {
        this.decodedContent = decodedContent;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
