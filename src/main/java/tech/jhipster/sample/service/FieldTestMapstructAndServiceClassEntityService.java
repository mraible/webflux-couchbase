package tech.jhipster.sample.service;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.sample.domain.FieldTestMapstructAndServiceClassEntity;
import tech.jhipster.sample.repository.FieldTestMapstructAndServiceClassEntityRepository;
import tech.jhipster.sample.service.dto.FieldTestMapstructAndServiceClassEntityDTO;
import tech.jhipster.sample.service.mapper.FieldTestMapstructAndServiceClassEntityMapper;

/**
 * Service Implementation for managing {@link FieldTestMapstructAndServiceClassEntity}.
 */
@Service
public class FieldTestMapstructAndServiceClassEntityService {

    private final Logger log = LoggerFactory.getLogger(FieldTestMapstructAndServiceClassEntityService.class);

    private final FieldTestMapstructAndServiceClassEntityRepository fieldTestMapstructAndServiceClassEntityRepository;

    private final FieldTestMapstructAndServiceClassEntityMapper fieldTestMapstructAndServiceClassEntityMapper;

    public FieldTestMapstructAndServiceClassEntityService(
        FieldTestMapstructAndServiceClassEntityRepository fieldTestMapstructAndServiceClassEntityRepository,
        FieldTestMapstructAndServiceClassEntityMapper fieldTestMapstructAndServiceClassEntityMapper
    ) {
        this.fieldTestMapstructAndServiceClassEntityRepository = fieldTestMapstructAndServiceClassEntityRepository;
        this.fieldTestMapstructAndServiceClassEntityMapper = fieldTestMapstructAndServiceClassEntityMapper;
    }

    /**
     * Save a fieldTestMapstructAndServiceClassEntity.
     *
     * @param fieldTestMapstructAndServiceClassEntityDTO the entity to save.
     * @return the persisted entity.
     */
    public Mono<FieldTestMapstructAndServiceClassEntityDTO> save(
        FieldTestMapstructAndServiceClassEntityDTO fieldTestMapstructAndServiceClassEntityDTO
    ) {
        log.debug("Request to save FieldTestMapstructAndServiceClassEntity : {}", fieldTestMapstructAndServiceClassEntityDTO);
        return fieldTestMapstructAndServiceClassEntityRepository
            .save(fieldTestMapstructAndServiceClassEntityMapper.toEntity(fieldTestMapstructAndServiceClassEntityDTO))
            .map(fieldTestMapstructAndServiceClassEntityMapper::toDto);
    }

    /**
     * Partially update a fieldTestMapstructAndServiceClassEntity.
     *
     * @param fieldTestMapstructAndServiceClassEntityDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Mono<FieldTestMapstructAndServiceClassEntityDTO> partialUpdate(
        FieldTestMapstructAndServiceClassEntityDTO fieldTestMapstructAndServiceClassEntityDTO
    ) {
        log.debug("Request to partially update FieldTestMapstructAndServiceClassEntity : {}", fieldTestMapstructAndServiceClassEntityDTO);

        return fieldTestMapstructAndServiceClassEntityRepository
            .findById(fieldTestMapstructAndServiceClassEntityDTO.getId())
            .map(
                existingFieldTestMapstructAndServiceClassEntity -> {
                    if (fieldTestMapstructAndServiceClassEntityDTO.getStringEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setStringEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getStringEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getStringRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setStringRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getStringRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getStringMinlengthEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setStringMinlengthEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getStringMinlengthEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getStringMaxlengthEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setStringMaxlengthEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getStringMaxlengthEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getStringPatternEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setStringPatternEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getStringPatternEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getIntegerEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setIntegerEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getIntegerEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getIntegerRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setIntegerRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getIntegerRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getIntegerMinEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setIntegerMinEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getIntegerMinEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getIntegerMaxEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setIntegerMaxEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getIntegerMaxEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLongEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLongEva(fieldTestMapstructAndServiceClassEntityDTO.getLongEva());
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLongRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLongRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getLongRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLongMinEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLongMinEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getLongMinEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLongMaxEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLongMaxEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getLongMaxEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getFloatEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setFloatEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getFloatEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getFloatRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setFloatRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getFloatRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getFloatMinEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setFloatMinEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getFloatMinEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getFloatMaxEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setFloatMaxEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getFloatMaxEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getDoubleRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setDoubleRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getDoubleRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getDoubleMinEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setDoubleMinEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getDoubleMinEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getDoubleMaxEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setDoubleMaxEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getDoubleMaxEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setBigDecimalRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalMinEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setBigDecimalMinEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalMinEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalMaxEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setBigDecimalMaxEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getBigDecimalMaxEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLocalDateEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLocalDateEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getLocalDateEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getLocalDateRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setLocalDateRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getLocalDateRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getInstantEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setInstantEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getInstantEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getInstanteRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setInstanteRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getInstanteRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getZonedDateTimeEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setZonedDateTimeEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getZonedDateTimeEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getZonedDateTimeRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setZonedDateTimeRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getZonedDateTimeRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getDurationEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setDurationEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getDurationEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getDurationRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setDurationRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getDurationRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getBooleanEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setBooleanEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getBooleanEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getBooleanRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setBooleanRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getBooleanRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getEnumEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setEnumEva(fieldTestMapstructAndServiceClassEntityDTO.getEnumEva());
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getEnumRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setEnumRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getEnumRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getUuidEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setUuidEva(fieldTestMapstructAndServiceClassEntityDTO.getUuidEva());
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getUuidRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setUuidRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getUuidRequiredEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageRequiredEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageRequiredEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageRequiredEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageRequiredEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageMinbytesEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageMinbytesEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageMinbytesEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageMinbytesEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageMinbytesEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageMinbytesEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageMaxbytesEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageMaxbytesEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageMaxbytesEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteImageMaxbytesEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteImageMaxbytesEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteImageMaxbytesEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyRequiredEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyRequiredEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyRequiredEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyRequiredEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMinbytesEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyMinbytesEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMinbytesEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMinbytesEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyMinbytesEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMinbytesEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMaxbytesEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyMaxbytesEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMaxbytesEva()
                        );
                    }
                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMaxbytesEvaContentType() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteAnyMaxbytesEvaContentType(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteAnyMaxbytesEvaContentType()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteTextEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteTextEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteTextEva()
                        );
                    }

                    if (fieldTestMapstructAndServiceClassEntityDTO.getByteTextRequiredEva() != null) {
                        existingFieldTestMapstructAndServiceClassEntity.setByteTextRequiredEva(
                            fieldTestMapstructAndServiceClassEntityDTO.getByteTextRequiredEva()
                        );
                    }

                    return existingFieldTestMapstructAndServiceClassEntity;
                }
            )
            .flatMap(fieldTestMapstructAndServiceClassEntityRepository::save)
            .map(fieldTestMapstructAndServiceClassEntityMapper::toDto);
    }

    /**
     * Get all the fieldTestMapstructAndServiceClassEntities.
     *
     * @return the list of entities.
     */
    public Flux<FieldTestMapstructAndServiceClassEntityDTO> findAll() {
        log.debug("Request to get all FieldTestMapstructAndServiceClassEntities");
        return fieldTestMapstructAndServiceClassEntityRepository.findAll().map(fieldTestMapstructAndServiceClassEntityMapper::toDto);
    }

    /**
     * Returns the number of fieldTestMapstructAndServiceClassEntities available.
     * @return the number of entities in the database.
     *
     */
    public Mono<Long> countAll() {
        return fieldTestMapstructAndServiceClassEntityRepository.count();
    }

    /**
     * Get one fieldTestMapstructAndServiceClassEntity by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Mono<FieldTestMapstructAndServiceClassEntityDTO> findOne(String id) {
        log.debug("Request to get FieldTestMapstructAndServiceClassEntity : {}", id);
        return fieldTestMapstructAndServiceClassEntityRepository.findById(id).map(fieldTestMapstructAndServiceClassEntityMapper::toDto);
    }

    /**
     * Delete the fieldTestMapstructAndServiceClassEntity by id.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    public Mono<Void> delete(String id) {
        log.debug("Request to delete FieldTestMapstructAndServiceClassEntity : {}", id);
        return fieldTestMapstructAndServiceClassEntityRepository.deleteById(id);
    }
}
