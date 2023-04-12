import { TechnologyStyled } from "./style"

export const LiTech = ({name, level}) => {
    return(
        <TechnologyStyled>
            <p id="tech__name">{name}</p>
            <p id="tech__level">{level}</p>
        </TechnologyStyled>
    )
}