import type { Metadata } from 'next/types'

import { CollectionProductArchive } from '@/components/CollectionProductArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const products = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Products</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="products"
          currentPage={products.page}
          limit={12}
          totalDocs={products.totalDocs}
        />
      </div>

      <CollectionProductArchive products={products.docs} relationTo="products" />

      <div className="container">
        {products.totalPages > 1 && products.page && (
          <Pagination page={products.page} totalPages={products.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Products`,
  }
}