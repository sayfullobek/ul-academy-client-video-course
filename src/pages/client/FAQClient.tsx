import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";

export const FAQClient = () => {
    const [faqs, setFaq] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.FAQ, "embedded")
            setFaq(res)
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div>
            <div className="app-content pt-3 p-md-3 p-lg-4">
                {loading ? (
                    <div className="container-xl">
                        <h1 className="app-page-title">Help Center</h1>
                        <div className="app-card app-card-accordion shadow-sm mb-4">
                            <div className="app-card-header p-4 pb-2  border-0">
                                <h4 className="app-card-title">Product</h4>
                            </div>
                            <div className="app-card-body p-4 pt-0">
                                <div id="faq1-accordion" className="faq1-accordion faq-accordion accordion">
                                    {faqs.map(item => (
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id={item.name}>
                                                <button className="accordion-button btn btn-link" type="button"
                                                        data-bs-toggle="collapse" data-bs-target={`#${item.id}`}
                                                        aria-expanded="false" aria-controls="faq1-1">
                                                    {item.name}
                                                </button>
                                            </h2>
                                            <div id={item.id} className="accordion-collapse collapse border-0"
                                                 aria-labelledby={item.name}>
                                                <div className="accordion-body text-start p4">
                                                    {item.faqAbout}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1>loading...</h1>
                )}
            </div>
        </div>
    )
}