package tech.jhipster.sample.config;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.github.couchmove.Couchmove;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.data.convert.WritingConverter;
import org.springframework.data.couchbase.config.AbstractCouchbaseConfiguration;
import org.springframework.data.couchbase.config.BeanNames;
import org.springframework.data.couchbase.core.convert.CouchbaseCustomConversions;
import org.springframework.data.couchbase.core.mapping.event.ValidatingCouchbaseEventListener;
import org.springframework.data.couchbase.repository.config.EnableReactiveCouchbaseRepositories;
import org.springframework.data.repository.util.QueryExecutionConverters;
import org.springframework.util.StringUtils;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import reactor.core.publisher.Flux;
import tech.jhipster.config.JHipsterConstants;
import tech.jhipster.config.JHipsterProperties;
import tech.jhipster.sample.config.couchbase.CustomCouchbaseRepositoryFactoryBean;

@Configuration
@Profile("!" + JHipsterConstants.SPRING_PROFILE_CLOUD)
@EnableReactiveCouchbaseRepositories(
    basePackages = "tech.jhipster.sample.repository",
    repositoryFactoryBeanClass = CustomCouchbaseRepositoryFactoryBean.class
)
public class DatabaseConfiguration extends AbstractCouchbaseConfiguration {

    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);

    private final JHipsterProperties jHipsterProperties;
    private final CouchbaseProperties couchbaseProperties;

    public DatabaseConfiguration(JHipsterProperties jHipsterProperties, CouchbaseProperties couchbaseProperties) {
        this.jHipsterProperties = jHipsterProperties;
        this.couchbaseProperties = couchbaseProperties;
        allowPageable();
    }

    // Temporary Hack to fix pageable
    @SuppressWarnings("unchecked")
    private void allowPageable() {
        try {
            Field allowed_pageable_types = QueryExecutionConverters.class.getDeclaredField("ALLOWED_PAGEABLE_TYPES");
            allowed_pageable_types.setAccessible(true);
            Set<Class<?>> ALLOWED_PAGEABLE_TYPES = (Set<Class<?>>) allowed_pageable_types.get(QueryExecutionConverters.class);
            ALLOWED_PAGEABLE_TYPES.add(Flux.class);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    @Bean
    public ValidatingCouchbaseEventListener validatingCouchbaseEventListener() {
        return new ValidatingCouchbaseEventListener(validator());
    }

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Override
    public String getConnectionString() {
        return couchbaseProperties.getConnectionString();
    }

    @Override
    public String getUserName() {
        return couchbaseProperties.getUsername();
    }

    @Override
    public String getPassword() {
        return couchbaseProperties.getPassword();
    }

    @Override
    public String getBucketName() {
        return jHipsterProperties.getDatabase().getCouchbase().getBucketName();
    }

    @Bean
    public Bucket bucket(Cluster cluster) {
        return cluster.bucket(jHipsterProperties.getDatabase().getCouchbase().getBucketName());
    }

    @Bean(name = BeanNames.COUCHBASE_CUSTOM_CONVERSIONS)
    public CouchbaseCustomConversions customConversions() {
        List<Converter<?, ?>> converters = new ArrayList<>();
        converters.add(ZonedDateTimeToLongConverter.INSTANCE);
        converters.add(NumberToLocalDateTimeConverter.INSTANCE);
        converters.add(BigIntegerToStringConverter.INSTANCE);
        converters.add(StringToBigIntegerConverter.INSTANCE);
        converters.add(BigDecimalToStringConverter.INSTANCE);
        converters.add(StringToBigDecimalConverter.INSTANCE);
        converters.add(StringToByteConverter.INSTANCE);
        converters.add(UUIDToStringConverter.INSTANCE);
        converters.add(StringToUUIDConverter.INSTANCE);
        return new CouchbaseCustomConversions(converters);
    }

    @Bean
    public Couchmove couchmove(Bucket bucket, Cluster cluster) {
        log.debug("Configuring Couchmove");
        Couchmove couchmove = new Couchmove(bucket, cluster, "config/couchmove/changelog");
        couchmove.migrate();
        return couchmove;
    }

    /**
     * Simple singleton to convert {@link ZonedDateTime}s to their {@link Long} representation.
     */
    @WritingConverter
    public enum ZonedDateTimeToLongConverter implements Converter<ZonedDateTime, Long> {
        INSTANCE;

        @Override
        public Long convert(ZonedDateTime source) {
            return source == null ? null : Date.from(source.toInstant()).getTime();
        }
    }

    /**
     * Simple singleton to convert from {@link Number} {@link BigDecimal} representation.
     */
    @ReadingConverter
    public enum NumberToLocalDateTimeConverter implements Converter<Number, ZonedDateTime> {
        INSTANCE;

        @Override
        public ZonedDateTime convert(Number source) {
            return source == null ? null : ZonedDateTime.ofInstant(new Date(source.longValue()).toInstant(), ZoneId.systemDefault());
        }
    }

    /**
     * Simple singleton to convert {@link BigDecimal}s to their {@link String} representation.
     */
    @WritingConverter
    public enum BigDecimalToStringConverter implements Converter<BigDecimal, String> {
        INSTANCE;

        public String convert(BigDecimal source) {
            return source == null ? null : source.toString();
        }
    }

    /**
     * Simple singleton to convert from {@link String} {@link BigDecimal} representation.
     */
    @ReadingConverter
    public enum StringToBigDecimalConverter implements Converter<String, BigDecimal> {
        INSTANCE;

        public BigDecimal convert(String source) {
            return StringUtils.hasText(source) ? new BigDecimal(source) : null;
        }
    }

    /**
     * Simple singleton to convert {@link BigInteger}s to their {@link String} representation.
     */
    @WritingConverter
    public enum BigIntegerToStringConverter implements Converter<BigInteger, String> {
        INSTANCE;

        public String convert(BigInteger source) {
            return source == null ? null : source.toString();
        }
    }

    /**
     * Simple singleton to convert from {@link String} {@link BigInteger} representation.
     */
    @ReadingConverter
    public enum StringToBigIntegerConverter implements Converter<String, BigInteger> {
        INSTANCE;

        public BigInteger convert(String source) {
            return StringUtils.hasText(source) ? new BigInteger(source) : null;
        }
    }

    /**
     * Simple singleton to convert from {@link String} {@code byte[]} representation.
     */
    @ReadingConverter
    public enum StringToByteConverter implements Converter<String, byte[]> {
        INSTANCE;

        @Override
        public byte[] convert(String source) {
            return Base64.decodeBase64(source);
        }
    }

    /**
     * Simple singleton to convert {@link UUID}s to their {@link String} representation.
     */
    @WritingConverter
    public enum UUIDToStringConverter implements Converter<UUID, String> {
        INSTANCE;

        @Override
        public String convert(UUID source) {
            return source == null ? null : source.toString();
        }
    }

    /**
     * Simple singleton to convert from {@link String} {@link UUID} representation.
     */
    @ReadingConverter
    public enum StringToUUIDConverter implements Converter<String, UUID> {
        INSTANCE;

        @Override
        public UUID convert(String source) {
            return source == null ? null : UUID.fromString(source);
        }
    }
}
