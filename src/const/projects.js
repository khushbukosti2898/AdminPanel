export const PROJECT_STATUS_OPTIONS = [
  { value: 'completed', label: 'Completed' },
  { value: 'processing', label: 'Processing' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'onHold', label: 'On Hold' },
  { value: 'inTransit', label: 'In Transit' },
];

export const intitalProjectState = {
  customer: '',
  refNo: '',
  projectName: '',
  projectNo: '',
  areaLocation: '',
  address: '',
  dueDate: '',
  contact: '',
  manager: '',
  staff: '',
  status: '',
  email: '',
};

export const PROJECT_TABLE_HEADER = [
  { id: 'customer', label: 'Customer', align: 'left' },
  { id: 'refNo', label: 'Ref No', align: 'center' },
  {
    id: 'projectName',
    label: 'Project Name',
    align: 'right',
  },
  {
    id: 'projectNo',
    label: 'Project Number',
    align: 'left',
  },
  {
    id: 'areaLocation',
    label: 'Area Location',
    align: 'right',
  },
  {
    id: 'address',
    label: 'address',
    align: 'left',
  },
];
