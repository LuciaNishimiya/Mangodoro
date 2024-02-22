import { useContext, useEffect } from "react";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { ModalContext } from "../../Context/Modal";
import { AppErrorContext } from "../../Context/AppErrors";

export function useOpenErrorMenu() {
    const { setModalContent } = useContext(ModalContext);
    const { appError } = useContext(AppErrorContext);
    useEffect(() => {
        if (appError)
            setModalContent({ title: `Error`, content: <ErrorMsg /> });
    }, [appError]);
}
