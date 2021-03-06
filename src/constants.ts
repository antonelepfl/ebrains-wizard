
export const storageKeys = {
  SAVED_URL: 'urlParam',
  SELECTED_USECASE: 'selectedUsecase',
  RETURN_LOGIN: 'returnFromLogin',
  MODELS_LIST: 'modelsList',
  SELECTED_COLLAB: 'selectedCollab',
  SELECTED_CATEGORY: 'selectedCategory',
};

export const iam = {
  LOGIN_URL: 'https://iam.ebrains.eu/auth/realms/hbp',
};

export const drive = {
  BASE_DRIVE_URL: 'https://corsproxy-sa.herokuapp.com',
  DRIVE_API_URL: 'https://drive.ebrains.eu/api2',
  DEFAULT_UC_FOLDER_NAME: 'CLS-INTERACTIVE-UC',
  DEFAULT_MODEL_FOLDER_NAME: 'CLS-INTERACTIVE-MODELS',
  DEFAULT_MODEL_FILE_NAME: 'models.json',
};

export const nbgitpuller = {
  BASE: 'https://lab.ebrains.eu/hub/user-redirect/git-pull?depth=0',
  REPO_KEY: '&repo=',
  URL_PATH_KEY: '&urlpath=lab/tree',
  TARGET_PATH_KEY: '&targetPath=/opt/app-root/src',
};

export const pages = {
  USECASE_SELECTION: 'usecaseSelection',
  COLLAB_SELECTION: 'collabSelection',
  MODEL_SELECTION: 'modelSelection',
};

export const modelCatalog = {
  URL: 'https://validation-v2.brainsimulation.eu/models/',
  HIPPOCAMPUS_QUERY: '?brain_region=hippocampus&organization=HBP-SP6&model_scope=single%20cell&species=Rattus%20norvegicus&collab_id=12027&size=1000000',
};

export const model = {
  BREADCRUMB_PROPERTIES: ['species', 'brain_region', 'cell_type', 'name'],
};

// cannot extract github url due script (usecases-schema-to-ts) will not know how to resolve
export const usecases = {
  INFO_FILE_URL: 'https://raw.githubusercontent.com/ebrains-cls-interactive/usecases-info/main/usecases-info.json',
  JSON_SCHEMA_URL: 'https://raw.githubusercontent.com/ebrains-cls-interactive/usecases-info/main/usecases-info.schema.json',
  STATISTIC_URL: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSeLKkgcY1yDb9gHjmFY-Ys8YH65wVhubdGfXUgudrRVIDtlqQ/formResponse',
};
