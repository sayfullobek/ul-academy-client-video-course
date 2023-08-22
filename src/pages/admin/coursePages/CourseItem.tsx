import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {Link, useParams} from 'react-router-dom'
import {Loading} from "../../../component/Loading";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {TabMenu} from "primereact/tabmenu";

export const CourseItem = () => {
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const id = useParams().id
    const [module, setModule] = useState([])
    const getOneCourse = async () => {
        try {
            const res = await EmbeddedGet(APP_API.course + "/" + id, "data")
            setCourse(res)
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getOneCourse()
    }, [])

    const getModule = () => {
        if (course.modules) {
            let labels = []
            course.modules.map(item => {
                labels.push({label: item.moduleName, icon: ''})
            })
            setModule(labels)
        }
    }

    useEffect(() => {
        getModule()
    }, [])

    return (
        <>
            {loading ? (
                <div>
                    <div className={"container d-flex align-items-end justify-content-center flex-column"}>
                        <Link className={"mt-5 btn btn-success"}
                              to={"/auth/dashboard/course"}>Orqaga</Link>
                        <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                            <div className="container-xl">
                                <div className="row g-3 mb-4 align-items-center justify-content-between">
                                    <div className="col-auto">
                                        <h1 className="app-page-title mb-0">{course.name}</h1>
                                    </div>
                                </div>
                                <Card className="my-2">
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {course.courseAbout}
                                        </CardTitle>
                                        <CardText>
                                            {course.courseDescription}
                                        </CardText>
                                        <CardText>
                                            <small className="text-muted">
                                                {course.updateAbout}
                                            </small>
                                        </CardText>
                                    </CardBody>
                                    <CardImg
                                        alt="Card image cap"
                                        bottom
                                        src={APP_API.downloadPhoto + course.photoId}
                                        style={{
                                            height: "60vh"
                                        }}
                                        width="100%"
                                    />
                                </Card>
                                <Link to={"/auth/dashboard/course/" + id + "/module-add"}
                                      className={"btn btn-success"}>Modul
                                    Qo'shish</Link>
                                <button
                                    className={course.modules.length !== 0 ? "btn btn-success mt-0 mb-0 m-3" : "btn btn-success mt-0 mb-0 m-3 disabled"}>Darslik
                                    Qo'shish
                                </button>
                            </div>
                            <div className="card">
                                <TabMenu model={module}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <><Loading/></>
            )}
        </>
    )
}