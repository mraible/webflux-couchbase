package tech.jhipster.sample.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.stream.Collectors;
import javax.validation.constraints.*;
import org.springframework.data.couchbase.core.mapping.Field;
import org.springframework.data.couchbase.core.query.FetchType;
import org.springframework.data.couchbase.core.query.N1qlJoin;

/**
 * A EmbeddedOperation.
 */
public class EmbeddedOperation implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull(message = "must not be null")
    @Field("date")
    private Instant date;

    @Field("description")
    private String description;

    @NotNull(message = "must not be null")
    @Field("amount")
    private BigDecimal amount;

    @Field("documentBankAccount")
    private String documentBankAccountId;

    @N1qlJoin(on = "lks.documentBankAccount=meta(rks).id", fetchType = FetchType.IMMEDIATE)
    @JsonIgnoreProperties(value = { "embeddedOperations" }, allowSetters = true)
    private DocumentBankAccount documentBankAccount;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Instant getDate() {
        return this.date;
    }

    public EmbeddedOperation date(Instant date) {
        this.date = date;
        return this;
    }

    public void setDate(Instant date) {
        this.date = date;
    }

    public String getDescription() {
        return this.description;
    }

    public EmbeddedOperation description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getAmount() {
        return this.amount;
    }

    public EmbeddedOperation amount(BigDecimal amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public DocumentBankAccount getDocumentBankAccount() {
        return this.documentBankAccount;
    }

    public EmbeddedOperation documentBankAccount(DocumentBankAccount documentBankAccount) {
        this.setDocumentBankAccount(documentBankAccount);
        this.documentBankAccountId = documentBankAccount != null ? documentBankAccount.getId() : null;
        return this;
    }

    public void setDocumentBankAccount(DocumentBankAccount documentBankAccount) {
        this.documentBankAccount = documentBankAccount;
        this.documentBankAccountId = documentBankAccount != null ? documentBankAccount.getId() : null;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EmbeddedOperation)) {
            return false;
        }
        return false;
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EmbeddedOperation{" +
            ", date='" + getDate() + "'" +
            ", description='" + getDescription() + "'" +
            ", amount=" + getAmount() +
            "}";
    }
}
