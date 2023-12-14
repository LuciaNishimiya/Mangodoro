import { useContext, useEffect } from "react";
import { ModalJoin } from "../../Components/ModalJoin";
import { ModalContext } from "../../Context/Modal";

export function useOpenJoinMenu(id) {
    const { setModalContent } = useContext(ModalContext);

    useEffect(() => {
        setModalContent({ title: `join room: ${id}`, content: <ModalJoin /> });
    }, [id]);
}
