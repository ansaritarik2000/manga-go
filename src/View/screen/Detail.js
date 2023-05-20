import { useLocation } from "react-router-dom";
import { useState } from "react";
function Detail(){
    const loc = useLocation();
    const [pro, setPro] = useState(loc.state.finalpage)
    return(
        <>
        Hello Niggas
        </>
    )
}
export default Detail;