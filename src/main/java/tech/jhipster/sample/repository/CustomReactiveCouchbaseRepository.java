package tech.jhipster.sample.repository;

import java.io.Serializable;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.couchbase.core.ReactiveCouchbaseOperations;
import org.springframework.data.couchbase.core.ReactiveCouchbaseTemplate;
import org.springframework.data.couchbase.core.mapping.CouchbasePersistentEntity;
import org.springframework.data.couchbase.repository.query.CouchbaseEntityInformation;
import org.springframework.data.couchbase.repository.support.SimpleReactiveCouchbaseRepository;
import reactor.core.publisher.Mono;

/**
 * A custom implementation of {@code CouchbaseRepository}.
 */
public class CustomReactiveCouchbaseRepository<T, ID extends Serializable> extends SimpleReactiveCouchbaseRepository<T, ID> {

    private final CouchbasePersistentEntity<?> persistentEntity;

    @Autowired
    private final ReactiveCouchbaseTemplate template;

    /**
     * Create a new Repository.
     *
     * @param metadata            the Metadata for the entity.
     * @param couchbaseOperations the reference to the operations used.
     * @param couchbaseTemplate   the reference to the template used.
     */
    public CustomReactiveCouchbaseRepository(
        CouchbaseEntityInformation<T, String> metadata,
        ReactiveCouchbaseOperations couchbaseOperations,
        ReactiveCouchbaseTemplate couchbaseTemplate
    ) {
        super(metadata, couchbaseOperations);
        persistentEntity = couchbaseOperations.getConverter().getMappingContext().getPersistentEntity(getEntityInformation().getJavaType());
        template = couchbaseTemplate;
    }

    @Override
    public <S extends T> Mono<S> save(S entity) {
        return super.save(populateIdIfNecessary(entity));
    }

    /**
     * Add generated ID to entity if not already set.
     *
     * @param entity the entity to update.
     * @return entity with ID set.
     */
    private <S extends T> S populateIdIfNecessary(S entity) {
        if (getEntityInformation().getId(entity) != null) {
            return entity;
        }
        // setId(entity, template.getGeneratedId(entity));
        return entity;
    }

    private <S extends T> void setId(S entity, String generatedId) {
        persistentEntity.getPropertyAccessor(entity).setProperty(persistentEntity.getIdProperty(), generatedId);
    }
}
