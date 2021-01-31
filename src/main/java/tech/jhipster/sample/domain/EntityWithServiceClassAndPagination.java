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
 * A EntityWithServiceClassAndPagination.
 */
@Document
public class EntityWithServiceClassAndPagination implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "entitywithserviceclassandpagination";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("enzo")
    private String enzo;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public EntityWithServiceClassAndPagination id(String id) {
        this.id = id;
        return this;
    }

    public String getEnzo() {
        return this.enzo;
    }

    public EntityWithServiceClassAndPagination enzo(String enzo) {
        this.enzo = enzo;
        return this;
    }

    public void setEnzo(String enzo) {
        this.enzo = enzo;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceClassAndPagination)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceClassAndPagination) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EntityWithServiceClassAndPagination{" +
            "id=" + getId() +
            ", enzo='" + getEnzo() + "'" +
            "}";
    }
}
