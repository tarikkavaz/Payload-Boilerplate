import type { Product } from '@/payload-types'

export const product2: Partial<Product> = {
  slug: 'display-technology-guide',
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Understanding modern display technologies. From refresh rates to color accuracy, discover what makes a monitor truly exceptional.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Disclaimer',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 1,
                        mode: 'normal',
                        style: '',
                        text: 'Disclaimer:',
                        version: 1,
                      },
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: ' This content is fabricated and for demonstration purposes only. To edit this product, ',
                        version: 1,
                      },
                      {
                        type: 'link',
                        children: [
                          {
                            type: 'text',
                            detail: 0,
                            format: 0,
                            mode: 'normal',
                            style: '',
                            text: 'navigate to the admin dashboard.',
                            version: 1,
                          },
                        ],
                        direction: 'ltr',
                        fields: {
                          linkType: 'custom',
                          newTab: true,
                          url: '/admin',
                        },
                        format: '',
                        indent: 0,
                        version: 3,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 1,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            style: 'info',
          },
          format: '',
          version: 2,
        },
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Display Technologies: LCD, OLED, and Beyond',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "Modern monitors represent the pinnacle of display technology, offering unprecedented clarity, color accuracy, and response times. Whether you're a creative professional requiring precise color reproduction or a gamer seeking competitive advantage through high refresh rates, understanding these technologies is crucial for making an informed choice.",
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: 'block',
          fields: {
            blockName: 'Dynamic components',
            blockType: 'banner',
            content: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            style: 'info',
          },
          format: '',
          version: 2,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  price: 499.99,
  currency: '$', 
  buy: 'https://www.dell.com/monitors',
  shop: 'Dell Official Store',
  meta: {
    description:
      'Understanding modern display technologies. From refresh rates to color accuracy, discover what makes a monitor truly exceptional.',
    // @ts-ignore
    image: '{{IMAGE_1}}',
    title: 'Display Technology Guide: Choosing the Perfect Monitor',
  },
  relatedProducts: [], // this is populated by the seed script
  title: 'Display Technology Guide: Choosing the Perfect Monitor',
}
