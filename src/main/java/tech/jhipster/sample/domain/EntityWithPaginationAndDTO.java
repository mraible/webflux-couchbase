package tech.jhipster.sample.domain;

import static org.springframework.data.couchbase.core.mapping.id.GenerationStrategy.UNIQUE;
import static tech.jhipster.sample.config.Constants.ID_DELIMITER;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;
import org.springframework.data.couchbase.core.mapping.id.GeneratedValue;
import org.springframework.data.couchbase.core.mapping.id.IdPrefix;

/**
 * A EntityWithPaginationAndDTO.
 */
@Document
public class EntityWithPaginationAndDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "entitywithpaginationanddto";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("lea")
    private String lea;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public EntityWithPaginationAndDTO id(String id) {
        this.id = id;
        return this;
    }

    public String getLea() {
        return this.lea;
    }

    public EntityWithPaginationAndDTO lea(String lea) {
        this.lea = lea;
        return this;
    }

    public void setLea(String lea) {
        this.lea = lea;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithPaginationAndDTO)) {
            return false;
        }
        return id != null && id.equals(((EntityWithPaginationAndDTO) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EntityWithPaginationAndDTO{" +
            "id=" + getId() +
            ", lea='" + getLea() + "'" +
            "}";
    }
}
