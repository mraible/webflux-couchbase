package tech.jhipster.sample.repository;

import com.couchbase.client.java.query.QueryScanConsistency;
import org.springframework.data.couchbase.repository.Query;
import org.springframework.data.couchbase.repository.ScanConsistency;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import tech.jhipster.sample.domain.FieldTestServiceClassAndJpaFilteringEntity;

/**
 * Spring Data Couchbase reactive repository for the FieldTestServiceClassAndJpaFilteringEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestServiceClassAndJpaFilteringEntityRepository
    extends ReactiveSortingRepository<FieldTestServiceClassAndJpaFilteringEntity, String> {
    // Add ScanConsistency to fix issue with Spring Data Couchbase
    // https://github.com/spring-projects/spring-data-couchbase/issues/897
    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<FieldTestServiceClassAndJpaFilteringEntity> findAll();

    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<FieldTestServiceClassAndJpaFilteringEntity> findAll(Sort sort);
}
