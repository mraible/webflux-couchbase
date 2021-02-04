package tech.jhipster.sample.repository;

import com.couchbase.client.java.query.QueryScanConsistency;
import org.springframework.data.couchbase.repository.Query;
import org.springframework.data.couchbase.repository.ScanConsistency;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.sample.domain.Place;

/**
 * Spring Data Couchbase reactive repository for the Place entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlaceRepository extends ReactiveSortingRepository<Place, String> {
    @Query("#{#n1ql.selectEntity} WHERE #{#n1ql.filter}")
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<Place> findAllWithEagerRelationships(Pageable pageable);

    @Query("#{#n1ql.selectEntity} WHERE #{#n1ql.filter}")
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<Place> findAllWithEagerRelationships();

    @Query("#{#n1ql.selectEntity} USE KEYS $1 WHERE #{#n1ql.filter}")
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Mono<Place> findOneWithEagerRelationships(String id);

    // Add ScanConsistency to fix issue with Spring Data Couchbase
    // https://github.com/spring-projects/spring-data-couchbase/issues/897
    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<Place> findAll();

    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<Place> findAll(Sort sort);
}
