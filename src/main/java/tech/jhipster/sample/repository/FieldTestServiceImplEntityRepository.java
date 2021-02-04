package tech.jhipster.sample.repository;

import com.couchbase.client.java.query.QueryScanConsistency;
import org.springframework.data.couchbase.repository.Query;
import org.springframework.data.couchbase.repository.ScanConsistency;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import tech.jhipster.sample.domain.FieldTestServiceImplEntity;

/**
 * Spring Data Couchbase reactive repository for the FieldTestServiceImplEntity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FieldTestServiceImplEntityRepository extends ReactiveSortingRepository<FieldTestServiceImplEntity, String> {
    // Add ScanConsistency to fix issue with Spring Data Couchbase
    // https://github.com/spring-projects/spring-data-couchbase/issues/897
    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<FieldTestServiceImplEntity> findAll();

    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<FieldTestServiceImplEntity> findAll(Sort sort);
}
