import { useMutation } from "@apollo/client";
import { showData } from "../graphql/query";
import { AddData } from "../graphql/mutation";

export default function useAddData() {
    const [addData, {loading: loadingAdd}] = useMutation(AddData, {
        refetchQueries: [showData]
      });
      return {
          addData,
          loadingAdd
      }
}