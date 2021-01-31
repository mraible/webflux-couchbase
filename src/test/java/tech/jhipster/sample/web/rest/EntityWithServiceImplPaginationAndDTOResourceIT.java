package tech.jhipster.sample.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import java.time.Duration;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.test.context.TestSecurityContextHolder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;
import tech.jhipster.sample.IntegrationTest;
import tech.jhipster.sample.domain.EntityWithServiceImplPaginationAndDTO;
import tech.jhipster.sample.repository.EntityWithServiceImplPaginationAndDTORepository;
import tech.jhipster.sample.service.dto.EntityWithServiceImplPaginationAndDTODTO;
import tech.jhipster.sample.service.mapper.EntityWithServiceImplPaginationAndDTOMapper;

/**
 * Integration tests for the {@link EntityWithServiceImplPaginationAndDTOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithServiceImplPaginationAndDTOResourceIT {

    private static final String DEFAULT_THEO = "AAAAAAAAAA";
    private static final String UPDATED_THEO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplPaginationAndDTORepository entityWithServiceImplPaginationAndDTORepository;

    @Autowired
    private EntityWithServiceImplPaginationAndDTOMapper entityWithServiceImplPaginationAndDTOMapper;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplPaginationAndDTO createEntity() {
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO()
        .theo(DEFAULT_THEO);
        return entityWithServiceImplPaginationAndDTO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplPaginationAndDTO createUpdatedEntity() {
        EntityWithServiceImplPaginationAndDTO entityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO()
        .theo(UPDATED_THEO);
        return entityWithServiceImplPaginationAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplPaginationAndDTORepository.deleteAll().block();
        entityWithServiceImplPaginationAndDTO = createEntity();
    }

    @Test
    void createEntityWithServiceImplPaginationAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();
        // Create the EntityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(
            entityWithServiceImplPaginationAndDTO
        );
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(
            entityWithServiceImplPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(DEFAULT_THEO);
    }

    @Test
    void createEntityWithServiceImplPaginationAndDTOWithExistingId() throws Exception {
        // Create the EntityWithServiceImplPaginationAndDTO with an existing ID
        entityWithServiceImplPaginationAndDTO.setId("existing_id");
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(
            entityWithServiceImplPaginationAndDTO
        );

        int databaseSizeBeforeCreate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithServiceImplPaginationAndDTOS() {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        // Get all the entityWithServiceImplPaginationAndDTOList
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-pagination-and-dtos?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithServiceImplPaginationAndDTO.getId()))
            .jsonPath("$.[*].theo")
            .value(hasItem(DEFAULT_THEO));
    }

    @Test
    void getEntityWithServiceImplPaginationAndDTO() {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        // Get the entityWithServiceImplPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-pagination-and-dtos/{id}", entityWithServiceImplPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithServiceImplPaginationAndDTO.getId()))
            .jsonPath("$.theo")
            .value(is(DEFAULT_THEO));
    }

    @Test
    void getNonExistingEntityWithServiceImplPaginationAndDTO() {
        // Get the entityWithServiceImplPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-pagination-and-dtos/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithServiceImplPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTO updatedEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTORepository
            .findById(entityWithServiceImplPaginationAndDTO.getId())
            .block();
        updatedEntityWithServiceImplPaginationAndDTO.theo(UPDATED_THEO);
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(
            updatedEntityWithServiceImplPaginationAndDTO
        );

        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(
            entityWithServiceImplPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(UPDATED_THEO);
    }

    @Test
    void updateNonExistingEntityWithServiceImplPaginationAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // Create the EntityWithServiceImplPaginationAndDTO
        EntityWithServiceImplPaginationAndDTODTO entityWithServiceImplPaginationAndDTODTO = entityWithServiceImplPaginationAndDTOMapper.toDto(
            entityWithServiceImplPaginationAndDTO
        );

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithServiceImplPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplPaginationAndDTO using partial update
        EntityWithServiceImplPaginationAndDTO partialUpdatedEntityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO();
        partialUpdatedEntityWithServiceImplPaginationAndDTO.setId(entityWithServiceImplPaginationAndDTO.getId());

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(
            entityWithServiceImplPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(DEFAULT_THEO);
    }

    @Test
    void fullUpdateEntityWithServiceImplPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplPaginationAndDTO using partial update
        EntityWithServiceImplPaginationAndDTO partialUpdatedEntityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO();
        partialUpdatedEntityWithServiceImplPaginationAndDTO.setId(entityWithServiceImplPaginationAndDTO.getId());

        partialUpdatedEntityWithServiceImplPaginationAndDTO.theo(UPDATED_THEO);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplPaginationAndDTO testEntityWithServiceImplPaginationAndDTO = entityWithServiceImplPaginationAndDTOList.get(
            entityWithServiceImplPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplPaginationAndDTO.getTheo()).isEqualTo(UPDATED_THEO);
    }

    @Test
    void partialUpdateEntityWithServiceImplPaginationAndDTOShouldThrown() throws Exception {
        // Update the entityWithServiceImplPaginationAndDTO without id should throw
        EntityWithServiceImplPaginationAndDTO partialUpdatedEntityWithServiceImplPaginationAndDTO = new EntityWithServiceImplPaginationAndDTO();

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithServiceImplPaginationAndDTO() {
        // Initialize the database
        entityWithServiceImplPaginationAndDTORepository.save(entityWithServiceImplPaginationAndDTO).block();

        int databaseSizeBeforeDelete = entityWithServiceImplPaginationAndDTORepository.findAll().collectList().block().size();

        // Delete the entityWithServiceImplPaginationAndDTO
        webTestClient
            .delete()
            .uri("/api/entity-with-service-impl-pagination-and-dtos/{id}", entityWithServiceImplPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplPaginationAndDTO> entityWithServiceImplPaginationAndDTOList = entityWithServiceImplPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplPaginationAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
