package tech.jhipster.sample.service.mapper;

import org.mapstruct.*;
import tech.jhipster.sample.domain.*;
import tech.jhipster.sample.service.dto.DocumentBankAccountDTO;

/**
 * Mapper for the entity {@link DocumentBankAccount} and its DTO {@link DocumentBankAccountDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DocumentBankAccountMapper extends EntityMapper<DocumentBankAccountDTO, DocumentBankAccount> {
    @Mapping(target = "embeddedOperations", ignore = true)
    @Mapping(target = "removeEmbeddedOperation", ignore = true)
    DocumentBankAccount toEntity(DocumentBankAccountDTO documentBankAccountDTO);

    @Named("name")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    DocumentBankAccountDTO toDtoName(DocumentBankAccount documentBankAccount);
}
