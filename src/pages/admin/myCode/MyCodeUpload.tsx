import {FileUpload} from "primereact/fileupload";
import {useNavigate} from "react-router-dom";

export const MyCodeUpload = () => {
    const navigate = useNavigate()
    const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-plus'};
    const uploadOptions = {label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success'};
    const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger'};

    const myUploader = (event) => {
        //event.files == files to upload
        localStorage.setItem("code_id", event.xhr.response.substr(1, 36))
        navigate("/auth/dashboard/codes/add")
    }

    return (
        <div className={"container d-flex align-items-end justify-content-center flex-column"}>
            <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                <div className="container-xl">
                    <h5 className={"text-center text-success m-3"}>Amaliy ishingizni yuklang</h5>
                    <FileUpload name="demo[]" url="http://localhost:9000/api/v1/attachment/upload" id={"photo"}
                                chooseOptions={chooseOptions}
                                uploadOptions={uploadOptions}
                                cancelOptions={cancelOptions} uploadHandler={myUploader} maxFileSize="100000000"
                                onUpload={myUploader}
                    />
                </div>
            </div>
        </div>
    )
}