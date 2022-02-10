export interface CellUserProps {
    name: string,
    image: string,
    type?: CellUserType
}

type CellUserType = 'master' | 'sponsor'