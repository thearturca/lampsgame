import { useEffect, useMemo, useState } from "react";
import { GET_PARAMS } from "../../../consts/router"
import useGetParameter from "../../../hooks/useGetParameter"

let timeout: NodeJS.Timeout;

export default () => {
    const popupName = useGetParameter(GET_PARAMS.popup);
    const [mountedPopup, setMountedPopup] = useState<string | null>(popupName);

    useEffect(() => {
        if(popupName) {
            timeout && clearTimeout(timeout);
            setMountedPopup(popupName);
        } else {
            timeout = setTimeout(() => {
                setMountedPopup(null);
            }, 300);
        }
    }, [popupName]);

    useEffect(() => {
        return () => {
            timeout && clearTimeout(timeout);
        }
    }, []);

    const isOpened: boolean = useMemo(() => Boolean(popupName), [popupName]);

    return { mountedPopup, isOpened}
}