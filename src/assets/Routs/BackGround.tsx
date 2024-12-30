import { ReactNode } from "react"

const BackGround: React.FC<{ children: ReactNode }> = ({children}) => {

    return (
        <>
        {children}
        </>
    )
}

export {BackGround}