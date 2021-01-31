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
import tech.jhipster.sample.domain.EntityWithServiceImplAndDTO;
import tech.jhipster.sample.repository.EntityWithServiceImplAndDTORepository;
import tech.jhipster.sample.service.dto.EntityWithServiceImplAndDTODTO;
import tech.jhipster.sample.service.mapper.EntityWithServiceImplAndDTOMapper;

/**
 * Integration tests for the {@link EntityWithServiceImplAndDTOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithServiceImplAndDTOResourceIT {

    private static final String DEFAULT_LOUIS = "AAAAAAAAAA";
    private static final String UPDATED_LOUIS = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplAndDTORepository entityWithServiceImplAndDTORepository;

    @Autowired
    private EntityWithServiceImplAndDTOMapper entityWithServiceImplAndDTOMapper;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithServiceImplAndDTO entityWithServiceImplAndDTO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndDTO createEntity() {
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO().louis(DEFAULT_LOUIS);
        return entityWithServiceImplAndDTO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndDTO createUpdatedEntity() {
        EntityWithServiceImplAndDTO entityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO().louis(UPDATED_LOUIS);
        return entityWithServiceImplAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplAndDTORepository.deleteAll().block();
        entityWithServiceImplAndDTO = createEntity();
    }

    @Test
    void createEntityWithServiceImplAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();
        // Create the EntityWithServiceImplAndDTO
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(
            entityWithServiceImplAndDTO
        );
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(
            entityWithServiceImplAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(DEFAULT_LOUIS);
    }

    @Test
    void createEntityWithServiceImplAndDTOWithExistingId() throws Exception {
        // Create the EntityWithServiceImplAndDTO with an existing ID
        entityWithServiceImplAndDTO.setId("existing_id");
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(
            entityWithServiceImplAndDTO
        );

        int databaseSizeBeforeCreate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithServiceImplAndDTOSAsStream() {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-dtos")
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(EntityWithServiceImplAndDTODTO.class)
            .getResponseBody()
            .map(entityWithServiceImplAndDTOMapper::toEntity)
            .filter(entityWithServiceImplAndDTO::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(entityWithServiceImplAndDTOList).isNotNull();
        assertThat(entityWithServiceImplAndDTOList).hasSize(1);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(0);
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(DEFAULT_LOUIS);
    }

    @Test
    void getAllEntityWithServiceImplAndDTOS() {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        // Get all the entityWithServiceImplAndDTOList
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-dtos?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithServiceImplAndDTO.getId()))
            .jsonPath("$.[*].louis")
            .value(hasItem(DEFAULT_LOUIS));
    }

    @Test
    void getEntityWithServiceImplAndDTO() {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        // Get the entityWithServiceImplAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-dtos/{id}", entityWithServiceImplAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithServiceImplAndDTO.getId()))
            .jsonPath("$.louis")
            .value(is(DEFAULT_LOUIS));
    }

    @Test
    void getNonExistingEntityWithServiceImplAndDTO() {
        // Get the entityWithServiceImplAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-dtos/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithServiceImplAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndDTO
        EntityWithServiceImplAndDTO updatedEntityWithServiceImplAndDTO = entityWithServiceImplAndDTORepository
            .findById(entityWithServiceImplAndDTO.getId())
            .block();
        updatedEntityWithServiceImplAndDTO.louis(UPDATED_LOUIS);
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(
            updatedEntityWithServiceImplAndDTO
        );

        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(
            entityWithServiceImplAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(UPDATED_LOUIS);
    }

    @Test
    void updateNonExistingEntityWithServiceImplAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // Create the EntityWithServiceImplAndDTO
        EntityWithServiceImplAndDTODTO entityWithServiceImplAndDTODTO = entityWithServiceImplAndDTOMapper.toDto(
            entityWithServiceImplAndDTO
        );

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithServiceImplAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndDTO using partial update
        EntityWithServiceImplAndDTO partialUpdatedEntityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO();
        partialUpdatedEntityWithServiceImplAndDTO.setId(entityWithServiceImplAndDTO.getId());

        partialUpdatedEntityWithServiceImplAndDTO.louis(UPDATED_LOUIS);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(
            entityWithServiceImplAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(UPDATED_LOUIS);
    }

    @Test
    void fullUpdateEntityWithServiceImplAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndDTO using partial update
        EntityWithServiceImplAndDTO partialUpdatedEntityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO();
        partialUpdatedEntityWithServiceImplAndDTO.setId(entityWithServiceImplAndDTO.getId());

        partialUpdatedEntityWithServiceImplAndDTO.louis(UPDATED_LOUIS);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndDTO testEntityWithServiceImplAndDTO = entityWithServiceImplAndDTOList.get(
            entityWithServiceImplAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndDTO.getLouis()).isEqualTo(UPDATED_LOUIS);
    }

    @Test
    void partialUpdateEntityWithServiceImplAndDTOShouldThrown() throws Exception {
        // Update the entityWithServiceImplAndDTO without id should throw
        EntityWithServiceImplAndDTO partialUpdatedEntityWithServiceImplAndDTO = new EntityWithServiceImplAndDTO();

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithServiceImplAndDTO() {
        // Initialize the database
        entityWithServiceImplAndDTORepository.save(entityWithServiceImplAndDTO).block();

        int databaseSizeBeforeDelete = entityWithServiceImplAndDTORepository.findAll().collectList().block().size();

        // Delete the entityWithServiceImplAndDTO
        webTestClient
            .delete()
            .uri("/api/entity-with-service-impl-and-dtos/{id}", entityWithServiceImplAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndDTO> entityWithServiceImplAndDTOList = entityWithServiceImplAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
