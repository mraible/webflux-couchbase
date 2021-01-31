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
 * A EntityWithServiceImplPaginationAndDTO.
 */
@Document
public class EntityWithServiceImplPaginationAndDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "entitywithserviceimplpaginationanddto";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("theo")
    private String theo;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public EntityWithServiceImplPaginationAndDTO id(String id) {
        this.id = id;
        return this;
    }

    public String getTheo() {
        return this.theo;
    }

    public EntityWithServiceImplPaginationAndDTO theo(String theo) {
        this.theo = theo;
        return this;
    }

    public void setTheo(String theo) {
        this.theo = theo;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntityWithServiceImplPaginationAndDTO)) {
            return false;
        }
        return id != null && id.equals(((EntityWithServiceImplPaginationAndDTO) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EntityWithServiceImplPaginationAndDTO{" +
            "id=" + getId() +
            ", theo='" + getTheo() + "'" +
            "}";
    }
}
