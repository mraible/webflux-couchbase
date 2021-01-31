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
import tech.jhipster.sample.domain.EntityWithServiceClassPaginationAndDTO;
import tech.jhipster.sample.repository.EntityWithServiceClassPaginationAndDTORepository;
import tech.jhipster.sample.service.dto.EntityWithServiceClassPaginationAndDTODTO;
import tech.jhipster.sample.service.mapper.EntityWithServiceClassPaginationAndDTOMapper;

/**
 * Integration tests for the {@link EntityWithServiceClassPaginationAndDTOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithServiceClassPaginationAndDTOResourceIT {

    private static final String DEFAULT_LENA = "AAAAAAAAAA";
    private static final String UPDATED_LENA = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceClassPaginationAndDTORepository entityWithServiceClassPaginationAndDTORepository;

    @Autowired
    private EntityWithServiceClassPaginationAndDTOMapper entityWithServiceClassPaginationAndDTOMapper;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithServiceClassPaginationAndDTO entityWithServiceClassPaginationAndDTO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassPaginationAndDTO createEntity() {
        EntityWithServiceClassPaginationAndDTO entityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO()
        .lena(DEFAULT_LENA);
        return entityWithServiceClassPaginationAndDTO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassPaginationAndDTO createUpdatedEntity() {
        EntityWithServiceClassPaginationAndDTO entityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO()
        .lena(UPDATED_LENA);
        return entityWithServiceClassPaginationAndDTO;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceClassPaginationAndDTORepository.deleteAll().block();
        entityWithServiceClassPaginationAndDTO = createEntity();
    }

    @Test
    void createEntityWithServiceClassPaginationAndDTO() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();
        // Create the EntityWithServiceClassPaginationAndDTO
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO = entityWithServiceClassPaginationAndDTOMapper.toDto(
            entityWithServiceClassPaginationAndDTO
        );
        webTestClient
            .post()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceClassPaginationAndDTO testEntityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTOList.get(
            entityWithServiceClassPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceClassPaginationAndDTO.getLena()).isEqualTo(DEFAULT_LENA);
    }

    @Test
    void createEntityWithServiceClassPaginationAndDTOWithExistingId() throws Exception {
        // Create the EntityWithServiceClassPaginationAndDTO with an existing ID
        entityWithServiceClassPaginationAndDTO.setId("existing_id");
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO = entityWithServiceClassPaginationAndDTOMapper.toDto(
            entityWithServiceClassPaginationAndDTO
        );

        int databaseSizeBeforeCreate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithServiceClassPaginationAndDTOS() {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        // Get all the entityWithServiceClassPaginationAndDTOList
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-pagination-and-dtos?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithServiceClassPaginationAndDTO.getId()))
            .jsonPath("$.[*].lena")
            .value(hasItem(DEFAULT_LENA));
    }

    @Test
    void getEntityWithServiceClassPaginationAndDTO() {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        // Get the entityWithServiceClassPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-pagination-and-dtos/{id}", entityWithServiceClassPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithServiceClassPaginationAndDTO.getId()))
            .jsonPath("$.lena")
            .value(is(DEFAULT_LENA));
    }

    @Test
    void getNonExistingEntityWithServiceClassPaginationAndDTO() {
        // Get the entityWithServiceClassPaginationAndDTO
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-pagination-and-dtos/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithServiceClassPaginationAndDTO() throws Exception {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassPaginationAndDTO
        EntityWithServiceClassPaginationAndDTO updatedEntityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTORepository
            .findById(entityWithServiceClassPaginationAndDTO.getId())
            .block();
        updatedEntityWithServiceClassPaginationAndDTO.lena(UPDATED_LENA);
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO = entityWithServiceClassPaginationAndDTOMapper.toDto(
            updatedEntityWithServiceClassPaginationAndDTO
        );

        webTestClient
            .put()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassPaginationAndDTO testEntityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTOList.get(
            entityWithServiceClassPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceClassPaginationAndDTO.getLena()).isEqualTo(UPDATED_LENA);
    }

    @Test
    void updateNonExistingEntityWithServiceClassPaginationAndDTO() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // Create the EntityWithServiceClassPaginationAndDTO
        EntityWithServiceClassPaginationAndDTODTO entityWithServiceClassPaginationAndDTODTO = entityWithServiceClassPaginationAndDTOMapper.toDto(
            entityWithServiceClassPaginationAndDTO
        );

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassPaginationAndDTODTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithServiceClassPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassPaginationAndDTO using partial update
        EntityWithServiceClassPaginationAndDTO partialUpdatedEntityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO();
        partialUpdatedEntityWithServiceClassPaginationAndDTO.setId(entityWithServiceClassPaginationAndDTO.getId());

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassPaginationAndDTO testEntityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTOList.get(
            entityWithServiceClassPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceClassPaginationAndDTO.getLena()).isEqualTo(DEFAULT_LENA);
    }

    @Test
    void fullUpdateEntityWithServiceClassPaginationAndDTOWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassPaginationAndDTO using partial update
        EntityWithServiceClassPaginationAndDTO partialUpdatedEntityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO();
        partialUpdatedEntityWithServiceClassPaginationAndDTO.setId(entityWithServiceClassPaginationAndDTO.getId());

        partialUpdatedEntityWithServiceClassPaginationAndDTO.lena(UPDATED_LENA);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassPaginationAndDTO in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassPaginationAndDTO testEntityWithServiceClassPaginationAndDTO = entityWithServiceClassPaginationAndDTOList.get(
            entityWithServiceClassPaginationAndDTOList.size() - 1
        );
        assertThat(testEntityWithServiceClassPaginationAndDTO.getLena()).isEqualTo(UPDATED_LENA);
    }

    @Test
    void partialUpdateEntityWithServiceClassPaginationAndDTOShouldThrown() throws Exception {
        // Update the entityWithServiceClassPaginationAndDTO without id should throw
        EntityWithServiceClassPaginationAndDTO partialUpdatedEntityWithServiceClassPaginationAndDTO = new EntityWithServiceClassPaginationAndDTO();

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-pagination-and-dtos")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassPaginationAndDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithServiceClassPaginationAndDTO() {
        // Initialize the database
        entityWithServiceClassPaginationAndDTORepository.save(entityWithServiceClassPaginationAndDTO).block();

        int databaseSizeBeforeDelete = entityWithServiceClassPaginationAndDTORepository.findAll().collectList().block().size();

        // Delete the entityWithServiceClassPaginationAndDTO
        webTestClient
            .delete()
            .uri("/api/entity-with-service-class-pagination-and-dtos/{id}", entityWithServiceClassPaginationAndDTO.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassPaginationAndDTO> entityWithServiceClassPaginationAndDTOList = entityWithServiceClassPaginationAndDTORepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassPaginationAndDTOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
