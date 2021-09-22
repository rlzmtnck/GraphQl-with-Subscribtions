import { useQuery } from "@apollo/client"
import { showData } from "../graphql/query"
import { SubsData } from "../graphql/subs"

export default function useGetData() {
    const {data, loading, error, subscribeToMore} = useQuery(showData);

    const SubscribeData = () => {
        subscribeToMore({
            document: SubsData,
            updateQuery: (prev, {subscriptionData: {data}}) => {
                console.log(data)
                return data
            }
        })
    }
    return {
        data,
        loading,
        error,
        SubscribeData
    }
}