import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import type { Product } from '@/payload-types'

import { CardProducts } from '../../components/CardProducts'

export type RelatedProductsProps = {
  className?: string
  docs?: Product[]
  introContent?: any
}

export const RelatedProducts: React.FC<RelatedProductsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('container', className)}>
      {introContent && <RichText content={introContent} enableGutter={false} />}
      <h2 className="text-2xl font-bold mt-8 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <CardProducts key={index} doc={doc} relationTo="products" showCategories />
        })}
      </div>
    </div>
  )
}
