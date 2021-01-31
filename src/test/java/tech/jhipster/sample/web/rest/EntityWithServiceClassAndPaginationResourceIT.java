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
import tech.jhipster.sample.domain.EntityWithServiceClassAndPagination;
import tech.jhipster.sample.repository.EntityWithServiceClassAndPaginationRepository;

/**
 * Integration tests for the {@link EntityWithServiceClassAndPaginationResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithServiceClassAndPaginationResourceIT {

    private static final String DEFAULT_ENZO = "AAAAAAAAAA";
    private static final String UPDATED_ENZO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceClassAndPaginationRepository entityWithServiceClassAndPaginationRepository;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithServiceClassAndPagination entityWithServiceClassAndPagination;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassAndPagination createEntity() {
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination()
        .enzo(DEFAULT_ENZO);
        return entityWithServiceClassAndPagination;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceClassAndPagination createUpdatedEntity() {
        EntityWithServiceClassAndPagination entityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination()
        .enzo(UPDATED_ENZO);
        return entityWithServiceClassAndPagination;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceClassAndPaginationRepository.deleteAll().block();
        entityWithServiceClassAndPagination = createEntity();
    }

    @Test
    void createEntityWithServiceClassAndPagination() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();
        // Create the EntityWithServiceClassAndPagination
        webTestClient
            .post()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(
            entityWithServiceClassAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(DEFAULT_ENZO);
    }

    @Test
    void createEntityWithServiceClassAndPaginationWithExistingId() throws Exception {
        // Create the EntityWithServiceClassAndPagination with an existing ID
        entityWithServiceClassAndPagination.setId("existing_id");

        int databaseSizeBeforeCreate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithServiceClassAndPaginations() {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        // Get all the entityWithServiceClassAndPaginationList
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-and-paginations?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithServiceClassAndPagination.getId()))
            .jsonPath("$.[*].enzo")
            .value(hasItem(DEFAULT_ENZO));
    }

    @Test
    void getEntityWithServiceClassAndPagination() {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        // Get the entityWithServiceClassAndPagination
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-and-paginations/{id}", entityWithServiceClassAndPagination.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithServiceClassAndPagination.getId()))
            .jsonPath("$.enzo")
            .value(is(DEFAULT_ENZO));
    }

    @Test
    void getNonExistingEntityWithServiceClassAndPagination() {
        // Get the entityWithServiceClassAndPagination
        webTestClient
            .get()
            .uri("/api/entity-with-service-class-and-paginations/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithServiceClassAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassAndPagination
        EntityWithServiceClassAndPagination updatedEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationRepository
            .findById(entityWithServiceClassAndPagination.getId())
            .block();
        updatedEntityWithServiceClassAndPagination.enzo(UPDATED_ENZO);

        webTestClient
            .put()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(updatedEntityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(
            entityWithServiceClassAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(UPDATED_ENZO);
    }

    @Test
    void updateNonExistingEntityWithServiceClassAndPagination() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithServiceClassAndPaginationWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassAndPagination using partial update
        EntityWithServiceClassAndPagination partialUpdatedEntityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination();
        partialUpdatedEntityWithServiceClassAndPagination.setId(entityWithServiceClassAndPagination.getId());

        partialUpdatedEntityWithServiceClassAndPagination.enzo(UPDATED_ENZO);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(
            entityWithServiceClassAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(UPDATED_ENZO);
    }

    @Test
    void fullUpdateEntityWithServiceClassAndPaginationWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceClassAndPagination using partial update
        EntityWithServiceClassAndPagination partialUpdatedEntityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination();
        partialUpdatedEntityWithServiceClassAndPagination.setId(entityWithServiceClassAndPagination.getId());

        partialUpdatedEntityWithServiceClassAndPagination.enzo(UPDATED_ENZO);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceClassAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceClassAndPagination testEntityWithServiceClassAndPagination = entityWithServiceClassAndPaginationList.get(
            entityWithServiceClassAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceClassAndPagination.getEnzo()).isEqualTo(UPDATED_ENZO);
    }

    @Test
    void partialUpdateEntityWithServiceClassAndPaginationShouldThrown() throws Exception {
        // Update the entityWithServiceClassAndPagination without id should throw
        EntityWithServiceClassAndPagination partialUpdatedEntityWithServiceClassAndPagination = new EntityWithServiceClassAndPagination();

        webTestClient
            .patch()
            .uri("/api/entity-with-service-class-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceClassAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithServiceClassAndPagination() {
        // Initialize the database
        entityWithServiceClassAndPaginationRepository.save(entityWithServiceClassAndPagination).block();

        int databaseSizeBeforeDelete = entityWithServiceClassAndPaginationRepository.findAll().collectList().block().size();

        // Delete the entityWithServiceClassAndPagination
        webTestClient
            .delete()
            .uri("/api/entity-with-service-class-and-paginations/{id}", entityWithServiceClassAndPagination.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceClassAndPagination> entityWithServiceClassAndPaginationList = entityWithServiceClassAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceClassAndPaginationList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
