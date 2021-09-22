import {gql} from '@apollo/client'
export const AddData = gql`
  mutation MyMutation($object: Kampus_Merdeka_anggota_insert_input!) {
    insert_Kampus_Merdeka_anggota_one(object: $object) {
      id
    }
  }
    
  `
export const DeleteData = gql`
  mutation MyMutation($id: Int!) {
    delete_Kampus_Merdeka_anggota_by_pk(id: $id) {
      id
    }
  }
  
  
  `