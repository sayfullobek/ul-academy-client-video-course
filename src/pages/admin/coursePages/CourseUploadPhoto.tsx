import {FileUpload} from "primereact/fileupload";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../../service/BaseUrl";

export const CourseUploadPhoto = () => {

    const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-plus'};
    const uploadOptions = {label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success'};
    const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger'};
    const navigate = useNavigate()

    const myUploader = (event) => {
        //event.files == files to upload
        localStorage.setItem("course_photoId", event.xhr.response.substr(1, 36))
        navigate("/auth/dashboard/course/add")
    }

    return (
        <div className={"container d-flex align-items-end justify-content-center flex-column"}>
            <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                <div className="container-xl">
                    <h5 className={"text-center text-success m-3"}>Amaliy ishingizning rasmini yuklang</h5>
                    <FileUpload name="demo[]" url={BASE_URL + "/attachment/upload"} id={"photo"}
                                chooseOptions={chooseOptions}
                                uploadOptions={uploadOptions}
                                cancelOptions={cancelOptions} uploadHandler={myUploader} onUpload={myUploader}
                                accept="image/*"/>
                </div>
            </div>
        </div>
    )
}