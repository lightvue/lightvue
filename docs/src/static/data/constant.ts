const COMPONENT_STATUS = {
  UNDER_DEVELOPMENT: {
    label: 'Under Development',
    color: 'warning',
    description: 'Component is still under development, not recommended for production use yet !!',
  },
  BETA: {
    label: 'Beta',
    color: 'primary',
    description: 'Component is stable & available for Beta use. Please suggest issues on the GitHub.',
  },
  NEW: {
    label: 'Recently Added',
    color: 'primary',
    description: 'Component is newly added. It is stable & ready to use.',
  },
  UPDATED: {
    label: 'Recently Updated',
    color: 'primary',
    description: 'Component is recently updated. Check changelog for detailed changes.',
  },
};

export { COMPONENT_STATUS };
