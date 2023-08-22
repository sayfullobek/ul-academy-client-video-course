import {Spinner} from "reactstrap";

export const Loading = () => {
    return (
        <div className={"container d-flex align-items-center justify-content-center"} style={{height:'60vh'}}>
            <Spinner
                color="success"
                type="grow"
            >
                Loading...
            </Spinner>
        </div>
    )
}