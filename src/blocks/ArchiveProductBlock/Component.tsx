import type { Product, ArchiveProductBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionProductArchive } from '@/components/CollectionProductArchive'

export const ArchiveProductBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let products: Product[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedProducts = await payload.find({
      collection: 'products',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    products = fetchedProducts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedProducts = selectedDocs.map((product) => {
        if (typeof product.value === 'object') return product.value
      }) as Product[]

      products = filteredSelectedProducts
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ml-0 max-w-[48rem]" content={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionProductArchive products={products} />
    </div>
  )
}