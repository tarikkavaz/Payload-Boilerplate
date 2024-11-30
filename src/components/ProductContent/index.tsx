import React from 'react'
import { Product } from '@/payload-types'

type Props = {
  product: Product
  className?: string
}

export const ProductContent: React.FC<Props> = ({ product, className }) => {
  return (
    <div className={className}>
      {/* Add your product-specific content here */}
      <div className="prose dark:prose-invert">
        {product.description && <p>{product.description}</p>}
        {/* Add other product-specific fields as needed */}
      </div>
    </div>
  )
} 