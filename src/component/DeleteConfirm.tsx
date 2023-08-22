import {ConfirmDialog} from "primereact/confirmdialog";
import {DeleteAbout} from "../service/connectService/AppService";
import {useNavigate} from "react-router-dom";

export const DeleteConfirm = ({visible, setVisible, id, url, navigateUrl, getAll}) => {
    const navigate = useNavigate()
    const deleteAbout = async () => {
        try {
            await DeleteAbout(url, id, setVisible)
            navigate(navigateUrl)
            getAll()
        } catch (err) {
        }
    }
    return (
        <div>
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)}
                           message="Ushbu kodni o'chirasizmi?"
                           header="O'chirish" icon="pi pi-exclamation-triangle" accept={deleteAbout} reject={true}/>

        </div>
    )
}