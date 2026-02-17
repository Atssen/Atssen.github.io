import {useEffect} from "react";

export default function useClickOutside({ activeId, refs, onClose }) {
    useEffect(() => {
        if (!activeId) return;

        function handler(e) {
            const ref = refs[activeId];
            if (ref?.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("pointerdown", handler, true);
        return () => {
            document.removeEventListener("pointerdown", handler, true);
        };
    }, [activeId, refs, onClose]);
}
