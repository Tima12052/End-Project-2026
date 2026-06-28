export default function LogOut(){
    return(
        <div className={css.modalContainer}>
            <div className={css.modalLogo}>
                <h1>Money Guard</h1>
            </div>
            <p>Are you sure you want to log out?</p>
            <ul>
                <li><button>LOGOUT</button></li>
                <li><button>CANCEL</button></li>
            </ul>
        </div>
    )
}