import { InsertEmoticon } from "@mui/icons-material";
import './style.css'

const ServiceList = ({ itemService }) => {
    return(
        <div class = "servicelist-container">
            <img src = "src/content/Group 53.png" class = "servicelist-icon" />
            <a class = "servicelist-desc">{itemService}</a>
        </div>
    )
}

export default ServiceList;