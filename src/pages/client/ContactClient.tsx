import {toast} from "react-toastify";

export const ContactClient = () => {
    return (
        <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
                <h1 className="app-page-title">Overview</h1>
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder icon-holder-mono">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-headset" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M8 1a5 5 0 0 0-5 5v4.5H2V6a6 6 0 1 1 12 0v4.5h-1V6a5 5 0 0 0-5-5z"/>
                                                <path
                                                    d="M11 8a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zM5 8a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8z"/>
                                                <path fill-rule="evenodd"
                                                      d="M13.5 8.5a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H8a.5.5 0 0 1 0-1h3.5A1.5 1.5 0 0 0 13 12V9a.5.5 0 0 1 .5-.5z"/>
                                                <path
                                                    d="M6.5 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Yordam kerakmi?</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">
                                <div className="intro mb-3">Agar sizda platforma bilan bog'liq savollar bo'lsa ushbu
                                    kontaktlarga murajat qiling.
                                </div>
                                <ul className="list-unstyled">
                                    <li><strong>Telefon raqam : </strong> +998(91)810-32-46</li>
                                    <li><strong>Email:</strong> <a href="#">sayfullodev@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <button className="btn app-btn-secondary"
                                        onClick={() => toast.error("Xozircha sizning qurilmangizga kirish mumkin emas")}>Jonli
                                    chatni boshlash
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
                            <div className="app-card-header p-3 border-bottom-0">
                                <div className="row align-items-center gx-3">
                                    <div className="col-auto">
                                        <div className="app-icon-holder icon-holder-mono">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                 className="bi bi-life-preserver" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M14.43 10.772l-2.788-1.115a4.015 4.015 0 0 1-1.985 1.985l1.115 2.788a7.025 7.025 0 0 0 3.658-3.658zM5.228 14.43l1.115-2.788a4.015 4.015 0 0 1-1.985-1.985L1.57 10.772a7.025 7.025 0 0 0 3.658 3.658zm9.202-9.202a7.025 7.025 0 0 0-3.658-3.658L9.657 4.358a4.015 4.015 0 0 1 1.985 1.985l2.788-1.115zm-8.087-.87L5.228 1.57A7.025 7.025 0 0 0 1.57 5.228l2.788 1.115a4.015 4.015 0 0 1 1.985-1.985zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h4 className="app-card-title">Qisqacha ma'lumotlar?</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="app-card-body px-4">

                                <div className="intro mb-3">Agar siz platforma bilan bog'liq muammolarni topgan
                                    bo'lsangiz. Ushbu ma'lumotlarni o'qing.
                                </div>
                                <ul className="list-unstyled">
                                    <li>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-check2 text-primary me-2" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        Sahifalarning beqarorligi
                                    </li>
                                    <li>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-check2 text-primary me-2" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        profildagi xatoliklar
                                    </li>
                                    <li>
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-check2 text-primary me-2" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                        Kurslar bilan bog'liq xatoliklar
                                    </li>

                                </ul>
                            </div>
                            <div className="app-card-footer p-4 mt-auto">
                                <button className="btn app-btn-primary"
                                        onClick={() => toast.success("Tez orqada sizga operatorlarimiz a" +
                                            "loqaga chiqishadi murojaat uchun tashakkur")}>Xozir yuborish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}