import { useSubscription } from "@apollo/client"

import { SubsData } from "../graphql/subs"

export default function useSubs() {
    const {data, loading, error} = useSubscription(SubsData)

      return {
          data,
          loading,
          error
      }
}