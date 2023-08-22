import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";
import {ZIndexUtils} from "primereact/utils";
import set = ZIndexUtils.set;
import {Loading} from "../../component/Loading";
import {Card} from "primereact/card";
import {Link} from "react-router-dom";
import {Tables} from "../../component/Tables";
import {FaqHeaders} from "../../utils/TableHeaders";

export const Dashboard = () => {
    const [statistic, setStatistic] = useState({})
    const [loading, setLoading] = useState(false)
    const getStatistic = async () => {
        try {
            const res = await EmbeddedGet(APP_API.statistic, "data")
            setStatistic(res)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getStatistic()
    }, [])

    const arr = [
        {
            title: 'Mening kurslarim',
            description: 'qozi',
            about: statistic.courseSize,
            bg: '#97f2a9e8',
            link: '/auth/dashboard/course'
        }, {
            title: 'Mening Kodlarim',
            description: 'qozi',
            about: statistic.myCodeSize,
            bg: 'rgb(159 151 242 / 91%)',
            link: '/auth/dashboard/codes'
        }, {
            title: 'Modullar',
            description: 'qozi',
            about: statistic.moduleSize,
            bg: 'rgb(242 151 180 / 72%)',
            link: '/auth/dashboard/course'
        }, {
            title: 'Kamentariyalar',
            description: 'qozi',
            about: statistic.commentSize,
            bg: 'rgb(242 232 151 / 87%)',
            link: '/auth/dashboard/notification'
        }, {
            title: 'Foydalanuvchilar',
            description: 'qozi',
            about: statistic.authSize,
            bg: 'rgb(151 233 242 / 87%)',
            link: '/auth/dashboard'
        },
    ]

    return (
        <div>
            {loading ? (
                <div className={"container d-flex align-items-end justify-content-center flex-column"}>
                    <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                        <div className="container-xl">
                            <div className="row g-3 mb-4 align-items-center justify-content-between">
                                <div className="col-auto">
                                    <h1 className="app-page-title mb-0">Asosiy Menyu</h1>
                                </div>
                                <div className="row d-flex align-items-center justify-content-between">
                                    {arr.map(item => (
                                        <Card title={item.title} className={"mt-3"}
                                              style={{width: '49%', background: item.bg}}>
                                            <p className="m-0">
                                                {item.description}
                                            </p>
                                            <h5 className="m-0 mt-3 mb-3">
                                                soni : <span style={{color: "black"}}>{item.about}</span>
                                            </h5>
                                            <Link className={"btn btn-success"} to={item.link}>Batafsil</Link>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}