import { InsertEmoticon } from "@mui/icons-material";
import './style.css'

const ServiceList = ({ itemService }) => {
    return(
        <div class = "servicelist-container">
            <div class = "servicelist-icon">
                <img src = "src/content/Group 53.png"></img>
            </div>
            <a class = "servicelist-desc">{itemService}</a>
        </div>
    )
}

export default ServiceList;