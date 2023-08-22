export const DashboardClient = () => {
    return (
        <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
                <h1 className="app-page-title">Asosiy bo'lim</h1>

                <div className="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration"
                     role="alert" style={{background: 'white'}}>
                    <div className="inner">
                        <div className="app-card-body p-3 p-lg-4">
                            <h3 className="mb-3">Hush kelibsiz, dasturchilar!</h3>
                            <div className="row gx-5 gy-3">
                                <div className="col-12 col-lg-9">

                                    <div>Bizning ushbu platforma orqali har qanda foydalanuvchi dasturlash 0dan boshlab
                                        pro darajagacha o'rganish imkoniyatiga ega. Biz sizga juda katta chegirmalar
                                        e'lon qildik. Ushbu imkoniyatlarni qo'ldan boy bermang.
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"/>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100">
                            <div className="app-card-body p-3 p-lg-4">
                                <h4 className="stats-type mb-1">Umrbod ochiq</h4>
                                <div className="stats-figure">cheksiz</div>
                                <div className="stats-meta text-success">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                    </svg>
                                    100%
                                </div>
                            </div>
                            <a className="app-card-link-mask" href="#"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100">
                            <div className="app-card-body p-3 p-lg-4">
                                <h4 className="stats-type mb-1">chegirmalar</h4>
                                <div className="stats-figure">juda yaxshi</div>
                                <div className="stats-meta text-success">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16"
                                         className="bi bi-arrow-down" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                    50%
                                </div>
                            </div>
                            <a className="app-card-link-mask" href="#"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100">
                            <div className="app-card-body p-3 p-lg-4">
                                <h4 className="stats-type mb-1">amaliy ishlar</h4>
                                <div className="stats-figure">3</div>
                                <div className="stats-meta">
                                    ochiq
                                </div>
                            </div>
                            <a className="app-card-link-mask" href="#"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="app-card app-card-stat shadow-sm h-100">
                            <div className="app-card-body p-3 p-lg-4">
                                <h4 className="stats-type mb-1">tajribali mentorlar</h4>
                                <div className="stats-figure">👍</div>
                                <div className="stats-meta">100%</div>
                            </div>
                            <a className="app-card-link-mask" href="#"/>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-receipt" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                                <path fill-rule="evenodd"
                                                      d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Jamoa bilan ishlash</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Siz bizning kurslarimiz orqali jamoa bilan ishlashni 0dan pro
                                    darajagacha o'rganishingiz mumkin.
                                </div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <div className="btn app-btn-secondary">jamoa</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-code-square" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                <path fill-rule="evenodd"
                                                      d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Amaliy katta dasturlar yaratish</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Biz bilan katta, sifatli va xavfsiz dasturlarni yaratishni
                                    o'rganasiz
                                </div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <div className="btn app-btn-secondary">Amalish ishlar</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-tools" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
                                                <path fill-rule="evenodd"
                                                      d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Kodlarni yuklab olish</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro">Siz bizning platformamiz orqali mentorlar qilgan ishlarini yuklab
                                    olish imkoniga egasiz. Har bir qilinga dasturlar platformaga yuklab boriladi.
                                </div>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <a className="btn app-btn-secondary" href="#">kodlarni yuklab olish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}