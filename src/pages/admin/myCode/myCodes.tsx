import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {Link} from "react-router-dom";
import {Loading} from "../../../component/Loading";
import {Button} from "primereact/button";
import {DeleteConfirm} from "../../../component/DeleteConfirm";
import {ZIndexUtils} from "primereact/utils";

export const MyCodes = () => {
    const [myCodes, setMyCodes] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.myCodes, "data")
            setMyCodes(res)
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll().then(r => r).catch(e => e)
    }, [])
    return (
        <>
            {loading ? (
                <div className={"container d-flex align-items-end justify-content-center flex-column"}>
                    <Link className={"mt-5 btn btn-success"} to={"/auth/dashboard/codes/upload-photo"}>Yaratish</Link>
                    <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                        <div className="container-xl">
                            <div className="row g-3 mb-4 align-items-center justify-content-between">
                                <div className="col-auto">
                                    <h1 className="app-page-title mb-0">My Docs</h1>
                                </div>
                                <div className="col-auto">
                                    <div className="page-utilities">
                                        <div
                                            className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                            <div className="col-auto">
                                                <form className="docs-search-form row gx-1 align-items-center">
                                                    <div className="col-auto">
                                                        <input type="text" id="search-docs" name="searchdocs"
                                                               className="form-control search-docs"
                                                               placeholder="Search"/>
                                                    </div>
                                                    <div className="col-auto">
                                                        <button type="submit" className="btn app-btn-secondary">Search
                                                        </button>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="col-auto">

                                                <select className="form-select w-auto">
                                                    <option selected="" value="option-1">All</option>
                                                    <option value="option-2">Text file</option>
                                                    <option value="option-3">Image</option>
                                                    <option value="option-4">Spreadsheet</option>
                                                    <option value="option-5">Presentation</option>
                                                    <option value="option-6">Zip file</option>

                                                </select>
                                            </div>
                                            <div className="col-auto">
                                                <a className="btn app-btn-primary" href="#">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                         className="bi bi-upload me-2" fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                                    </svg>
                                                    Upload File</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {myCodes !== undefined ? (
                                    <GetCodes codes={myCodes} getAll={getAll()}/>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}
const GetCodes = ({codes, getAll}) => {
    const [visible, setVisible] = useState(false)
    const [id, setId] = useState('')
    const confirm = (ids) => {
        setVisible(!visible)
        setId(ids)
    }
    return (
        <>
            {codes.map(item => (
                <div className="col-6 col-md-4 col-xl-3 col-xxl-2">
                    <div className="app-card app-card-doc shadow-sm h-100">
                        <div className="app-card-thumb-holder p-3">
							    <span className="icon-holder">
                                    <img width={"100%"} height={"100%"} style={{borderRadius: '50%'}}
                                         src={APP_API.downloadPhoto + item.photoId} alt=""/>
	                            </span>
                            <span className="badge bg-success">NEW</span>
                            <a className="app-card-link-mask" href="#file-link"/>
                        </div>
                        <div className="app-card-body p-3 has-card-actions">
                            <h4 className="app-doc-title truncate mb-0"><a href="#file-link">{item.codeName}</a></h4>
                            <div className="app-doc-meta">
                                <ul className="list-unstyled mb-0">
                                    <li><span
                                        className="text-muted">Type:</span> {item.codeType.length <= 18 ? item.codeType : item.codeType.substr(0, 18)}
                                    </li>
                                    <li><span className="text-muted">Size:</span> {item.size}KB</li>
                                    <li><span className="text-muted">Uploaded:</span> {item.whenUpload}</li>
                                </ul>
                            </div>

                            <div className="app-card-actions">
                                <div className="dropdown">
                                    <div className="dropdown-toggle no-toggle-arrow"
                                         data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-three-dots-vertical" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg>
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-eye me-2" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                                                <path fill-rule="evenodd"
                                                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                            View</a></li>
                                        <li><a className="dropdown-item" href="#">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-pencil me-2" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                            Edit</a></li>
                                        <li><a className="dropdown-item" href={APP_API.downloadPhoto + item.codeId}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-download me-2" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                                <path fill-rule="evenodd"
                                                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                            </svg>
                                            Download</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <Button className={"dropdown-item"} onClick={() => confirm(item.id)}
                                                    icon="pi pi-check"
                                                    label="Confirm">
                                                <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                     className="bi bi-trash me-2" fill="currentColor"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                    <path fill-rule="evenodd"
                                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                </svg>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <DeleteConfirm id={id} visible={visible} setVisible={setVisible} url={APP_API.myCodes}
                           navigateUrl={"/auth/dashboard/codes"} getAll={getAll}/>
        </>
    )
}