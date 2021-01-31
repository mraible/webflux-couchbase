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
 * A EntityWithServiceImplAndPagination.
 */
@Document
public class EntityWithServiceImplAndPagination implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "entitywithserviceimplandpagination";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("hugo")
    private String hugo;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public EntityWithServiceImplAndPagination id(String id) {
        this.id = id;
        return this;
    }

    public String getHugo() {
        return this.hugo;
    }

    public EntityWithServiceImplAndPagination hugo(String hugo) {
        this.hugo = hugo;
        return this;
    }

    public void setHugo(String hugo) {
        this.hugo = hugo;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceImplAndPagination)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceImplAndPagination) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EntityWithServiceImplAndPagination{" +
            "id=" + getId() +
            ", hugo='" + getHugo() + "'" +
            "}";
    }
}
