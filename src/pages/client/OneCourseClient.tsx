import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {EmbeddedGet} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";
import {Simulate} from "react-dom/test-utils";
import {Loading} from "../../component/Loading";
import {Card} from "primereact/card";
import {Rating} from "primereact/rating";
import {TabPanel, TabView} from "primereact/tabview";
import photo from '../../assets/login.png'

export const OneCourseClient = () => {
    const [value, setValue] = useState('')
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const id = useParams().id
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
    return (
        <div>
            {loading ? (
                <div className={"container p-5 pt-3"}>
                    <Card title={course.name} subTitle={course.courseDescription}>
                        <div className={"d-flex align-items-center justify-content-start fw-bold"}>
                            {value}<Rating className={"m-3 mt-0 mb-0"} value={value} cancel={false}
                                           onChange={(e) => setValue(e.value)}/>
                        </div>
                    </Card>
                    <Card title={"Kurs haqida batafsil"} className={"mt-3"}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={APP_API.downloadPhoto + course.photoId}
                                     className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 d-flex align-items-center justify-content-center">
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <span>
                                                    <i className="fa-brands fa-elementor fa-beat text-success"
                                                       style={{'fontSize': '1em', margin: '0 1rem 0 0'}}/>
                                                    Darslar</span>
                                                <span>{course.lessonsSize}</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <span>
                                                    <i className="fa-solid fa-clock fa-beat text-success"
                                                       style={{'fontSize': '1em', margin: '0 1rem 0 0'}}/>
                                                    Umumiy dars soati</span>
                                                <span>{course.umumiySoat}</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <span>
                                                    <i className="fa-solid fa-signal fa-beat text-success"
                                                       style={{'fontSize': '1em', margin: '0 1rem 0 0'}}/>
                                                    Darajasi</span>
                                                <span>{course.umumiySoat}</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <span>
                                                    <i className="fa-solid fa-language fa-beat text-success"
                                                       style={{'fontSize': '1em', margin: '0 1rem 0 0'}}/>
                                                    Til</span>
                                                <span>O'zbekcha</span>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className={"d-flex align-items-center justify-content-between"}>
                                                <span>
                                                    <i className="fa-solid fa-certificate fa-beat text-success"
                                                       style={{'fontSize': '1em', margin: '0 1rem 0 0'}}/>
                                                    Sertificat</span>
                                                <span>{course.isSertificate ? "Bor" : "Yo'q"}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="card mt-3 p-3">
                        <TabView className="tabview-custom">
                            <TabPanel header="Header I" leftIcon="pi pi-calendar">
                                <h3 className={"fw-bold mb-3"}>Kurs haqida ma'lumot</h3>
                                <p>{course.about}</p>
                                <h3 className={"fw-bold mb-3 mt-4"}>Nimarni o'rganasiz</h3>
                                {course.whatLearnDtos.map(item => (
                                    <>
                                        <i className="bi bi-check"/>
                                        <p>{item.name}</p>
                                    </>
                                ))}
                                <h3 className={"fw-bold mb-3 mt-4"}>Kurs talablari</h3>
                                {course.demandDtos.map(item => (
                                    <>
                                        <i className="bi bi-check"/>
                                        <p>{item.name}</p>
                                    </>
                                ))}
                            </TabPanel>
                            <TabPanel header="Header II" rightIcon="pi pi-user">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                    qui ratione
                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                                    modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                                    distinctio.
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus.</p>
                            </TabPanel>
                            <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
                                <h3 className={"fw-bold mb-3"}>O'qituvchi haqida</h3>
                                <div className={"w-100 d-flex align-items-center justify-content-between"}>
                                    <div className={"w-25"}>
                                        <img src={photo} className={"border shadow"} alt="..." style={{
                                            height: '100px',
                                            width: '100px',
                                            borderRadius: '50%'
                                        }}/>
                                    </div>
                                    <div className={"w-75"}>
                                        <div className={"d-flex"}>
                                            <h4>{course.resTeacher.name}</h4>
                                            <h4 className={"m-1 mt-0 mb-0"}>{course.resTeacher.surname}</h4>
                                        </div>
                                        <h5>
                                            {course.resTeacher.bio}
                                        </h5>
                                        <div className={"d-flex"}>
                                            <div className={"fw-bold"}>
                                                <i className="pi pi-star text-success" style={{'fontSize': '1em'}}/>
                                                {" "}4.2 Reyting
                                            </div>
                                            <div className={"fw-bold m-3 mt-0 mb-0"}>
                                                <i className="fa-solid fa-graduation-cap"
                                                   style={{color: "#1fe035", 'fontSize': '1em'}}/>
                                                {" "}+400 O'quvchi
                                            </div>
                                            <div className={"fw-bold mt-0 mb-0"}>
                                                <i className="bi bi-play-circle"
                                                   style={{color: "#1fe035", 'fontSize': '1em'}}/>
                                                {" "}{course.moduleSize} Modullar
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-100 mt-4"}>
                                    <p><span className={"text-success fw-bold"}>
                                            {course.resTeacher.name}
                                        {course.resTeacher.surname} : {" "}
                                    </span>{course.teacherTheCourseInfo}</p>
                                </div>
                            </TabPanel>
                        </TabView>
                    </Card>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    );
}