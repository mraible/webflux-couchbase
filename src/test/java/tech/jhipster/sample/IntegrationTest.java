package tech.jhipster.sample;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import tech.jhipster.sample.CouchbaseTestContainerExtension;
import tech.jhipster.sample.SampleCouchbaseNoCacheApp;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = SampleCouchbaseNoCacheApp.class)
@ExtendWith(CouchbaseTestContainerExtension.class)
public @interface IntegrationTest {
}
