package tech.jhipster.sample.repository;

import com.couchbase.client.java.query.QueryScanConsistency;
import org.springframework.data.couchbase.repository.Query;
import org.springframework.data.couchbase.repository.ScanConsistency;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import tech.jhipster.sample.domain.EntityWithPaginationAndDTO;

/**
 * Spring Data Couchbase reactive repository for the EntityWithPaginationAndDTO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntityWithPaginationAndDTORepository extends ReactiveSortingRepository<EntityWithPaginationAndDTO, String> {
    Flux<EntityWithPaginationAndDTO> findAllBy(Pageable pageable);

    // Add ScanConsistency to fix issue with Spring Data Couchbase
    // https://github.com/spring-projects/spring-data-couchbase/issues/897
    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<EntityWithPaginationAndDTO> findAll();

    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<EntityWithPaginationAndDTO> findAll(Sort sort);
}
