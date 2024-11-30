import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Products',
    hidden: false, // This will hide the collection from the admin UI
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
};
