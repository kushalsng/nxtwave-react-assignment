export const addResourceForm = [
  {
    name: 'title',
    label: 'Item Title',
    placeholder: 'Enter title here...',
    type: 'text'
  },
  {
    name: 'link',
    label: 'Link',
    placeholder: 'Enter link here...',
    type: 'text'
  },
  {
    name: 'icon_url',
    label: 'Icon URL',
    placeholder: 'Enter icon URL here...',
    type: 'text'
  },
  {
    name: 'tag',
    label: 'Tag Name',
    placeholder: 'Select tag here...',
    type: 'select',
    options: [
      { value: 'request', label: 'Request' },
      { value: 'user', label: 'User' }
    ]
  },
  {
    name: 'category',
    label: 'Category',
    placeholder: 'Enter category here...',
    type: 'text'
  },
  {
    name: 'description',
    label: 'Description',
    placeholder: 'Enter description here...',
    type: 'textarea',
  },
]