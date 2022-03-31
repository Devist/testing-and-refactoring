// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    let page = Number(req.query.page)
    let limit = Number(req.query.limit)
    let category = req.query.category

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    let filteredArray = ProductList

    if (category !== 'all') {
      filteredArray = ProductList.filter((x) => x.category === category)
    }

    let result = filteredArray.slice(startIndex, endIndex)

    res.json({
      total: filteredArray.length,
      rows: result,
    })
  }
}

export const ProductList = [
  {
    idx: 1,
    title: '상품 제목 (1)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 5000,
    category: 'clothes',
    categoryName: '의류',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 2,
    title: '상품 제목 (2)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 2000,
    category: 'clothes',
    categoryName: '의류',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 3,
    title: '상품 제목 (3)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 1000,
    category: 'clothes',
    categoryName: '의류',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 4,
    title: '상품 제목 (4)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 1000,
    category: 'electric',
    categoryName: '전자기기',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 5,
    title: '상품 제목 (5)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 4000,
    category: 'electric',
    categoryName: '전자기기',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 6,
    title: '상품 제목 (6)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 4000,
    category: 'electric',
    categoryName: '전자기기',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 7,
    title: '상품 제목 (7)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 2000,
    category: 'electric',
    categoryName: '전자기기',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 8,
    title: '상품 제목 (8)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 3000,
    category: 'electric',
    categoryName: '전자기기',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 9,
    title: '상품 제목 (9)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 1000,
    category: 'foods',
    categoryName: '식료품',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 10,
    title: '상품 제목 (10)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 3000,
    category: 'foods',
    categoryName: '식료품',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 11,
    title: '상품 제목 (11)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 5000,
    category: 'foods',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 12,
    title: '상품 제목 (12)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 3000,
    category: 'foods',
    categoryName: '식료품',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 13,
    title: '상품 제목 (13)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 1000,
    category: 'camping',
    categoryName: '캠핑용품',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 14,
    title: '상품 제목 (14)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 2000,
    category: 'camping',
    categoryName: '캠핑용품',
    content: '상품 상세 페이지 입니다.',
  },
  {
    idx: 15,
    title: '상품 제목 (15)',
    thumbnail: 'https://via.placeholder.com/200',
    amount: 4000,
    category: 'camping',
    categoryName: '캠핑용품',
    content: '상품 상세 페이지 입니다.',
  },
]
