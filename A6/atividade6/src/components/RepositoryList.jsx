import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import '../style/repositories.scss'
const repository ={ name: 'Atividade',
     description:"descrição da atividade",
    link: "https://github.com/guilhxrmz"}
export function RepositoryList(){
    return(
            <>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <Counter/>
            </>

    )
}
