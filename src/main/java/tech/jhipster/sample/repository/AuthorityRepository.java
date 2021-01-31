package tech.jhipster.sample.repository;

import org.springframework.data.couchbase.repository.ReactiveCouchbaseRepository;
import tech.jhipster.sample.domain.Authority;

/**
 * Spring Data Couchbase repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends ReactiveCouchbaseRepository<Authority, String> {}
