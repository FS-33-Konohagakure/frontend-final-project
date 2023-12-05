import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from "../../api"
import Cookies from "js-cookie"

function InformasiDokter() {
  const { dokterId } = useParams();
  const [dokter, setDokter] = useState(null)

  useEffect(() => {
    dokterInformation();
  },[dokterId])

  const token = Cookies.get("token");

  const dokterInformation = async () => {
    const response = await api.get(`/dokters/:id`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response);
    setDokter(response);
  }

  return (
    <div>
        <h1>{dokter.name}</h1>
    </div>
  )
}

export default InformasiDokter