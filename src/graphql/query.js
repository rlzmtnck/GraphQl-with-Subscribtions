import {gql} from '@apollo/client'

export const showData = gql`
query MyQuery {
  Kampus_Merdeka_anggota {
    nama
    umur
    id
    jkelamin
    keterangans {
      nilai
      pelajaran
      status
    }
  }
}

`