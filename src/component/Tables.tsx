import {Loading} from "./Loading";
import {useState} from "react";
import {Pagination} from "./Pageination";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export const Tables = ({tableName, headers, bodies, status, loading, getAll}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(10)
    const [search, setSearch] = useState('')

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = bodies.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filter = bodies.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className="app-content pt-3 p-md-3 p-lg-4 w-100 border mt-2" style={{background: 'white'}}>
            {loading ? (
                <div className="container-xl">
                    <div className={"d-flex align-items-center justify-content-between"}>
                        <h1 className="app-page-title">{tableName}</h1>
                        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}
                               className={"form-control w-25"} placeholder={"qidirish..."}/>
                    </div>
                    <div className={"w-100"}>
                        {bodies.length === 0 ? (
                            <h2 className={"text-center text-danger"}>Hozircha ma'lumot mavjud emas...</h2>
                        ) : (
                            search.length === 0 ? (
                                <GetAll bodies={currentData} status={status} headers={headers} prePage={prePage}
                                        paginate={paginate}/>
                            ) : (
                                filter.length === 0 ? (
                                    <h2 className={"text-center text-danger"}>Qidiruv natijasida hech narsa
                                        topilmadi...</h2>
                                ) : (
                                    <GetAll bodies={filter} status={status} headers={headers} prePage={prePage}
                                            paginate={paginate} getAll={getAll}/>
                                )
                            )
                        )}
                    </div>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}
const GetAll = ({bodies, status, headers, prePage, paginate, getAll}) => {
    const [modal, setModal] = useState(false);
    const [about, setAbout] = useState('');
    const toggle = (i) => {
        setModal(!modal)
        setAbout(i)
    };
    return (
        <>
            <table className={"table"}>
                <thead>
                <tr>
                    {headers.map(head => (
                        <th colSpan={head.col ? head.col : 1}>{head.name}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {bodies.map((body, i) => (
                    status === "FAQ" ? (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{body.name}</td>
                            <td>
                                <Button color="success" onClick={() => toggle(body.faqAbout)}>
                                    <i className="bi bi-eye"/>
                                </Button>
                            </td>
                            <td>
                                <Button color="warning">
                                    <i className="bi bi-pencil-square"/>
                                </Button>
                            </td>
                            <td>
                                <Button color="danger">
                                    <i className="bi bi-trash3"/>
                                </Button>
                            </td>
                        </tr>
                    ) : status === "Xabar" ? (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{body.name}</td>
                            <td>{body.surname}</td>
                            <td>
                                <Button color="success" onClick={() => toggle(body.faqAbout)}>
                                    <i className="bi bi-eye"/>
                                </Button>
                            </td>
                        </tr>
                    ) : (
                        <></>
                    )
                ))}
                </tbody>
            </table>
            <Pagination totalData={bodies.length} perPage={prePage} paginate={paginate}/>
            <AboutModal modal={modal} toggle={toggle} about={about} setModal={setModal}/>
        </>
    )
}

const AboutModal = ({modal, toggle, about, setModal}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Ma'lumot</ModalHeader>
                <ModalBody>
                    <div>
                        {about}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setModal(false)}>
                        Yopish
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}