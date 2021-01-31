package tech.jhipster.sample.service.mapper;

import java.util.Set;
import org.mapstruct.*;
import tech.jhipster.sample.domain.*;
import tech.jhipster.sample.service.dto.EmbeddedOperationDTO;

/**
 * Mapper for the entity {@link EmbeddedOperation} and its DTO {@link EmbeddedOperationDTO}.
 */
@Mapper(componentModel = "spring", uses = { DocumentBankAccountMapper.class })
public interface EmbeddedOperationMapper extends EntityMapper<EmbeddedOperationDTO, EmbeddedOperation> {}
