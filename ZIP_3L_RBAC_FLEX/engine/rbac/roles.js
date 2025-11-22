export const ROLES = {
  QALICB: 'qalicb',
  CDE: 'cde',
  INVESTOR: 'investor',
  ADMIN: 'admin'
};

export const PERMISSIONS = {
  VIEW_PROJECT: ['qalicb','cde','investor','admin'],
  UPLOAD_DOC: ['qalicb','cde','admin'],
  VIEW_CDE_NOTES: ['cde','admin'],
  VIEW_INVESTOR_NOTES: ['investor','admin'],
  VIEW_DEALROOM: ['qalicb','cde','investor','admin'],
  UPDATE_STATUS: ['cde','admin'],
  CREATE_COMMIT: ['investor','admin']
};
