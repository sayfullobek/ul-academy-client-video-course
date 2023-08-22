import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {Link} from "react-router-dom";
import {Loading} from "../../../component/Loading";
import {BaseConnection} from "../../../service/BaseConnection";

export const CoursePage = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.course, "data")
            setCourses(res)
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            {loading ? (
                <div className={"container d-flex align-items-end justify-content-center flex-column"}>
                    <Link className={"mt-5 btn btn-success"} to={"/auth/dashboard/course/upload-photo"}>Yaratish</Link>
                    <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                        <div className="container-xl">
                            <div className="row g-3 mb-4 align-items-center justify-content-between">
                                <div className="col-auto">
                                    <h1 className="app-page-title mb-0">Mening Kurslarim</h1>
                                </div>
                            </div>

                            <div className="row">
                                {courses !== undefined ? (
                                    <GetCourse courses={courses} getAll={getAll()}/>
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

const GetCourse = ({courses, getAll}) => {
    return (
        <>
            {courses.map(item => (
                <div className="card mb-3" style={{width: "540px", height: '240px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={APP_API.downloadPhoto + item.photoId}
                                alt="Trendy Pants and Shoes"
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                    {item.courseDescription}
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">{item.updateAbout}</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">{item.teacherName}</small>
                                </p>
                                <p className="card-text">
                                    <small
                                        className={item.coursePriceName === "FREE" ? "bg-success p-2 text-light text-muted" : "bg-danger p-2 text-light text-muted"}>{item.coursePriceName}</small>
                                </p>
                                <Link className={"btn btn-success"} to={"/auth/dashboard/course/" + item.id}>Batafsil
                                    ma'lumot</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}