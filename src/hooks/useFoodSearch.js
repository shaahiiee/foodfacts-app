import { useState } from 'react'
import axios from 'axios'

function useFoodSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchFood = async (query) => {
    if (!query || query.trim() === '') {
      setResults([])
      setError('Please enter a search term')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('/api/cgi/search.pl', {
        params: {
          search_terms: query,
          json: 1,
          page_size: 10,
        },
      })

      const products = response.data?.products || []

      const filtered = products.filter(
        (p) => p.product_name?.trim() !== '' && p.code
      )

      setResults(filtered)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return { results, loading, error, searchFood }
}

export default useFoodSearch