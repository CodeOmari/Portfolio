import "../styles/footer.css";
export default function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
    return(
        <div className="container-fluid pt-4 footer-section d-flex justify-content-center bg-light">
            <p>
                All Rights reserved &copy;{currentYear}.
            </p>    
        </div>
    )
}