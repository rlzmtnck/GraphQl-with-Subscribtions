import {gql} from '@apollo/client'
export const SubsData = gql`
subscription MySubscription {
    Kampus_Merdeka_anggota {
      nama
      umur
      jkelamin
      id
    }
  }

`