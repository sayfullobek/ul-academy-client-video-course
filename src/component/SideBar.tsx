import {Link, useLocation} from "react-router-dom";

export const SideBar = () => {
    const location = useLocation().pathname
    const token = localStorage.getItem("__ids__user__token")
    const role = localStorage.getItem("__user_role__")
    const sideArr = role === "DIRECTOR" || role === "ADMIN" ? [
        {name: 'Bosh Sahifa', logo: '', link: '/auth/dashboard', hidden: false},
        {name: 'Kurslar', logo: '', link: '/auth/dashboard/course', hidden: false},
        {name: 'Amaliy Ishlar', logo: '', link: '/auth/dashboard/codes', hidden: false},
        // {name: 'Biz Bilan A\'loqa', logo: '', link: '/auth/dashboard/contact', hidden: false},
        {name: 'Platforma Haqida', logo: '', link: '/auth/dashboard/FAQ', hidden: false},
        {name: 'Fikr Bildirish', logo: '', link: '/auth/dashboard/message', hidden: false},
        // {name: 'Bootcamp', logo: '', link: '/auth/dashboard/bootcamp', hidden: false},
    ] : [
        {name: 'Bosh Sahifa', logo: '', link: '/', hidden: false},
        {name: 'Kurslar', logo: '', link: '/course', hidden: false},
        {name: 'Amaliy Ishlar', logo: '', link: '/codes', hidden: false},
        {name: 'Biz Bilan A\'loqa', logo: '', link: '/contact', hidden: false},
        {name: 'Platforma Haqida', logo: '', link: '/FAQ', hidden: false},
        {name: 'Fikr Bildirish', logo: '', link: '/send-message', hidden: false},
        // {name: 'Bootcamp', logo: '', link: '/bootcamp', hidden: false},
    ]

    const sideFooter = role === "DIRECTOR" || role === "ADMIN" ? [
        // {name: 'Xabarlar', logo: '', link: '/auth/dashboard/notification'},
        // {name: 'Sozlamalar', logo: '', link: '/auth/dashboard/settings'},
        // {name: 'Chiqish', logo: '', link: '/log-out'},
    ] : [
        // {name: 'Xabarlar', logo: '', link: '/notification'},
        {name: 'Terminal', logo: '', link: '/terminal'},
        // {name: 'Sozlamalar', logo: '', link: '/settings'},
    ]
    return (
        <div>
            <div id="app-sidepanel" className="app-sidepanel">
                <div id="sidepanel-drop" className="sideline-drop"/>
                <div className="sidepanel-inner d-flex flex-column">
                    <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
                    <div className="app-branding">
                        <Link className="app-logo" to={"/"}><span
                            className="logo-text"><span className={"text-danger"}>Ul</span> Academy</span></Link>

                    </div>

                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                        <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                            {sideArr.map(item => (
                                !item.hidden ? (
                                    <li className="nav-item p-2">
                                        <Link className={location === item.link ? "nav-link active" : "nav-link"}
                                              to={item.link}>
						        <span className="nav-icon">
						         </span>
                                            <span className="nav-link-text fw-bold">{item.name}</span>
                                        </Link>
                                    </li>
                                ) : (
                                    <></>
                                )
                            ))}
                        </ul>
                    </nav>
                    {token ? (
                        <div className="app-sidepanel-footer">
                            <nav className="app-nav app-nav-footer">
                                <ul className="app-menu footer-menu list-unstyled">
                                    {sideFooter.map(item => (
                                        <li className="nav-item">
                                            <Link className="nav-link" to={item.link}>
							        <span className="nav-icon">
							        </span>
                                                <span className="nav-link-text">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </div>
    )
}