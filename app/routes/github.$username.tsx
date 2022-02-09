import { LoaderFunction, useLoaderData } from "remix";
import { Api, GithubContainer, LoaderData } from "~/features/github";


export const loader: LoaderFunction = async({params}) => {

    return{
        user: await Api.getGithubUser(params.username)
    }
}

export function ErrorBoundary() {
    const {data, error} = useLoaderData<GithubContainer>();

    if(error){
        return <div>{error.message}</div>
    }
}

export default function() {
    const {user} = useLoaderData<LoaderData>();

    return <GithubContainer user={user} />;

}