import { useLocation } from "react-router-dom"

export default (name: string) => {
    const { search } = useLocation();
    const query: URLSearchParams = new URLSearchParams(search);
    return query.get(name);
}