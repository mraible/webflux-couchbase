package tech.jhipster.sample.domain;

import static org.springframework.data.couchbase.core.mapping.id.GenerationStrategy.UNIQUE;
import static tech.jhipster.sample.config.Constants.ID_DELIMITER;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.UUID;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;
import org.springframework.data.couchbase.core.mapping.id.GeneratedValue;
import org.springframework.data.couchbase.core.mapping.id.IdPrefix;
import tech.jhipster.sample.domain.enumeration.EnumFieldClass;
import tech.jhipster.sample.domain.enumeration.EnumRequiredFieldClass;

/**
 * A FieldTestPaginationEntity.
 */
@Document
public class FieldTestPaginationEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "fieldtestpaginationentity";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("string_alice")
    private String stringAlice;

    @NotNull(message = "must not be null")
    @Field("string_required_alice")
    private String stringRequiredAlice;

    @Size(min = 0)
    @Field("string_minlength_alice")
    private String stringMinlengthAlice;

    @Size(max = 20)
    @Field("string_maxlength_alice")
    private String stringMaxlengthAlice;

    @Pattern(regexp = "^[a-zA-Z0-9]*$")
    @Field("string_pattern_alice")
    private String stringPatternAlice;

    @Field("integer_alice")
    private Integer integerAlice;

    @NotNull(message = "must not be null")
    @Field("integer_required_alice")
    private Integer integerRequiredAlice;

    @Min(value = 0)
    @Field("integer_min_alice")
    private Integer integerMinAlice;

    @Max(value = 100)
    @Field("integer_max_alice")
    private Integer integerMaxAlice;

    @Field("long_alice")
    private Long longAlice;

    @NotNull(message = "must not be null")
    @Field("long_required_alice")
    private Long longRequiredAlice;

    @Min(value = 0L)
    @Field("long_min_alice")
    private Long longMinAlice;

    @Max(value = 100L)
    @Field("long_max_alice")
    private Long longMaxAlice;

    @Field("float_alice")
    private Float floatAlice;

    @NotNull(message = "must not be null")
    @Field("float_required_alice")
    private Float floatRequiredAlice;

    @DecimalMin(value = "0")
    @Field("float_min_alice")
    private Float floatMinAlice;

    @DecimalMax(value = "100")
    @Field("float_max_alice")
    private Float floatMaxAlice;

    @NotNull(message = "must not be null")
    @Field("double_required_alice")
    private Double doubleRequiredAlice;

    @DecimalMin(value = "0")
    @Field("double_min_alice")
    private Double doubleMinAlice;

    @DecimalMax(value = "100")
    @Field("double_max_alice")
    private Double doubleMaxAlice;

    @NotNull(message = "must not be null")
    @Field("big_decimal_required_alice")
    private BigDecimal bigDecimalRequiredAlice;

    @DecimalMin(value = "0")
    @Field("big_decimal_min_alice")
    private BigDecimal bigDecimalMinAlice;

    @DecimalMax(value = "100")
    @Field("big_decimal_max_alice")
    private BigDecimal bigDecimalMaxAlice;

    @Field("local_date_alice")
    private LocalDate localDateAlice;

    @NotNull(message = "must not be null")
    @Field("local_date_required_alice")
    private LocalDate localDateRequiredAlice;

    @Field("instant_alice")
    private Instant instantAlice;

    @NotNull(message = "must not be null")
    @Field("instante_required_alice")
    private Instant instanteRequiredAlice;

    @Field("zoned_date_time_alice")
    private ZonedDateTime zonedDateTimeAlice;

    @NotNull(message = "must not be null")
    @Field("zoned_date_time_required_alice")
    private ZonedDateTime zonedDateTimeRequiredAlice;

    @Field("duration_alice")
    private Duration durationAlice;

    @NotNull(message = "must not be null")
    @Field("duration_required_alice")
    private Duration durationRequiredAlice;

    @Field("boolean_alice")
    private Boolean booleanAlice;

    @NotNull(message = "must not be null")
    @Field("boolean_required_alice")
    private Boolean booleanRequiredAlice;

    @Field("enum_alice")
    private EnumFieldClass enumAlice;

    @NotNull(message = "must not be null")
    @Field("enum_required_alice")
    private EnumRequiredFieldClass enumRequiredAlice;

    @Field("uuid_alice")
    private UUID uuidAlice;

    @NotNull(message = "must not be null")
    @Field("uuid_required_alice")
    private UUID uuidRequiredAlice;

    @Field("byte_image_alice")
    private byte[] byteImageAlice;

    @Field("byte_image_alice_content_type")
    private String byteImageAliceContentType;

    @Field("byte_image_required_alice")
    private byte[] byteImageRequiredAlice;

    @Field("byte_image_required_alice_content_type")
    private String byteImageRequiredAliceContentType;

    @Field("byte_image_minbytes_alice")
    private byte[] byteImageMinbytesAlice;

    @Field("byte_image_minbytes_alice_content_type")
    private String byteImageMinbytesAliceContentType;

    @Field("byte_image_maxbytes_alice")
    private byte[] byteImageMaxbytesAlice;

    @Field("byte_image_maxbytes_alice_content_type")
    private String byteImageMaxbytesAliceContentType;

    @Field("byte_any_alice")
    private byte[] byteAnyAlice;

    @Field("byte_any_alice_content_type")
    private String byteAnyAliceContentType;

    @Field("byte_any_required_alice")
    private byte[] byteAnyRequiredAlice;

    @Field("byte_any_required_alice_content_type")
    private String byteAnyRequiredAliceContentType;

    @Field("byte_any_minbytes_alice")
    private byte[] byteAnyMinbytesAlice;

    @Field("byte_any_minbytes_alice_content_type")
    private String byteAnyMinbytesAliceContentType;

    @Field("byte_any_maxbytes_alice")
    private byte[] byteAnyMaxbytesAlice;

    @Field("byte_any_maxbytes_alice_content_type")
    private String byteAnyMaxbytesAliceContentType;

    @Field("byte_text_alice")
    private String byteTextAlice;

    @Field("byte_text_required_alice")
    private String byteTextRequiredAlice;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public FieldTestPaginationEntity id(String id) {
        this.id = id;
        return this;
    }

    public String getStringAlice() {
        return this.stringAlice;
    }

    public FieldTestPaginationEntity stringAlice(String stringAlice) {
        this.stringAlice = stringAlice;
        return this;
    }

    public void setStringAlice(String stringAlice) {
        this.stringAlice = stringAlice;
    }

    public String getStringRequiredAlice() {
        return this.stringRequiredAlice;
    }

    public FieldTestPaginationEntity stringRequiredAlice(String stringRequiredAlice) {
        this.stringRequiredAlice = stringRequiredAlice;
        return this;
    }

    public void setStringRequiredAlice(String stringRequiredAlice) {
        this.stringRequiredAlice = stringRequiredAlice;
    }

    public String getStringMinlengthAlice() {
        return this.stringMinlengthAlice;
    }

    public FieldTestPaginationEntity stringMinlengthAlice(String stringMinlengthAlice) {
        this.stringMinlengthAlice = stringMinlengthAlice;
        return this;
    }

    public void setStringMinlengthAlice(String stringMinlengthAlice) {
        this.stringMinlengthAlice = stringMinlengthAlice;
    }

    public String getStringMaxlengthAlice() {
        return this.stringMaxlengthAlice;
    }

    public FieldTestPaginationEntity stringMaxlengthAlice(String stringMaxlengthAlice) {
        this.stringMaxlengthAlice = stringMaxlengthAlice;
        return this;
    }

    public void setStringMaxlengthAlice(String stringMaxlengthAlice) {
        this.stringMaxlengthAlice = stringMaxlengthAlice;
    }

    public String getStringPatternAlice() {
        return this.stringPatternAlice;
    }

    public FieldTestPaginationEntity stringPatternAlice(String stringPatternAlice) {
        this.stringPatternAlice = stringPatternAlice;
        return this;
    }

    public void setStringPatternAlice(String stringPatternAlice) {
        this.stringPatternAlice = stringPatternAlice;
    }

    public Integer getIntegerAlice() {
        return this.integerAlice;
    }

    public FieldTestPaginationEntity integerAlice(Integer integerAlice) {
        this.integerAlice = integerAlice;
        return this;
    }

    public void setIntegerAlice(Integer integerAlice) {
        this.integerAlice = integerAlice;
    }

    public Integer getIntegerRequiredAlice() {
        return this.integerRequiredAlice;
    }

    public FieldTestPaginationEntity integerRequiredAlice(Integer integerRequiredAlice) {
        this.integerRequiredAlice = integerRequiredAlice;
        return this;
    }

    public void setIntegerRequiredAlice(Integer integerRequiredAlice) {
        this.integerRequiredAlice = integerRequiredAlice;
    }

    public Integer getIntegerMinAlice() {
        return this.integerMinAlice;
    }

    public FieldTestPaginationEntity integerMinAlice(Integer integerMinAlice) {
        this.integerMinAlice = integerMinAlice;
        return this;
    }

    public void setIntegerMinAlice(Integer integerMinAlice) {
        this.integerMinAlice = integerMinAlice;
    }

    public Integer getIntegerMaxAlice() {
        return this.integerMaxAlice;
    }

    public FieldTestPaginationEntity integerMaxAlice(Integer integerMaxAlice) {
        this.integerMaxAlice = integerMaxAlice;
        return this;
    }

    public void setIntegerMaxAlice(Integer integerMaxAlice) {
        this.integerMaxAlice = integerMaxAlice;
    }

    public Long getLongAlice() {
        return this.longAlice;
    }

    public FieldTestPaginationEntity longAlice(Long longAlice) {
        this.longAlice = longAlice;
        return this;
    }

    public void setLongAlice(Long longAlice) {
        this.longAlice = longAlice;
    }

    public Long getLongRequiredAlice() {
        return this.longRequiredAlice;
    }

    public FieldTestPaginationEntity longRequiredAlice(Long longRequiredAlice) {
        this.longRequiredAlice = longRequiredAlice;
        return this;
    }

    public void setLongRequiredAlice(Long longRequiredAlice) {
        this.longRequiredAlice = longRequiredAlice;
    }

    public Long getLongMinAlice() {
        return this.longMinAlice;
    }

    public FieldTestPaginationEntity longMinAlice(Long longMinAlice) {
        this.longMinAlice = longMinAlice;
        return this;
    }

    public void setLongMinAlice(Long longMinAlice) {
        this.longMinAlice = longMinAlice;
    }

    public Long getLongMaxAlice() {
        return this.longMaxAlice;
    }

    public FieldTestPaginationEntity longMaxAlice(Long longMaxAlice) {
        this.longMaxAlice = longMaxAlice;
        return this;
    }

    public void setLongMaxAlice(Long longMaxAlice) {
        this.longMaxAlice = longMaxAlice;
    }

    public Float getFloatAlice() {
        return this.floatAlice;
    }

    public FieldTestPaginationEntity floatAlice(Float floatAlice) {
        this.floatAlice = floatAlice;
        return this;
    }

    public void setFloatAlice(Float floatAlice) {
        this.floatAlice = floatAlice;
    }

    public Float getFloatRequiredAlice() {
        return this.floatRequiredAlice;
    }

    public FieldTestPaginationEntity floatRequiredAlice(Float floatRequiredAlice) {
        this.floatRequiredAlice = floatRequiredAlice;
        return this;
    }

    public void setFloatRequiredAlice(Float floatRequiredAlice) {
        this.floatRequiredAlice = floatRequiredAlice;
    }

    public Float getFloatMinAlice() {
        return this.floatMinAlice;
    }

    public FieldTestPaginationEntity floatMinAlice(Float floatMinAlice) {
        this.floatMinAlice = floatMinAlice;
        return this;
    }

    public void setFloatMinAlice(Float floatMinAlice) {
        this.floatMinAlice = floatMinAlice;
    }

    public Float getFloatMaxAlice() {
        return this.floatMaxAlice;
    }

    public FieldTestPaginationEntity floatMaxAlice(Float floatMaxAlice) {
        this.floatMaxAlice = floatMaxAlice;
        return this;
    }

    public void setFloatMaxAlice(Float floatMaxAlice) {
        this.floatMaxAlice = floatMaxAlice;
    }

    public Double getDoubleRequiredAlice() {
        return this.doubleRequiredAlice;
    }

    public FieldTestPaginationEntity doubleRequiredAlice(Double doubleRequiredAlice) {
        this.doubleRequiredAlice = doubleRequiredAlice;
        return this;
    }

    public void setDoubleRequiredAlice(Double doubleRequiredAlice) {
        this.doubleRequiredAlice = doubleRequiredAlice;
    }

    public Double getDoubleMinAlice() {
        return this.doubleMinAlice;
    }

    public FieldTestPaginationEntity doubleMinAlice(Double doubleMinAlice) {
        this.doubleMinAlice = doubleMinAlice;
        return this;
    }

    public void setDoubleMinAlice(Double doubleMinAlice) {
        this.doubleMinAlice = doubleMinAlice;
    }

    public Double getDoubleMaxAlice() {
        return this.doubleMaxAlice;
    }

    public FieldTestPaginationEntity doubleMaxAlice(Double doubleMaxAlice) {
        this.doubleMaxAlice = doubleMaxAlice;
        return this;
    }

    public void setDoubleMaxAlice(Double doubleMaxAlice) {
        this.doubleMaxAlice = doubleMaxAlice;
    }

    public BigDecimal getBigDecimalRequiredAlice() {
        return this.bigDecimalRequiredAlice;
    }

    public FieldTestPaginationEntity bigDecimalRequiredAlice(BigDecimal bigDecimalRequiredAlice) {
        this.bigDecimalRequiredAlice = bigDecimalRequiredAlice;
        return this;
    }

    public void setBigDecimalRequiredAlice(BigDecimal bigDecimalRequiredAlice) {
        this.bigDecimalRequiredAlice = bigDecimalRequiredAlice;
    }

    public BigDecimal getBigDecimalMinAlice() {
        return this.bigDecimalMinAlice;
    }

    public FieldTestPaginationEntity bigDecimalMinAlice(BigDecimal bigDecimalMinAlice) {
        this.bigDecimalMinAlice = bigDecimalMinAlice;
        return this;
    }

    public void setBigDecimalMinAlice(BigDecimal bigDecimalMinAlice) {
        this.bigDecimalMinAlice = bigDecimalMinAlice;
    }

    public BigDecimal getBigDecimalMaxAlice() {
        return this.bigDecimalMaxAlice;
    }

    public FieldTestPaginationEntity bigDecimalMaxAlice(BigDecimal bigDecimalMaxAlice) {
        this.bigDecimalMaxAlice = bigDecimalMaxAlice;
        return this;
    }

    public void setBigDecimalMaxAlice(BigDecimal bigDecimalMaxAlice) {
        this.bigDecimalMaxAlice = bigDecimalMaxAlice;
    }

    public LocalDate getLocalDateAlice() {
        return this.localDateAlice;
    }

    public FieldTestPaginationEntity localDateAlice(LocalDate localDateAlice) {
        this.localDateAlice = localDateAlice;
        return this;
    }

    public void setLocalDateAlice(LocalDate localDateAlice) {
        this.localDateAlice = localDateAlice;
    }

    public LocalDate getLocalDateRequiredAlice() {
        return this.localDateRequiredAlice;
    }

    public FieldTestPaginationEntity localDateRequiredAlice(LocalDate localDateRequiredAlice) {
        this.localDateRequiredAlice = localDateRequiredAlice;
        return this;
    }

    public void setLocalDateRequiredAlice(LocalDate localDateRequiredAlice) {
        this.localDateRequiredAlice = localDateRequiredAlice;
    }

    public Instant getInstantAlice() {
        return this.instantAlice;
    }

    public FieldTestPaginationEntity instantAlice(Instant instantAlice) {
        this.instantAlice = instantAlice;
        return this;
    }

    public void setInstantAlice(Instant instantAlice) {
        this.instantAlice = instantAlice;
    }

    public Instant getInstanteRequiredAlice() {
        return this.instanteRequiredAlice;
    }

    public FieldTestPaginationEntity instanteRequiredAlice(Instant instanteRequiredAlice) {
        this.instanteRequiredAlice = instanteRequiredAlice;
        return this;
    }

    public void setInstanteRequiredAlice(Instant instanteRequiredAlice) {
        this.instanteRequiredAlice = instanteRequiredAlice;
    }

    public ZonedDateTime getZonedDateTimeAlice() {
        return this.zonedDateTimeAlice;
    }

    public FieldTestPaginationEntity zonedDateTimeAlice(ZonedDateTime zonedDateTimeAlice) {
        this.zonedDateTimeAlice = zonedDateTimeAlice;
        return this;
    }

    public void setZonedDateTimeAlice(ZonedDateTime zonedDateTimeAlice) {
        this.zonedDateTimeAlice = zonedDateTimeAlice;
    }

    public ZonedDateTime getZonedDateTimeRequiredAlice() {
        return this.zonedDateTimeRequiredAlice;
    }

    public FieldTestPaginationEntity zonedDateTimeRequiredAlice(ZonedDateTime zonedDateTimeRequiredAlice) {
        this.zonedDateTimeRequiredAlice = zonedDateTimeRequiredAlice;
        return this;
    }

    public void setZonedDateTimeRequiredAlice(ZonedDateTime zonedDateTimeRequiredAlice) {
        this.zonedDateTimeRequiredAlice = zonedDateTimeRequiredAlice;
    }

    public Duration getDurationAlice() {
        return this.durationAlice;
    }

    public FieldTestPaginationEntity durationAlice(Duration durationAlice) {
        this.durationAlice = durationAlice;
        return this;
    }

    public void setDurationAlice(Duration durationAlice) {
        this.durationAlice = durationAlice;
    }

    public Duration getDurationRequiredAlice() {
        return this.durationRequiredAlice;
    }

    public FieldTestPaginationEntity durationRequiredAlice(Duration durationRequiredAlice) {
        this.durationRequiredAlice = durationRequiredAlice;
        return this;
    }

    public void setDurationRequiredAlice(Duration durationRequiredAlice) {
        this.durationRequiredAlice = durationRequiredAlice;
    }

    public Boolean getBooleanAlice() {
        return this.booleanAlice;
    }

    public FieldTestPaginationEntity booleanAlice(Boolean booleanAlice) {
        this.booleanAlice = booleanAlice;
        return this;
    }

    public void setBooleanAlice(Boolean booleanAlice) {
        this.booleanAlice = booleanAlice;
    }

    public Boolean getBooleanRequiredAlice() {
        return this.booleanRequiredAlice;
    }

    public FieldTestPaginationEntity booleanRequiredAlice(Boolean booleanRequiredAlice) {
        this.booleanRequiredAlice = booleanRequiredAlice;
        return this;
    }

    public void setBooleanRequiredAlice(Boolean booleanRequiredAlice) {
        this.booleanRequiredAlice = booleanRequiredAlice;
    }

    public EnumFieldClass getEnumAlice() {
        return this.enumAlice;
    }

    public FieldTestPaginationEntity enumAlice(EnumFieldClass enumAlice) {
        this.enumAlice = enumAlice;
        return this;
    }

    public void setEnumAlice(EnumFieldClass enumAlice) {
        this.enumAlice = enumAlice;
    }

    public EnumRequiredFieldClass getEnumRequiredAlice() {
        return this.enumRequiredAlice;
    }

    public FieldTestPaginationEntity enumRequiredAlice(EnumRequiredFieldClass enumRequiredAlice) {
        this.enumRequiredAlice = enumRequiredAlice;
        return this;
    }

    public void setEnumRequiredAlice(EnumRequiredFieldClass enumRequiredAlice) {
        this.enumRequiredAlice = enumRequiredAlice;
    }

    public UUID getUuidAlice() {
        return this.uuidAlice;
    }

    public FieldTestPaginationEntity uuidAlice(UUID uuidAlice) {
        this.uuidAlice = uuidAlice;
        return this;
    }

    public void setUuidAlice(UUID uuidAlice) {
        this.uuidAlice = uuidAlice;
    }

    public UUID getUuidRequiredAlice() {
        return this.uuidRequiredAlice;
    }

    public FieldTestPaginationEntity uuidRequiredAlice(UUID uuidRequiredAlice) {
        this.uuidRequiredAlice = uuidRequiredAlice;
        return this;
    }

    public void setUuidRequiredAlice(UUID uuidRequiredAlice) {
        this.uuidRequiredAlice = uuidRequiredAlice;
    }

    public byte[] getByteImageAlice() {
        return this.byteImageAlice;
    }

    public FieldTestPaginationEntity byteImageAlice(byte[] byteImageAlice) {
        this.byteImageAlice = byteImageAlice;
        return this;
    }

    public void setByteImageAlice(byte[] byteImageAlice) {
        this.byteImageAlice = byteImageAlice;
    }

    public String getByteImageAliceContentType() {
        return this.byteImageAliceContentType;
    }

    public FieldTestPaginationEntity byteImageAliceContentType(String byteImageAliceContentType) {
        this.byteImageAliceContentType = byteImageAliceContentType;
        return this;
    }

    public void setByteImageAliceContentType(String byteImageAliceContentType) {
        this.byteImageAliceContentType = byteImageAliceContentType;
    }

    public byte[] getByteImageRequiredAlice() {
        return this.byteImageRequiredAlice;
    }

    public FieldTestPaginationEntity byteImageRequiredAlice(byte[] byteImageRequiredAlice) {
        this.byteImageRequiredAlice = byteImageRequiredAlice;
        return this;
    }

    public void setByteImageRequiredAlice(byte[] byteImageRequiredAlice) {
        this.byteImageRequiredAlice = byteImageRequiredAlice;
    }

    public String getByteImageRequiredAliceContentType() {
        return this.byteImageRequiredAliceContentType;
    }

    public FieldTestPaginationEntity byteImageRequiredAliceContentType(String byteImageRequiredAliceContentType) {
        this.byteImageRequiredAliceContentType = byteImageRequiredAliceContentType;
        return this;
    }

    public void setByteImageRequiredAliceContentType(String byteImageRequiredAliceContentType) {
        this.byteImageRequiredAliceContentType = byteImageRequiredAliceContentType;
    }

    public byte[] getByteImageMinbytesAlice() {
        return this.byteImageMinbytesAlice;
    }

    public FieldTestPaginationEntity byteImageMinbytesAlice(byte[] byteImageMinbytesAlice) {
        this.byteImageMinbytesAlice = byteImageMinbytesAlice;
        return this;
    }

    public void setByteImageMinbytesAlice(byte[] byteImageMinbytesAlice) {
        this.byteImageMinbytesAlice = byteImageMinbytesAlice;
    }

    public String getByteImageMinbytesAliceContentType() {
        return this.byteImageMinbytesAliceContentType;
    }

    public FieldTestPaginationEntity byteImageMinbytesAliceContentType(String byteImageMinbytesAliceContentType) {
        this.byteImageMinbytesAliceContentType = byteImageMinbytesAliceContentType;
        return this;
    }

    public void setByteImageMinbytesAliceContentType(String byteImageMinbytesAliceContentType) {
        this.byteImageMinbytesAliceContentType = byteImageMinbytesAliceContentType;
    }

    public byte[] getByteImageMaxbytesAlice() {
        return this.byteImageMaxbytesAlice;
    }

    public FieldTestPaginationEntity byteImageMaxbytesAlice(byte[] byteImageMaxbytesAlice) {
        this.byteImageMaxbytesAlice = byteImageMaxbytesAlice;
        return this;
    }

    public void setByteImageMaxbytesAlice(byte[] byteImageMaxbytesAlice) {
        this.byteImageMaxbytesAlice = byteImageMaxbytesAlice;
    }

    public String getByteImageMaxbytesAliceContentType() {
        return this.byteImageMaxbytesAliceContentType;
    }

    public FieldTestPaginationEntity byteImageMaxbytesAliceContentType(String byteImageMaxbytesAliceContentType) {
        this.byteImageMaxbytesAliceContentType = byteImageMaxbytesAliceContentType;
        return this;
    }

    public void setByteImageMaxbytesAliceContentType(String byteImageMaxbytesAliceContentType) {
        this.byteImageMaxbytesAliceContentType = byteImageMaxbytesAliceContentType;
    }

    public byte[] getByteAnyAlice() {
        return this.byteAnyAlice;
    }

    public FieldTestPaginationEntity byteAnyAlice(byte[] byteAnyAlice) {
        this.byteAnyAlice = byteAnyAlice;
        return this;
    }

    public void setByteAnyAlice(byte[] byteAnyAlice) {
        this.byteAnyAlice = byteAnyAlice;
    }

    public String getByteAnyAliceContentType() {
        return this.byteAnyAliceContentType;
    }

    public FieldTestPaginationEntity byteAnyAliceContentType(String byteAnyAliceContentType) {
        this.byteAnyAliceContentType = byteAnyAliceContentType;
        return this;
    }

    public void setByteAnyAliceContentType(String byteAnyAliceContentType) {
        this.byteAnyAliceContentType = byteAnyAliceContentType;
    }

    public byte[] getByteAnyRequiredAlice() {
        return this.byteAnyRequiredAlice;
    }

    public FieldTestPaginationEntity byteAnyRequiredAlice(byte[] byteAnyRequiredAlice) {
        this.byteAnyRequiredAlice = byteAnyRequiredAlice;
        return this;
    }

    public void setByteAnyRequiredAlice(byte[] byteAnyRequiredAlice) {
        this.byteAnyRequiredAlice = byteAnyRequiredAlice;
    }

    public String getByteAnyRequiredAliceContentType() {
        return this.byteAnyRequiredAliceContentType;
    }

    public FieldTestPaginationEntity byteAnyRequiredAliceContentType(String byteAnyRequiredAliceContentType) {
        this.byteAnyRequiredAliceContentType = byteAnyRequiredAliceContentType;
        return this;
    }

    public void setByteAnyRequiredAliceContentType(String byteAnyRequiredAliceContentType) {
        this.byteAnyRequiredAliceContentType = byteAnyRequiredAliceContentType;
    }

    public byte[] getByteAnyMinbytesAlice() {
        return this.byteAnyMinbytesAlice;
    }

    public FieldTestPaginationEntity byteAnyMinbytesAlice(byte[] byteAnyMinbytesAlice) {
        this.byteAnyMinbytesAlice = byteAnyMinbytesAlice;
        return this;
    }

    public void setByteAnyMinbytesAlice(byte[] byteAnyMinbytesAlice) {
        this.byteAnyMinbytesAlice = byteAnyMinbytesAlice;
    }

    public String getByteAnyMinbytesAliceContentType() {
        return this.byteAnyMinbytesAliceContentType;
    }

    public FieldTestPaginationEntity byteAnyMinbytesAliceContentType(String byteAnyMinbytesAliceContentType) {
        this.byteAnyMinbytesAliceContentType = byteAnyMinbytesAliceContentType;
        return this;
    }

    public void setByteAnyMinbytesAliceContentType(String byteAnyMinbytesAliceContentType) {
        this.byteAnyMinbytesAliceContentType = byteAnyMinbytesAliceContentType;
    }

    public byte[] getByteAnyMaxbytesAlice() {
        return this.byteAnyMaxbytesAlice;
    }

    public FieldTestPaginationEntity byteAnyMaxbytesAlice(byte[] byteAnyMaxbytesAlice) {
        this.byteAnyMaxbytesAlice = byteAnyMaxbytesAlice;
        return this;
    }

    public void setByteAnyMaxbytesAlice(byte[] byteAnyMaxbytesAlice) {
        this.byteAnyMaxbytesAlice = byteAnyMaxbytesAlice;
    }

    public String getByteAnyMaxbytesAliceContentType() {
        return this.byteAnyMaxbytesAliceContentType;
    }

    public FieldTestPaginationEntity byteAnyMaxbytesAliceContentType(String byteAnyMaxbytesAliceContentType) {
        this.byteAnyMaxbytesAliceContentType = byteAnyMaxbytesAliceContentType;
        return this;
    }

    public void setByteAnyMaxbytesAliceContentType(String byteAnyMaxbytesAliceContentType) {
        this.byteAnyMaxbytesAliceContentType = byteAnyMaxbytesAliceContentType;
    }

    public String getByteTextAlice() {
        return this.byteTextAlice;
    }

    public FieldTestPaginationEntity byteTextAlice(String byteTextAlice) {
        this.byteTextAlice = byteTextAlice;
        return this;
    }

    public void setByteTextAlice(String byteTextAlice) {
        this.byteTextAlice = byteTextAlice;
    }

    public String getByteTextRequiredAlice() {
        return this.byteTextRequiredAlice;
    }

    public FieldTestPaginationEntity byteTextRequiredAlice(String byteTextRequiredAlice) {
        this.byteTextRequiredAlice = byteTextRequiredAlice;
        return this;
    }

    public void setByteTextRequiredAlice(String byteTextRequiredAlice) {
        this.byteTextRequiredAlice = byteTextRequiredAlice;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof FieldTestPaginationEntity)) {
            return false;
        }
        return id != null && id.equals(((FieldTestPaginationEntity) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "FieldTestPaginationEntity{" +
            "id=" + getId() +
            ", stringAlice='" + getStringAlice() + "'" +
            ", stringRequiredAlice='" + getStringRequiredAlice() + "'" +
            ", stringMinlengthAlice='" + getStringMinlengthAlice() + "'" +
            ", stringMaxlengthAlice='" + getStringMaxlengthAlice() + "'" +
            ", stringPatternAlice='" + getStringPatternAlice() + "'" +
            ", integerAlice=" + getIntegerAlice() +
            ", integerRequiredAlice=" + getIntegerRequiredAlice() +
            ", integerMinAlice=" + getIntegerMinAlice() +
            ", integerMaxAlice=" + getIntegerMaxAlice() +
            ", longAlice=" + getLongAlice() +
            ", longRequiredAlice=" + getLongRequiredAlice() +
            ", longMinAlice=" + getLongMinAlice() +
            ", longMaxAlice=" + getLongMaxAlice() +
            ", floatAlice=" + getFloatAlice() +
            ", floatRequiredAlice=" + getFloatRequiredAlice() +
            ", floatMinAlice=" + getFloatMinAlice() +
            ", floatMaxAlice=" + getFloatMaxAlice() +
            ", doubleRequiredAlice=" + getDoubleRequiredAlice() +
            ", doubleMinAlice=" + getDoubleMinAlice() +
            ", doubleMaxAlice=" + getDoubleMaxAlice() +
            ", bigDecimalRequiredAlice=" + getBigDecimalRequiredAlice() +
            ", bigDecimalMinAlice=" + getBigDecimalMinAlice() +
            ", bigDecimalMaxAlice=" + getBigDecimalMaxAlice() +
            ", localDateAlice='" + getLocalDateAlice() + "'" +
            ", localDateRequiredAlice='" + getLocalDateRequiredAlice() + "'" +
            ", instantAlice='" + getInstantAlice() + "'" +
            ", instanteRequiredAlice='" + getInstanteRequiredAlice() + "'" +
            ", zonedDateTimeAlice='" + getZonedDateTimeAlice() + "'" +
            ", zonedDateTimeRequiredAlice='" + getZonedDateTimeRequiredAlice() + "'" +
            ", durationAlice='" + getDurationAlice() + "'" +
            ", durationRequiredAlice='" + getDurationRequiredAlice() + "'" +
            ", booleanAlice='" + getBooleanAlice() + "'" +
            ", booleanRequiredAlice='" + getBooleanRequiredAlice() + "'" +
            ", enumAlice='" + getEnumAlice() + "'" +
            ", enumRequiredAlice='" + getEnumRequiredAlice() + "'" +
            ", uuidAlice='" + getUuidAlice() + "'" +
            ", uuidRequiredAlice='" + getUuidRequiredAlice() + "'" +
            ", byteImageAlice='" + getByteImageAlice() + "'" +
            ", byteImageAliceContentType='" + getByteImageAliceContentType() + "'" +
            ", byteImageRequiredAlice='" + getByteImageRequiredAlice() + "'" +
            ", byteImageRequiredAliceContentType='" + getByteImageRequiredAliceContentType() + "'" +
            ", byteImageMinbytesAlice='" + getByteImageMinbytesAlice() + "'" +
            ", byteImageMinbytesAliceContentType='" + getByteImageMinbytesAliceContentType() + "'" +
            ", byteImageMaxbytesAlice='" + getByteImageMaxbytesAlice() + "'" +
            ", byteImageMaxbytesAliceContentType='" + getByteImageMaxbytesAliceContentType() + "'" +
            ", byteAnyAlice='" + getByteAnyAlice() + "'" +
            ", byteAnyAliceContentType='" + getByteAnyAliceContentType() + "'" +
            ", byteAnyRequiredAlice='" + getByteAnyRequiredAlice() + "'" +
            ", byteAnyRequiredAliceContentType='" + getByteAnyRequiredAliceContentType() + "'" +
            ", byteAnyMinbytesAlice='" + getByteAnyMinbytesAlice() + "'" +
            ", byteAnyMinbytesAliceContentType='" + getByteAnyMinbytesAliceContentType() + "'" +
            ", byteAnyMaxbytesAlice='" + getByteAnyMaxbytesAlice() + "'" +
            ", byteAnyMaxbytesAliceContentType='" + getByteAnyMaxbytesAliceContentType() + "'" +
            ", byteTextAlice='" + getByteTextAlice() + "'" +
            ", byteTextRequiredAlice='" + getByteTextRequiredAlice() + "'" +
            "}";
    }
}
