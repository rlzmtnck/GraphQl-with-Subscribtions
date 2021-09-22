import { useMutation } from "@apollo/client";
import { showData } from "../graphql/query";
import { DeleteData } from "../graphql/mutation";

export default function useDeleteData() {
    const [deleteData, {loading: loadingDelete}] = useMutation(DeleteData, {
        refetchQueries: [showData]
      });
      return {
          deleteData,
          loadingDelete
      }
}