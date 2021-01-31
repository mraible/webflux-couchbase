package tech.jhipster.sample.repository;

import static tech.jhipster.sample.config.Constants.ID_DELIMITER;

import com.couchbase.client.java.query.QueryScanConsistency;
import java.time.Instant;
import org.springframework.data.couchbase.repository.ReactiveCouchbaseRepository;
import org.springframework.data.couchbase.repository.ScanConsistency;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.sample.domain.User;

/**
 * Spring Data Couchbase repository for the {@link User} entity.
 */
@Repository
public interface UserRepository extends ReactiveCouchbaseRepository<User, String> {
    // @ScanConsistency is to fix index issues with Spring Data Couchbase
    // https://github.com/spring-projects/spring-data-couchbase/issues/897

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Mono<User> findOneByActivationKey(String activationKey);

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<User> findAllByActivatedIsFalseAndActivationKeyIsNotNullAndCreatedDateBefore(Instant dateTime);

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Mono<User> findOneByResetKey(String resetKey);

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Mono<User> findOneByEmailIgnoreCase(String email);

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    default Mono<User> findOneByLogin(String login) {
        return findById(User.PREFIX + ID_DELIMITER + login);
    }

    @Override
    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<User> findAll();

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<User> findAllByIdNotNull(Pageable pageable);

    @ScanConsistency(query = QueryScanConsistency.REQUEST_PLUS)
    Flux<User> findAllByIdNotNullAndActivatedIsTrue(Pageable pageable);

    Mono<Long> count();
}
