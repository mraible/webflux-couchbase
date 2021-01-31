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
import tech.jhipster.sample.domain.EntityWithPaginationAndDTO;
import tech.jhipster.sample.repository.EntityWithPaginationAndDTORepository;
import tech.jhipster.sample.service.dto.EntityWithPaginationAndDTODTO;
import tech.jhipster.sample.service.mapper.EntityWithPaginationAndDTOMapper;

/**
 * Integration tests for the {@link EntityWithPaginationAndDTOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithPaginationAndDTOResourceIT {

    private static final String DEFAULT_LEA = "AAAAAAAAAA";
    private static final String UPDATED_LEA = "BBBBBBBBBB";

    @Autowired
    private EntityWithPaginationAndDTORepository entityWithPaginationAndDTORepository;

    @Autowired
    private EntityWithPaginationAndDTOMapper entityWithPaginationAndDTOMapper;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithPaginationAndDTO entityWithPaginationAndDTO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithPaginationAndDTO createEntity() {
        EntityWithPaginationAndDTO entityWithPaginationAndDTO = new EntityWithPaginationAndDTO().lea(DEFAULT_LEA);
        return entityWithPaginationAndDTO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithPaginationAndDTO createUpdatedEntity() {
        EntityWithPaginationAndDTO entityWithPaginationAndDTO = new EntityWithPaginationAndDTO().lea(UPDATED_LEA);
        return entityWithPaginationAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithPaginationAndDTORepository.deleteAll().block();
        entityWithPaginationAndDTO = createEntity();
    }

    @Test
    void createEntityWithPaginationAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();
        // Create the EntityWithPaginationAndDTO
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO = entityWithPaginationAndDTOMapper.toDto(entityWithPaginationAndDTO);
        webTestClient
            .post()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithPaginationAndDTO testEntityWithPaginationAndDTO = entityWithPaginationAndDTOList.get(
            entityWithPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithPaginationAndDTO.getLea()).isEqualTo(DEFAULT_LEA);
    }

    @Test
    void createEntityWithPaginationAndDTOWithExistingId() throws Exception {
        // Create the EntityWithPaginationAndDTO with an existing ID
        entityWithPaginationAndDTO.setId("existing_id");
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO = entityWithPaginationAndDTOMapper.toDto(entityWithPaginationAndDTO);

        int databaseSizeBeforeCreate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithPaginationAndDTOS() {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        // Get all the entityWithPaginationAndDTOList
        webTestClient
            .get()
            .uri("/api/entity-with-pagination-and-dtos?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithPaginationAndDTO.getId()))
            .jsonPath("$.[*].lea")
            .value(hasItem(DEFAULT_LEA));
    }

    @Test
    void getEntityWithPaginationAndDTO() {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        // Get the entityWithPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-pagination-and-dtos/{id}", entityWithPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithPaginationAndDTO.getId()))
            .jsonPath("$.lea")
            .value(is(DEFAULT_LEA));
    }

    @Test
    void getNonExistingEntityWithPaginationAndDTO() {
        // Get the entityWithPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-pagination-and-dtos/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithPaginationAndDTO
        EntityWithPaginationAndDTO updatedEntityWithPaginationAndDTO = entityWithPaginationAndDTORepository
            .findById(entityWithPaginationAndDTO.getId())
            .block();
        updatedEntityWithPaginationAndDTO.lea(UPDATED_LEA);
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO = entityWithPaginationAndDTOMapper.toDto(
            updatedEntityWithPaginationAndDTO
        );

        webTestClient
            .put()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithPaginationAndDTO testEntityWithPaginationAndDTO = entityWithPaginationAndDTOList.get(
            entityWithPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithPaginationAndDTO.getLea()).isEqualTo(UPDATED_LEA);
    }

    @Test
    void updateNonExistingEntityWithPaginationAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // Create the EntityWithPaginationAndDTO
        EntityWithPaginationAndDTODTO entityWithPaginationAndDTODTO = entityWithPaginationAndDTOMapper.toDto(entityWithPaginationAndDTO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithPaginationAndDTO using partial update
        EntityWithPaginationAndDTO partialUpdatedEntityWithPaginationAndDTO = new EntityWithPaginationAndDTO();
        partialUpdatedEntityWithPaginationAndDTO.setId(entityWithPaginationAndDTO.getId());

        webTestClient
            .patch()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithPaginationAndDTO testEntityWithPaginationAndDTO = entityWithPaginationAndDTOList.get(
            entityWithPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithPaginationAndDTO.getLea()).isEqualTo(DEFAULT_LEA);
    }

    @Test
    void fullUpdateEntityWithPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithPaginationAndDTO using partial update
        EntityWithPaginationAndDTO partialUpdatedEntityWithPaginationAndDTO = new EntityWithPaginationAndDTO();
        partialUpdatedEntityWithPaginationAndDTO.setId(entityWithPaginationAndDTO.getId());

        partialUpdatedEntityWithPaginationAndDTO.lea(UPDATED_LEA);

        webTestClient
            .patch()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithPaginationAndDTO testEntityWithPaginationAndDTO = entityWithPaginationAndDTOList.get(
            entityWithPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithPaginationAndDTO.getLea()).isEqualTo(UPDATED_LEA);
    }

    @Test
    void partialUpdateEntityWithPaginationAndDTOShouldThrown() throws Exception {
        // Update the entityWithPaginationAndDTO without id should throw
        EntityWithPaginationAndDTO partialUpdatedEntityWithPaginationAndDTO = new EntityWithPaginationAndDTO();

        webTestClient
            .patch()
            .uri("/api/entity-with-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithPaginationAndDTO() {
        // Initialize the database
        entityWithPaginationAndDTORepository.save(entityWithPaginationAndDTO).block();

        int databaseSizeBeforeDelete = entityWithPaginationAndDTORepository.findAll().collectList().block().size();

        // Delete the entityWithPaginationAndDTO
        webTestClient
            .delete()
            .uri("/api/entity-with-pagination-and-dtos/{id}", entityWithPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithPaginationAndDTO> entityWithPaginationAndDTOList = entityWithPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithPaginationAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
