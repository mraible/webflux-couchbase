import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import documentBankAccount, {
  DocumentBankAccountState
} from 'app/entities/document-bank-account/document-bank-account.reducer';
// prettier-ignore
import fieldTestEntity, {
  FieldTestEntityState
} from 'app/entities/field-test-entity/field-test-entity.reducer';
// prettier-ignore
import fieldTestInfiniteScrollEntity, {
  FieldTestInfiniteScrollEntityState
} from 'app/entities/field-test-infinite-scroll-entity/field-test-infinite-scroll-entity.reducer';
// prettier-ignore
import fieldTestMapstructAndServiceClassEntity, {
  FieldTestMapstructAndServiceClassEntityState
} from 'app/entities/field-test-mapstruct-and-service-class-entity/field-test-mapstruct-and-service-class-entity.reducer';
// prettier-ignore
import fieldTestPaginationEntity, {
  FieldTestPaginationEntityState
} from 'app/entities/field-test-pagination-entity/field-test-pagination-entity.reducer';
// prettier-ignore
import fieldTestServiceClassAndJpaFilteringEntity, {
  FieldTestServiceClassAndJpaFilteringEntityState
} from 'app/entities/field-test-service-class-and-jpa-filtering-entity/field-test-service-class-and-jpa-filtering-entity.reducer';
// prettier-ignore
import fieldTestServiceImplEntity, {
  FieldTestServiceImplEntityState
} from 'app/entities/field-test-service-impl-entity/field-test-service-impl-entity.reducer';
// prettier-ignore
import entityWithDTO, {
  EntityWithDTOState
} from 'app/entities/entity-with-dto/entity-with-dto.reducer';
// prettier-ignore
import entityWithServiceClassAndPagination, {
  EntityWithServiceClassAndPaginationState
} from 'app/entities/entity-with-service-class-and-pagination/entity-with-service-class-and-pagination.reducer';
// prettier-ignore
import entityWithServiceImplAndPagination, {
  EntityWithServiceImplAndPaginationState
} from 'app/entities/entity-with-service-impl-and-pagination/entity-with-service-impl-and-pagination.reducer';
// prettier-ignore
import entityWithServiceImplAndDTO, {
  EntityWithServiceImplAndDTOState
} from 'app/entities/entity-with-service-impl-and-dto/entity-with-service-impl-and-dto.reducer';
// prettier-ignore
import entityWithPaginationAndDTO, {
  EntityWithPaginationAndDTOState
} from 'app/entities/entity-with-pagination-and-dto/entity-with-pagination-and-dto.reducer';
// prettier-ignore
import entityWithServiceClassPaginationAndDTO, {
  EntityWithServiceClassPaginationAndDTOState
} from 'app/entities/entity-with-service-class-pagination-and-dto/entity-with-service-class-pagination-and-dto.reducer';
// prettier-ignore
import entityWithServiceImplPaginationAndDTO, {
  EntityWithServiceImplPaginationAndDTOState
} from 'app/entities/entity-with-service-impl-pagination-and-dto/entity-with-service-impl-pagination-and-dto.reducer';
// prettier-ignore
import division, {
  DivisionState
} from 'app/entities/test-root/division/division.reducer';
// prettier-ignore
import place, {
  PlaceState
} from 'app/entities/test-root/place/place.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly documentBankAccount: DocumentBankAccountState;
  readonly fieldTestEntity: FieldTestEntityState;
  readonly fieldTestInfiniteScrollEntity: FieldTestInfiniteScrollEntityState;
  readonly fieldTestMapstructAndServiceClassEntity: FieldTestMapstructAndServiceClassEntityState;
  readonly fieldTestPaginationEntity: FieldTestPaginationEntityState;
  readonly fieldTestServiceClassAndJpaFilteringEntity: FieldTestServiceClassAndJpaFilteringEntityState;
  readonly fieldTestServiceImplEntity: FieldTestServiceImplEntityState;
  readonly entityWithDTO: EntityWithDTOState;
  readonly entityWithServiceClassAndPagination: EntityWithServiceClassAndPaginationState;
  readonly entityWithServiceImplAndPagination: EntityWithServiceImplAndPaginationState;
  readonly entityWithServiceImplAndDTO: EntityWithServiceImplAndDTOState;
  readonly entityWithPaginationAndDTO: EntityWithPaginationAndDTOState;
  readonly entityWithServiceClassPaginationAndDTO: EntityWithServiceClassPaginationAndDTOState;
  readonly entityWithServiceImplPaginationAndDTO: EntityWithServiceImplPaginationAndDTOState;
  readonly division: DivisionState;
  readonly place: PlaceState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  documentBankAccount,
  fieldTestEntity,
  fieldTestInfiniteScrollEntity,
  fieldTestMapstructAndServiceClassEntity,
  fieldTestPaginationEntity,
  fieldTestServiceClassAndJpaFilteringEntity,
  fieldTestServiceImplEntity,
  entityWithDTO,
  entityWithServiceClassAndPagination,
  entityWithServiceImplAndPagination,
  entityWithServiceImplAndDTO,
  entityWithPaginationAndDTO,
  entityWithServiceClassPaginationAndDTO,
  entityWithServiceImplPaginationAndDTO,
  division,
  place,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
});

export default rootReducer;
