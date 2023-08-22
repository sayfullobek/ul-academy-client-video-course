import {TabPanel, TabView} from "primereact/tabview";
import {useState} from "react";

export const Account = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className={"container d-flex align-items-end justify-content-center flex-column"}>
                <div className="app-content w-100 pt-3 p-md-3 p-lg-4 mt-3" style={{background: 'white'}}>
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">{activeIndex === 0 ? "Mening Profilim" : activeIndex === 1 ? "Mening Kurslarim" : "Xavfli"}</h1>
                            </div>
                        </div>

                        <div className="row">
                            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                                <TabPanel header="Sozlamalar">
                                    <Settings/>
                                </TabPanel>
                                <TabPanel header="Kurslar">
                                    <p className="m-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                                        numquam eius modi.
                                    </p>
                                </TabPanel>
                                <TabPanel header="Xavfli">
                                    <p className="m-0">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti
                                        quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique sunt in
                                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
                                        harum quidem rerum facilis est et expedita distinctio.
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                        minus.
                                    </p>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Settings = () => {
    const [firstName, setFirstName] = useState(localStorage.getItem("__firstName__"))
    const [lastName, setLastName] = useState(localStorage.getItem("__lastName__"))
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"}>
            <form className={"w-75 d-flex align-items-center justify-content-center"}>
                <div className={"w-100 d-flex"}>
                    <div className={"col-6"}>
                        <label htmlFor="name" className={"fw-bold"}>Ismingiz</label>
                        <input type="text" id={"name"} name={"name"} placeholder={"Ismingizni kiriting"}
                               value={firstName}
                               onChange={e => setFirstName(e.target.value)} className={"form-control"}/>
                    </div>
                    <div className={"col-6"}>
                        <label htmlFor="lastName" className={"fw-bold"}>Familiyangiz</label>
                        <input type="text" id={"lastName"} name={"lastName"} placeholder={"Familiyangizni kiriting"}
                               value={lastName}
                               onChange={e => setLastName(e.target.value)} className={"form-control"}/>
                    </div>
                </div>
            </form>
        </div>
    )
}