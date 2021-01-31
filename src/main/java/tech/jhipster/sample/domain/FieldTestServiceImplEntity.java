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
 * A FieldTestServiceImplEntity.
 */
@Document
public class FieldTestServiceImplEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    public static final String PREFIX = "fieldtestserviceimplentity";

    @SuppressWarnings("unused")
    @IdPrefix
    private String prefix = PREFIX;

    @Id
    @GeneratedValue(strategy = UNIQUE, delimiter = ID_DELIMITER)
    private String id;

    @Field("string_mika")
    private String stringMika;

    @NotNull(message = "must not be null")
    @Field("string_required_mika")
    private String stringRequiredMika;

    @Size(min = 0)
    @Field("string_minlength_mika")
    private String stringMinlengthMika;

    @Size(max = 20)
    @Field("string_maxlength_mika")
    private String stringMaxlengthMika;

    @Pattern(regexp = "^[a-zA-Z0-9]*$")
    @Field("string_pattern_mika")
    private String stringPatternMika;

    @Field("integer_mika")
    private Integer integerMika;

    @NotNull(message = "must not be null")
    @Field("integer_required_mika")
    private Integer integerRequiredMika;

    @Min(value = 0)
    @Field("integer_min_mika")
    private Integer integerMinMika;

    @Max(value = 100)
    @Field("integer_max_mika")
    private Integer integerMaxMika;

    @Field("long_mika")
    private Long longMika;

    @NotNull(message = "must not be null")
    @Field("long_required_mika")
    private Long longRequiredMika;

    @Min(value = 0L)
    @Field("long_min_mika")
    private Long longMinMika;

    @Max(value = 100L)
    @Field("long_max_mika")
    private Long longMaxMika;

    @Field("float_mika")
    private Float floatMika;

    @NotNull(message = "must not be null")
    @Field("float_required_mika")
    private Float floatRequiredMika;

    @DecimalMin(value = "0")
    @Field("float_min_mika")
    private Float floatMinMika;

    @DecimalMax(value = "100")
    @Field("float_max_mika")
    private Float floatMaxMika;

    @NotNull(message = "must not be null")
    @Field("double_required_mika")
    private Double doubleRequiredMika;

    @DecimalMin(value = "0")
    @Field("double_min_mika")
    private Double doubleMinMika;

    @DecimalMax(value = "100")
    @Field("double_max_mika")
    private Double doubleMaxMika;

    @NotNull(message = "must not be null")
    @Field("big_decimal_required_mika")
    private BigDecimal bigDecimalRequiredMika;

    @DecimalMin(value = "0")
    @Field("big_decimal_min_mika")
    private BigDecimal bigDecimalMinMika;

    @DecimalMax(value = "100")
    @Field("big_decimal_max_mika")
    private BigDecimal bigDecimalMaxMika;

    @Field("local_date_mika")
    private LocalDate localDateMika;

    @NotNull(message = "must not be null")
    @Field("local_date_required_mika")
    private LocalDate localDateRequiredMika;

    @Field("instant_mika")
    private Instant instantMika;

    @NotNull(message = "must not be null")
    @Field("instante_required_mika")
    private Instant instanteRequiredMika;

    @Field("zoned_date_time_mika")
    private ZonedDateTime zonedDateTimeMika;

    @NotNull(message = "must not be null")
    @Field("zoned_date_time_required_mika")
    private ZonedDateTime zonedDateTimeRequiredMika;

    @Field("duration_mika")
    private Duration durationMika;

    @NotNull(message = "must not be null")
    @Field("duration_required_mika")
    private Duration durationRequiredMika;

    @Field("boolean_mika")
    private Boolean booleanMika;

    @NotNull(message = "must not be null")
    @Field("boolean_required_mika")
    private Boolean booleanRequiredMika;

    @Field("enum_mika")
    private EnumFieldClass enumMika;

    @NotNull(message = "must not be null")
    @Field("enum_required_mika")
    private EnumRequiredFieldClass enumRequiredMika;

    @Field("uuid_mika")
    private UUID uuidMika;

    @NotNull(message = "must not be null")
    @Field("uuid_required_mika")
    private UUID uuidRequiredMika;

    @Field("byte_image_mika")
    private byte[] byteImageMika;

    @Field("byte_image_mika_content_type")
    private String byteImageMikaContentType;

    @Field("byte_image_required_mika")
    private byte[] byteImageRequiredMika;

    @Field("byte_image_required_mika_content_type")
    private String byteImageRequiredMikaContentType;

    @Field("byte_image_minbytes_mika")
    private byte[] byteImageMinbytesMika;

    @Field("byte_image_minbytes_mika_content_type")
    private String byteImageMinbytesMikaContentType;

    @Field("byte_image_maxbytes_mika")
    private byte[] byteImageMaxbytesMika;

    @Field("byte_image_maxbytes_mika_content_type")
    private String byteImageMaxbytesMikaContentType;

    @Field("byte_any_mika")
    private byte[] byteAnyMika;

    @Field("byte_any_mika_content_type")
    private String byteAnyMikaContentType;

    @Field("byte_any_required_mika")
    private byte[] byteAnyRequiredMika;

    @Field("byte_any_required_mika_content_type")
    private String byteAnyRequiredMikaContentType;

    @Field("byte_any_minbytes_mika")
    private byte[] byteAnyMinbytesMika;

    @Field("byte_any_minbytes_mika_content_type")
    private String byteAnyMinbytesMikaContentType;

    @Field("byte_any_maxbytes_mika")
    private byte[] byteAnyMaxbytesMika;

    @Field("byte_any_maxbytes_mika_content_type")
    private String byteAnyMaxbytesMikaContentType;

    @Field("byte_text_mika")
    private String byteTextMika;

    @Field("byte_text_required_mika")
    private String byteTextRequiredMika;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public FieldTestServiceImplEntity id(String id) {
        this.id = id;
        return this;
    }

    public String getStringMika() {
        return this.stringMika;
    }

    public FieldTestServiceImplEntity stringMika(String stringMika) {
        this.stringMika = stringMika;
        return this;
    }

    public void setStringMika(String stringMika) {
        this.stringMika = stringMika;
    }

    public String getStringRequiredMika() {
        return this.stringRequiredMika;
    }

    public FieldTestServiceImplEntity stringRequiredMika(String stringRequiredMika) {
        this.stringRequiredMika = stringRequiredMika;
        return this;
    }

    public void setStringRequiredMika(String stringRequiredMika) {
        this.stringRequiredMika = stringRequiredMika;
    }

    public String getStringMinlengthMika() {
        return this.stringMinlengthMika;
    }

    public FieldTestServiceImplEntity stringMinlengthMika(String stringMinlengthMika) {
        this.stringMinlengthMika = stringMinlengthMika;
        return this;
    }

    public void setStringMinlengthMika(String stringMinlengthMika) {
        this.stringMinlengthMika = stringMinlengthMika;
    }

    public String getStringMaxlengthMika() {
        return this.stringMaxlengthMika;
    }

    public FieldTestServiceImplEntity stringMaxlengthMika(String stringMaxlengthMika) {
        this.stringMaxlengthMika = stringMaxlengthMika;
        return this;
    }

    public void setStringMaxlengthMika(String stringMaxlengthMika) {
        this.stringMaxlengthMika = stringMaxlengthMika;
    }

    public String getStringPatternMika() {
        return this.stringPatternMika;
    }

    public FieldTestServiceImplEntity stringPatternMika(String stringPatternMika) {
        this.stringPatternMika = stringPatternMika;
        return this;
    }

    public void setStringPatternMika(String stringPatternMika) {
        this.stringPatternMika = stringPatternMika;
    }

    public Integer getIntegerMika() {
        return this.integerMika;
    }

    public FieldTestServiceImplEntity integerMika(Integer integerMika) {
        this.integerMika = integerMika;
        return this;
    }

    public void setIntegerMika(Integer integerMika) {
        this.integerMika = integerMika;
    }

    public Integer getIntegerRequiredMika() {
        return this.integerRequiredMika;
    }

    public FieldTestServiceImplEntity integerRequiredMika(Integer integerRequiredMika) {
        this.integerRequiredMika = integerRequiredMika;
        return this;
    }

    public void setIntegerRequiredMika(Integer integerRequiredMika) {
        this.integerRequiredMika = integerRequiredMika;
    }

    public Integer getIntegerMinMika() {
        return this.integerMinMika;
    }

    public FieldTestServiceImplEntity integerMinMika(Integer integerMinMika) {
        this.integerMinMika = integerMinMika;
        return this;
    }

    public void setIntegerMinMika(Integer integerMinMika) {
        this.integerMinMika = integerMinMika;
    }

    public Integer getIntegerMaxMika() {
        return this.integerMaxMika;
    }

    public FieldTestServiceImplEntity integerMaxMika(Integer integerMaxMika) {
        this.integerMaxMika = integerMaxMika;
        return this;
    }

    public void setIntegerMaxMika(Integer integerMaxMika) {
        this.integerMaxMika = integerMaxMika;
    }

    public Long getLongMika() {
        return this.longMika;
    }

    public FieldTestServiceImplEntity longMika(Long longMika) {
        this.longMika = longMika;
        return this;
    }

    public void setLongMika(Long longMika) {
        this.longMika = longMika;
    }

    public Long getLongRequiredMika() {
        return this.longRequiredMika;
    }

    public FieldTestServiceImplEntity longRequiredMika(Long longRequiredMika) {
        this.longRequiredMika = longRequiredMika;
        return this;
    }

    public void setLongRequiredMika(Long longRequiredMika) {
        this.longRequiredMika = longRequiredMika;
    }

    public Long getLongMinMika() {
        return this.longMinMika;
    }

    public FieldTestServiceImplEntity longMinMika(Long longMinMika) {
        this.longMinMika = longMinMika;
        return this;
    }

    public void setLongMinMika(Long longMinMika) {
        this.longMinMika = longMinMika;
    }

    public Long getLongMaxMika() {
        return this.longMaxMika;
    }

    public FieldTestServiceImplEntity longMaxMika(Long longMaxMika) {
        this.longMaxMika = longMaxMika;
        return this;
    }

    public void setLongMaxMika(Long longMaxMika) {
        this.longMaxMika = longMaxMika;
    }

    public Float getFloatMika() {
        return this.floatMika;
    }

    public FieldTestServiceImplEntity floatMika(Float floatMika) {
        this.floatMika = floatMika;
        return this;
    }

    public void setFloatMika(Float floatMika) {
        this.floatMika = floatMika;
    }

    public Float getFloatRequiredMika() {
        return this.floatRequiredMika;
    }

    public FieldTestServiceImplEntity floatRequiredMika(Float floatRequiredMika) {
        this.floatRequiredMika = floatRequiredMika;
        return this;
    }

    public void setFloatRequiredMika(Float floatRequiredMika) {
        this.floatRequiredMika = floatRequiredMika;
    }

    public Float getFloatMinMika() {
        return this.floatMinMika;
    }

    public FieldTestServiceImplEntity floatMinMika(Float floatMinMika) {
        this.floatMinMika = floatMinMika;
        return this;
    }

    public void setFloatMinMika(Float floatMinMika) {
        this.floatMinMika = floatMinMika;
    }

    public Float getFloatMaxMika() {
        return this.floatMaxMika;
    }

    public FieldTestServiceImplEntity floatMaxMika(Float floatMaxMika) {
        this.floatMaxMika = floatMaxMika;
        return this;
    }

    public void setFloatMaxMika(Float floatMaxMika) {
        this.floatMaxMika = floatMaxMika;
    }

    public Double getDoubleRequiredMika() {
        return this.doubleRequiredMika;
    }

    public FieldTestServiceImplEntity doubleRequiredMika(Double doubleRequiredMika) {
        this.doubleRequiredMika = doubleRequiredMika;
        return this;
    }

    public void setDoubleRequiredMika(Double doubleRequiredMika) {
        this.doubleRequiredMika = doubleRequiredMika;
    }

    public Double getDoubleMinMika() {
        return this.doubleMinMika;
    }

    public FieldTestServiceImplEntity doubleMinMika(Double doubleMinMika) {
        this.doubleMinMika = doubleMinMika;
        return this;
    }

    public void setDoubleMinMika(Double doubleMinMika) {
        this.doubleMinMika = doubleMinMika;
    }

    public Double getDoubleMaxMika() {
        return this.doubleMaxMika;
    }

    public FieldTestServiceImplEntity doubleMaxMika(Double doubleMaxMika) {
        this.doubleMaxMika = doubleMaxMika;
        return this;
    }

    public void setDoubleMaxMika(Double doubleMaxMika) {
        this.doubleMaxMika = doubleMaxMika;
    }

    public BigDecimal getBigDecimalRequiredMika() {
        return this.bigDecimalRequiredMika;
    }

    public FieldTestServiceImplEntity bigDecimalRequiredMika(BigDecimal bigDecimalRequiredMika) {
        this.bigDecimalRequiredMika = bigDecimalRequiredMika;
        return this;
    }

    public void setBigDecimalRequiredMika(BigDecimal bigDecimalRequiredMika) {
        this.bigDecimalRequiredMika = bigDecimalRequiredMika;
    }

    public BigDecimal getBigDecimalMinMika() {
        return this.bigDecimalMinMika;
    }

    public FieldTestServiceImplEntity bigDecimalMinMika(BigDecimal bigDecimalMinMika) {
        this.bigDecimalMinMika = bigDecimalMinMika;
        return this;
    }

    public void setBigDecimalMinMika(BigDecimal bigDecimalMinMika) {
        this.bigDecimalMinMika = bigDecimalMinMika;
    }

    public BigDecimal getBigDecimalMaxMika() {
        return this.bigDecimalMaxMika;
    }

    public FieldTestServiceImplEntity bigDecimalMaxMika(BigDecimal bigDecimalMaxMika) {
        this.bigDecimalMaxMika = bigDecimalMaxMika;
        return this;
    }

    public void setBigDecimalMaxMika(BigDecimal bigDecimalMaxMika) {
        this.bigDecimalMaxMika = bigDecimalMaxMika;
    }

    public LocalDate getLocalDateMika() {
        return this.localDateMika;
    }

    public FieldTestServiceImplEntity localDateMika(LocalDate localDateMika) {
        this.localDateMika = localDateMika;
        return this;
    }

    public void setLocalDateMika(LocalDate localDateMika) {
        this.localDateMika = localDateMika;
    }

    public LocalDate getLocalDateRequiredMika() {
        return this.localDateRequiredMika;
    }

    public FieldTestServiceImplEntity localDateRequiredMika(LocalDate localDateRequiredMika) {
        this.localDateRequiredMika = localDateRequiredMika;
        return this;
    }

    public void setLocalDateRequiredMika(LocalDate localDateRequiredMika) {
        this.localDateRequiredMika = localDateRequiredMika;
    }

    public Instant getInstantMika() {
        return this.instantMika;
    }

    public FieldTestServiceImplEntity instantMika(Instant instantMika) {
        this.instantMika = instantMika;
        return this;
    }

    public void setInstantMika(Instant instantMika) {
        this.instantMika = instantMika;
    }

    public Instant getInstanteRequiredMika() {
        return this.instanteRequiredMika;
    }

    public FieldTestServiceImplEntity instanteRequiredMika(Instant instanteRequiredMika) {
        this.instanteRequiredMika = instanteRequiredMika;
        return this;
    }

    public void setInstanteRequiredMika(Instant instanteRequiredMika) {
        this.instanteRequiredMika = instanteRequiredMika;
    }

    public ZonedDateTime getZonedDateTimeMika() {
        return this.zonedDateTimeMika;
    }

    public FieldTestServiceImplEntity zonedDateTimeMika(ZonedDateTime zonedDateTimeMika) {
        this.zonedDateTimeMika = zonedDateTimeMika;
        return this;
    }

    public void setZonedDateTimeMika(ZonedDateTime zonedDateTimeMika) {
        this.zonedDateTimeMika = zonedDateTimeMika;
    }

    public ZonedDateTime getZonedDateTimeRequiredMika() {
        return this.zonedDateTimeRequiredMika;
    }

    public FieldTestServiceImplEntity zonedDateTimeRequiredMika(ZonedDateTime zonedDateTimeRequiredMika) {
        this.zonedDateTimeRequiredMika = zonedDateTimeRequiredMika;
        return this;
    }

    public void setZonedDateTimeRequiredMika(ZonedDateTime zonedDateTimeRequiredMika) {
        this.zonedDateTimeRequiredMika = zonedDateTimeRequiredMika;
    }

    public Duration getDurationMika() {
        return this.durationMika;
    }

    public FieldTestServiceImplEntity durationMika(Duration durationMika) {
        this.durationMika = durationMika;
        return this;
    }

    public void setDurationMika(Duration durationMika) {
        this.durationMika = durationMika;
    }

    public Duration getDurationRequiredMika() {
        return this.durationRequiredMika;
    }

    public FieldTestServiceImplEntity durationRequiredMika(Duration durationRequiredMika) {
        this.durationRequiredMika = durationRequiredMika;
        return this;
    }

    public void setDurationRequiredMika(Duration durationRequiredMika) {
        this.durationRequiredMika = durationRequiredMika;
    }

    public Boolean getBooleanMika() {
        return this.booleanMika;
    }

    public FieldTestServiceImplEntity booleanMika(Boolean booleanMika) {
        this.booleanMika = booleanMika;
        return this;
    }

    public void setBooleanMika(Boolean booleanMika) {
        this.booleanMika = booleanMika;
    }

    public Boolean getBooleanRequiredMika() {
        return this.booleanRequiredMika;
    }

    public FieldTestServiceImplEntity booleanRequiredMika(Boolean booleanRequiredMika) {
        this.booleanRequiredMika = booleanRequiredMika;
        return this;
    }

    public void setBooleanRequiredMika(Boolean booleanRequiredMika) {
        this.booleanRequiredMika = booleanRequiredMika;
    }

    public EnumFieldClass getEnumMika() {
        return this.enumMika;
    }

    public FieldTestServiceImplEntity enumMika(EnumFieldClass enumMika) {
        this.enumMika = enumMika;
        return this;
    }

    public void setEnumMika(EnumFieldClass enumMika) {
        this.enumMika = enumMika;
    }

    public EnumRequiredFieldClass getEnumRequiredMika() {
        return this.enumRequiredMika;
    }

    public FieldTestServiceImplEntity enumRequiredMika(EnumRequiredFieldClass enumRequiredMika) {
        this.enumRequiredMika = enumRequiredMika;
        return this;
    }

    public void setEnumRequiredMika(EnumRequiredFieldClass enumRequiredMika) {
        this.enumRequiredMika = enumRequiredMika;
    }

    public UUID getUuidMika() {
        return this.uuidMika;
    }

    public FieldTestServiceImplEntity uuidMika(UUID uuidMika) {
        this.uuidMika = uuidMika;
        return this;
    }

    public void setUuidMika(UUID uuidMika) {
        this.uuidMika = uuidMika;
    }

    public UUID getUuidRequiredMika() {
        return this.uuidRequiredMika;
    }

    public FieldTestServiceImplEntity uuidRequiredMika(UUID uuidRequiredMika) {
        this.uuidRequiredMika = uuidRequiredMika;
        return this;
    }

    public void setUuidRequiredMika(UUID uuidRequiredMika) {
        this.uuidRequiredMika = uuidRequiredMika;
    }

    public byte[] getByteImageMika() {
        return this.byteImageMika;
    }

    public FieldTestServiceImplEntity byteImageMika(byte[] byteImageMika) {
        this.byteImageMika = byteImageMika;
        return this;
    }

    public void setByteImageMika(byte[] byteImageMika) {
        this.byteImageMika = byteImageMika;
    }

    public String getByteImageMikaContentType() {
        return this.byteImageMikaContentType;
    }

    public FieldTestServiceImplEntity byteImageMikaContentType(String byteImageMikaContentType) {
        this.byteImageMikaContentType = byteImageMikaContentType;
        return this;
    }

    public void setByteImageMikaContentType(String byteImageMikaContentType) {
        this.byteImageMikaContentType = byteImageMikaContentType;
    }

    public byte[] getByteImageRequiredMika() {
        return this.byteImageRequiredMika;
    }

    public FieldTestServiceImplEntity byteImageRequiredMika(byte[] byteImageRequiredMika) {
        this.byteImageRequiredMika = byteImageRequiredMika;
        return this;
    }

    public void setByteImageRequiredMika(byte[] byteImageRequiredMika) {
        this.byteImageRequiredMika = byteImageRequiredMika;
    }

    public String getByteImageRequiredMikaContentType() {
        return this.byteImageRequiredMikaContentType;
    }

    public FieldTestServiceImplEntity byteImageRequiredMikaContentType(String byteImageRequiredMikaContentType) {
        this.byteImageRequiredMikaContentType = byteImageRequiredMikaContentType;
        return this;
    }

    public void setByteImageRequiredMikaContentType(String byteImageRequiredMikaContentType) {
        this.byteImageRequiredMikaContentType = byteImageRequiredMikaContentType;
    }

    public byte[] getByteImageMinbytesMika() {
        return this.byteImageMinbytesMika;
    }

    public FieldTestServiceImplEntity byteImageMinbytesMika(byte[] byteImageMinbytesMika) {
        this.byteImageMinbytesMika = byteImageMinbytesMika;
        return this;
    }

    public void setByteImageMinbytesMika(byte[] byteImageMinbytesMika) {
        this.byteImageMinbytesMika = byteImageMinbytesMika;
    }

    public String getByteImageMinbytesMikaContentType() {
        return this.byteImageMinbytesMikaContentType;
    }

    public FieldTestServiceImplEntity byteImageMinbytesMikaContentType(String byteImageMinbytesMikaContentType) {
        this.byteImageMinbytesMikaContentType = byteImageMinbytesMikaContentType;
        return this;
    }

    public void setByteImageMinbytesMikaContentType(String byteImageMinbytesMikaContentType) {
        this.byteImageMinbytesMikaContentType = byteImageMinbytesMikaContentType;
    }

    public byte[] getByteImageMaxbytesMika() {
        return this.byteImageMaxbytesMika;
    }

    public FieldTestServiceImplEntity byteImageMaxbytesMika(byte[] byteImageMaxbytesMika) {
        this.byteImageMaxbytesMika = byteImageMaxbytesMika;
        return this;
    }

    public void setByteImageMaxbytesMika(byte[] byteImageMaxbytesMika) {
        this.byteImageMaxbytesMika = byteImageMaxbytesMika;
    }

    public String getByteImageMaxbytesMikaContentType() {
        return this.byteImageMaxbytesMikaContentType;
    }

    public FieldTestServiceImplEntity byteImageMaxbytesMikaContentType(String byteImageMaxbytesMikaContentType) {
        this.byteImageMaxbytesMikaContentType = byteImageMaxbytesMikaContentType;
        return this;
    }

    public void setByteImageMaxbytesMikaContentType(String byteImageMaxbytesMikaContentType) {
        this.byteImageMaxbytesMikaContentType = byteImageMaxbytesMikaContentType;
    }

    public byte[] getByteAnyMika() {
        return this.byteAnyMika;
    }

    public FieldTestServiceImplEntity byteAnyMika(byte[] byteAnyMika) {
        this.byteAnyMika = byteAnyMika;
        return this;
    }

    public void setByteAnyMika(byte[] byteAnyMika) {
        this.byteAnyMika = byteAnyMika;
    }

    public String getByteAnyMikaContentType() {
        return this.byteAnyMikaContentType;
    }

    public FieldTestServiceImplEntity byteAnyMikaContentType(String byteAnyMikaContentType) {
        this.byteAnyMikaContentType = byteAnyMikaContentType;
        return this;
    }

    public void setByteAnyMikaContentType(String byteAnyMikaContentType) {
        this.byteAnyMikaContentType = byteAnyMikaContentType;
    }

    public byte[] getByteAnyRequiredMika() {
        return this.byteAnyRequiredMika;
    }

    public FieldTestServiceImplEntity byteAnyRequiredMika(byte[] byteAnyRequiredMika) {
        this.byteAnyRequiredMika = byteAnyRequiredMika;
        return this;
    }

    public void setByteAnyRequiredMika(byte[] byteAnyRequiredMika) {
        this.byteAnyRequiredMika = byteAnyRequiredMika;
    }

    public String getByteAnyRequiredMikaContentType() {
        return this.byteAnyRequiredMikaContentType;
    }

    public FieldTestServiceImplEntity byteAnyRequiredMikaContentType(String byteAnyRequiredMikaContentType) {
        this.byteAnyRequiredMikaContentType = byteAnyRequiredMikaContentType;
        return this;
    }

    public void setByteAnyRequiredMikaContentType(String byteAnyRequiredMikaContentType) {
        this.byteAnyRequiredMikaContentType = byteAnyRequiredMikaContentType;
    }

    public byte[] getByteAnyMinbytesMika() {
        return this.byteAnyMinbytesMika;
    }

    public FieldTestServiceImplEntity byteAnyMinbytesMika(byte[] byteAnyMinbytesMika) {
        this.byteAnyMinbytesMika = byteAnyMinbytesMika;
        return this;
    }

    public void setByteAnyMinbytesMika(byte[] byteAnyMinbytesMika) {
        this.byteAnyMinbytesMika = byteAnyMinbytesMika;
    }

    public String getByteAnyMinbytesMikaContentType() {
        return this.byteAnyMinbytesMikaContentType;
    }

    public FieldTestServiceImplEntity byteAnyMinbytesMikaContentType(String byteAnyMinbytesMikaContentType) {
        this.byteAnyMinbytesMikaContentType = byteAnyMinbytesMikaContentType;
        return this;
    }

    public void setByteAnyMinbytesMikaContentType(String byteAnyMinbytesMikaContentType) {
        this.byteAnyMinbytesMikaContentType = byteAnyMinbytesMikaContentType;
    }

    public byte[] getByteAnyMaxbytesMika() {
        return this.byteAnyMaxbytesMika;
    }

    public FieldTestServiceImplEntity byteAnyMaxbytesMika(byte[] byteAnyMaxbytesMika) {
        this.byteAnyMaxbytesMika = byteAnyMaxbytesMika;
        return this;
    }

    public void setByteAnyMaxbytesMika(byte[] byteAnyMaxbytesMika) {
        this.byteAnyMaxbytesMika = byteAnyMaxbytesMika;
    }

    public String getByteAnyMaxbytesMikaContentType() {
        return this.byteAnyMaxbytesMikaContentType;
    }

    public FieldTestServiceImplEntity byteAnyMaxbytesMikaContentType(String byteAnyMaxbytesMikaContentType) {
        this.byteAnyMaxbytesMikaContentType = byteAnyMaxbytesMikaContentType;
        return this;
    }

    public void setByteAnyMaxbytesMikaContentType(String byteAnyMaxbytesMikaContentType) {
        this.byteAnyMaxbytesMikaContentType = byteAnyMaxbytesMikaContentType;
    }

    public String getByteTextMika() {
        return this.byteTextMika;
    }

    public FieldTestServiceImplEntity byteTextMika(String byteTextMika) {
        this.byteTextMika = byteTextMika;
        return this;
    }

    public void setByteTextMika(String byteTextMika) {
        this.byteTextMika = byteTextMika;
    }

    public String getByteTextRequiredMika() {
        return this.byteTextRequiredMika;
    }

    public FieldTestServiceImplEntity byteTextRequiredMika(String byteTextRequiredMika) {
        this.byteTextRequiredMika = byteTextRequiredMika;
        return this;
    }

    public void setByteTextRequiredMika(String byteTextRequiredMika) {
        this.byteTextRequiredMika = byteTextRequiredMika;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof FieldTestServiceImplEntity)) {
            return false;
        }
        return id != null && id.equals(((FieldTestServiceImplEntity) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "FieldTestServiceImplEntity{" +
            "id=" + getId() +
            ", stringMika='" + getStringMika() + "'" +
            ", stringRequiredMika='" + getStringRequiredMika() + "'" +
            ", stringMinlengthMika='" + getStringMinlengthMika() + "'" +
            ", stringMaxlengthMika='" + getStringMaxlengthMika() + "'" +
            ", stringPatternMika='" + getStringPatternMika() + "'" +
            ", integerMika=" + getIntegerMika() +
            ", integerRequiredMika=" + getIntegerRequiredMika() +
            ", integerMinMika=" + getIntegerMinMika() +
            ", integerMaxMika=" + getIntegerMaxMika() +
            ", longMika=" + getLongMika() +
            ", longRequiredMika=" + getLongRequiredMika() +
            ", longMinMika=" + getLongMinMika() +
            ", longMaxMika=" + getLongMaxMika() +
            ", floatMika=" + getFloatMika() +
            ", floatRequiredMika=" + getFloatRequiredMika() +
            ", floatMinMika=" + getFloatMinMika() +
            ", floatMaxMika=" + getFloatMaxMika() +
            ", doubleRequiredMika=" + getDoubleRequiredMika() +
            ", doubleMinMika=" + getDoubleMinMika() +
            ", doubleMaxMika=" + getDoubleMaxMika() +
            ", bigDecimalRequiredMika=" + getBigDecimalRequiredMika() +
            ", bigDecimalMinMika=" + getBigDecimalMinMika() +
            ", bigDecimalMaxMika=" + getBigDecimalMaxMika() +
            ", localDateMika='" + getLocalDateMika() + "'" +
            ", localDateRequiredMika='" + getLocalDateRequiredMika() + "'" +
            ", instantMika='" + getInstantMika() + "'" +
            ", instanteRequiredMika='" + getInstanteRequiredMika() + "'" +
            ", zonedDateTimeMika='" + getZonedDateTimeMika() + "'" +
            ", zonedDateTimeRequiredMika='" + getZonedDateTimeRequiredMika() + "'" +
            ", durationMika='" + getDurationMika() + "'" +
            ", durationRequiredMika='" + getDurationRequiredMika() + "'" +
            ", booleanMika='" + getBooleanMika() + "'" +
            ", booleanRequiredMika='" + getBooleanRequiredMika() + "'" +
            ", enumMika='" + getEnumMika() + "'" +
            ", enumRequiredMika='" + getEnumRequiredMika() + "'" +
            ", uuidMika='" + getUuidMika() + "'" +
            ", uuidRequiredMika='" + getUuidRequiredMika() + "'" +
            ", byteImageMika='" + getByteImageMika() + "'" +
            ", byteImageMikaContentType='" + getByteImageMikaContentType() + "'" +
            ", byteImageRequiredMika='" + getByteImageRequiredMika() + "'" +
            ", byteImageRequiredMikaContentType='" + getByteImageRequiredMikaContentType() + "'" +
            ", byteImageMinbytesMika='" + getByteImageMinbytesMika() + "'" +
            ", byteImageMinbytesMikaContentType='" + getByteImageMinbytesMikaContentType() + "'" +
            ", byteImageMaxbytesMika='" + getByteImageMaxbytesMika() + "'" +
            ", byteImageMaxbytesMikaContentType='" + getByteImageMaxbytesMikaContentType() + "'" +
            ", byteAnyMika='" + getByteAnyMika() + "'" +
            ", byteAnyMikaContentType='" + getByteAnyMikaContentType() + "'" +
            ", byteAnyRequiredMika='" + getByteAnyRequiredMika() + "'" +
            ", byteAnyRequiredMikaContentType='" + getByteAnyRequiredMikaContentType() + "'" +
            ", byteAnyMinbytesMika='" + getByteAnyMinbytesMika() + "'" +
            ", byteAnyMinbytesMikaContentType='" + getByteAnyMinbytesMikaContentType() + "'" +
            ", byteAnyMaxbytesMika='" + getByteAnyMaxbytesMika() + "'" +
            ", byteAnyMaxbytesMikaContentType='" + getByteAnyMaxbytesMikaContentType() + "'" +
            ", byteTextMika='" + getByteTextMika() + "'" +
            ", byteTextRequiredMika='" + getByteTextRequiredMika() + "'" +
            "}";
    }
}
