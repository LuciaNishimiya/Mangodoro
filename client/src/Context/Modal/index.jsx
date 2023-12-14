import { createContext, useState } from "react";
export const ModalContext = createContext()
export const ModalProvider = ({ children }) => {
    const [ModalContent, setModalContent] = useState(false);
    return (
        <ModalContext.Provider value={{
            ModalContent,
            setModalContent,
        }} >
            {children}
        </ModalContext.Provider >)
}