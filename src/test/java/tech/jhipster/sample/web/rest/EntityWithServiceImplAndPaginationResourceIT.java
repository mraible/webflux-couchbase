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
import tech.jhipster.sample.domain.EntityWithServiceImplAndPagination;
import tech.jhipster.sample.repository.EntityWithServiceImplAndPaginationRepository;

/**
 * Integration tests for the {@link EntityWithServiceImplAndPaginationResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient
@WithMockUser
class EntityWithServiceImplAndPaginationResourceIT {

    private static final String DEFAULT_HUGO = "AAAAAAAAAA";
    private static final String UPDATED_HUGO = "BBBBBBBBBB";

    @Autowired
    private EntityWithServiceImplAndPaginationRepository entityWithServiceImplAndPaginationRepository;

    @Autowired
    private WebTestClient webTestClient;

    private EntityWithServiceImplAndPagination entityWithServiceImplAndPagination;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndPagination createEntity() {
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination().hugo(DEFAULT_HUGO);
        return entityWithServiceImplAndPagination;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static EntityWithServiceImplAndPagination createUpdatedEntity() {
        EntityWithServiceImplAndPagination entityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination().hugo(UPDATED_HUGO);
        return entityWithServiceImplAndPagination;
    }

    @BeforeEach
    public void initTest() {
        entityWithServiceImplAndPaginationRepository.deleteAll().block();
        entityWithServiceImplAndPagination = createEntity();
    }

    @Test
    void createEntityWithServiceImplAndPagination() throws Exception {
        int databaseSizeBeforeCreate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();
        // Create the EntityWithServiceImplAndPagination
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeCreate + 1);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(
            entityWithServiceImplAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(DEFAULT_HUGO);
    }

    @Test
    void createEntityWithServiceImplAndPaginationWithExistingId() throws Exception {
        // Create the EntityWithServiceImplAndPagination with an existing ID
        entityWithServiceImplAndPagination.setId("existing_id");

        int databaseSizeBeforeCreate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntityWithServiceImplAndPaginations() {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        // Get all the entityWithServiceImplAndPaginationList
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-paginations?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(entityWithServiceImplAndPagination.getId()))
            .jsonPath("$.[*].hugo")
            .value(hasItem(DEFAULT_HUGO));
    }

    @Test
    void getEntityWithServiceImplAndPagination() {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        // Get the entityWithServiceImplAndPagination
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-paginations/{id}", entityWithServiceImplAndPagination.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entityWithServiceImplAndPagination.getId()))
            .jsonPath("$.hugo")
            .value(is(DEFAULT_HUGO));
    }

    @Test
    void getNonExistingEntityWithServiceImplAndPagination() {
        // Get the entityWithServiceImplAndPagination
        webTestClient
            .get()
            .uri("/api/entity-with-service-impl-and-paginations/{id}", Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void updateEntityWithServiceImplAndPagination() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndPagination
        EntityWithServiceImplAndPagination updatedEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationRepository
            .findById(entityWithServiceImplAndPagination.getId())
            .block();
        updatedEntityWithServiceImplAndPagination.hugo(UPDATED_HUGO);

        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(updatedEntityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(
            entityWithServiceImplAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(UPDATED_HUGO);
    }

    @Test
    void updateNonExistingEntityWithServiceImplAndPagination() throws Exception {
        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntityWithServiceImplAndPaginationWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndPagination using partial update
        EntityWithServiceImplAndPagination partialUpdatedEntityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination();
        partialUpdatedEntityWithServiceImplAndPagination.setId(entityWithServiceImplAndPagination.getId());

        partialUpdatedEntityWithServiceImplAndPagination.hugo(UPDATED_HUGO);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(
            entityWithServiceImplAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(UPDATED_HUGO);
    }

    @Test
    void fullUpdateEntityWithServiceImplAndPaginationWithPatch() throws Exception {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        int databaseSizeBeforeUpdate = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // Update the entityWithServiceImplAndPagination using partial update
        EntityWithServiceImplAndPagination partialUpdatedEntityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination();
        partialUpdatedEntityWithServiceImplAndPagination.setId(entityWithServiceImplAndPagination.getId());

        partialUpdatedEntityWithServiceImplAndPagination.hugo(UPDATED_HUGO);

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the EntityWithServiceImplAndPagination in the database
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeUpdate);
        EntityWithServiceImplAndPagination testEntityWithServiceImplAndPagination = entityWithServiceImplAndPaginationList.get(
            entityWithServiceImplAndPaginationList.size() - 1
        );
        assertThat(testEntityWithServiceImplAndPagination.getHugo()).isEqualTo(UPDATED_HUGO);
    }

    @Test
    void partialUpdateEntityWithServiceImplAndPaginationShouldThrown() throws Exception {
        // Update the entityWithServiceImplAndPagination without id should throw
        EntityWithServiceImplAndPagination partialUpdatedEntityWithServiceImplAndPagination = new EntityWithServiceImplAndPagination();

        webTestClient
            .patch()
            .uri("/api/entity-with-service-impl-and-paginations")
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntityWithServiceImplAndPagination))
            .exchange()
            .expectStatus()
            .isBadRequest();
    }

    @Test
    void deleteEntityWithServiceImplAndPagination() {
        // Initialize the database
        entityWithServiceImplAndPaginationRepository.save(entityWithServiceImplAndPagination).block();

        int databaseSizeBeforeDelete = entityWithServiceImplAndPaginationRepository.findAll().collectList().block().size();

        // Delete the entityWithServiceImplAndPagination
        webTestClient
            .delete()
            .uri("/api/entity-with-service-impl-and-paginations/{id}", entityWithServiceImplAndPagination.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        SecurityContextHolder.setContext(TestSecurityContextHolder.getContext());
        List<EntityWithServiceImplAndPagination> entityWithServiceImplAndPaginationList = entityWithServiceImplAndPaginationRepository
            .findAll()
            .collectList()
            .block();
        assertThat(entityWithServiceImplAndPaginationList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
