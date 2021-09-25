import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import getItemDetail from './ItemDetailAPI'
import './ItemDetailPage.style.css'

export default function ItemDetailPage() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [itemId, setId] = useState(null)
  const [itemName, setItemName] = useState(null)

  const handleItemDetailRequest = useCallback(async (id) => {
    const item = await getItemDetail (id)
    setId(item.id)
    setItemName(item.itemName)
    setLoading(false)
  }, [])

  useEffect(() => {
    handleItemDetailRequest(id)
  }, [handleItemDetailRequest, id])

  return (
    <div id="itemDetail-page">
      {loading ? <span className="loading-message">Loading...</span> :
      <>
        <h1>아이템 상세 내용</h1>
        <div>
          <span>ID: {itemId}</span>
          <span>아이템명: {itemName}</span>
        </div>
      </>
      }
    </div>
  )
}
