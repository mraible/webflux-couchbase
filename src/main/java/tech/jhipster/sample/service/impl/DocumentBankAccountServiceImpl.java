package tech.jhipster.sample.service.impl;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.sample.domain.DocumentBankAccount;
import tech.jhipster.sample.repository.DocumentBankAccountRepository;
import tech.jhipster.sample.service.DocumentBankAccountService;
import tech.jhipster.sample.service.dto.DocumentBankAccountDTO;
import tech.jhipster.sample.service.mapper.DocumentBankAccountMapper;

/**
 * Service Implementation for managing {@link DocumentBankAccount}.
 */
@Service
public class DocumentBankAccountServiceImpl implements DocumentBankAccountService {

    private final Logger log = LoggerFactory.getLogger(DocumentBankAccountServiceImpl.class);

    private final DocumentBankAccountRepository documentBankAccountRepository;

    private final DocumentBankAccountMapper documentBankAccountMapper;

    public DocumentBankAccountServiceImpl(
        DocumentBankAccountRepository documentBankAccountRepository,
        DocumentBankAccountMapper documentBankAccountMapper
    ) {
        this.documentBankAccountRepository = documentBankAccountRepository;
        this.documentBankAccountMapper = documentBankAccountMapper;
    }

    @Override
    public Mono<DocumentBankAccountDTO> save(DocumentBankAccountDTO documentBankAccountDTO) {
        log.debug("Request to save DocumentBankAccount : {}", documentBankAccountDTO);
        return documentBankAccountRepository
            .save(documentBankAccountMapper.toEntity(documentBankAccountDTO))
            .map(documentBankAccountMapper::toDto);
    }

    @Override
    public Mono<DocumentBankAccountDTO> partialUpdate(DocumentBankAccountDTO documentBankAccountDTO) {
        log.debug("Request to partially update DocumentBankAccount : {}", documentBankAccountDTO);

        return documentBankAccountRepository
            .findById(documentBankAccountDTO.getId())
            .map(
                existingDocumentBankAccount -> {
                    if (documentBankAccountDTO.getName() != null) {
                        existingDocumentBankAccount.setName(documentBankAccountDTO.getName());
                    }

                    if (documentBankAccountDTO.getBankNumber() != null) {
                        existingDocumentBankAccount.setBankNumber(documentBankAccountDTO.getBankNumber());
                    }

                    if (documentBankAccountDTO.getAgencyNumber() != null) {
                        existingDocumentBankAccount.setAgencyNumber(documentBankAccountDTO.getAgencyNumber());
                    }

                    if (documentBankAccountDTO.getLastOperationDuration() != null) {
                        existingDocumentBankAccount.setLastOperationDuration(documentBankAccountDTO.getLastOperationDuration());
                    }

                    if (documentBankAccountDTO.getMeanOperationDuration() != null) {
                        existingDocumentBankAccount.setMeanOperationDuration(documentBankAccountDTO.getMeanOperationDuration());
                    }

                    if (documentBankAccountDTO.getBalance() != null) {
                        existingDocumentBankAccount.setBalance(documentBankAccountDTO.getBalance());
                    }

                    if (documentBankAccountDTO.getOpeningDay() != null) {
                        existingDocumentBankAccount.setOpeningDay(documentBankAccountDTO.getOpeningDay());
                    }

                    if (documentBankAccountDTO.getLastOperationDate() != null) {
                        existingDocumentBankAccount.setLastOperationDate(documentBankAccountDTO.getLastOperationDate());
                    }

                    if (documentBankAccountDTO.getActive() != null) {
                        existingDocumentBankAccount.setActive(documentBankAccountDTO.getActive());
                    }

                    if (documentBankAccountDTO.getAccountType() != null) {
                        existingDocumentBankAccount.setAccountType(documentBankAccountDTO.getAccountType());
                    }

                    if (documentBankAccountDTO.getAttachment() != null) {
                        existingDocumentBankAccount.setAttachment(documentBankAccountDTO.getAttachment());
                    }
                    if (documentBankAccountDTO.getAttachmentContentType() != null) {
                        existingDocumentBankAccount.setAttachmentContentType(documentBankAccountDTO.getAttachmentContentType());
                    }

                    if (documentBankAccountDTO.getDescription() != null) {
                        existingDocumentBankAccount.setDescription(documentBankAccountDTO.getDescription());
                    }

                    return existingDocumentBankAccount;
                }
            )
            .flatMap(documentBankAccountRepository::save)
            .map(documentBankAccountMapper::toDto);
    }

    @Override
    public Flux<DocumentBankAccountDTO> findAll() {
        log.debug("Request to get all DocumentBankAccounts");
        return documentBankAccountRepository.findAll().map(documentBankAccountMapper::toDto);
    }

    public Mono<Long> countAll() {
        return documentBankAccountRepository.count();
    }

    @Override
    public Mono<DocumentBankAccountDTO> findOne(String id) {
        log.debug("Request to get DocumentBankAccount : {}", id);
        return documentBankAccountRepository.findById(id).map(documentBankAccountMapper::toDto);
    }

    @Override
    public Mono<Void> delete(String id) {
        log.debug("Request to delete DocumentBankAccount : {}", id);
        return documentBankAccountRepository.deleteById(id);
    }
}
