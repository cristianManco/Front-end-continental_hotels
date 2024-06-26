import { Link } from "react-router-dom";
import imgLogoWhite from "../assets/img/logos/logo_blanco_texto.png";
import 'boxicons/css/boxicons.css';

export default function Footer(){
    return (
        <footer className="bg-CBlack w-screen h-auto flex justify-center items-center flex-col gap-8 py-[30px]">
            <img src={imgLogoWhite} width={"140px"} alt="Logo" />
            {/* footer content */}
            <div className="w-4/5 flex justify-center items-start text-CWhite font-Lato gap-20 flex-col md:flex-row md:items-start md:text-left max-md:items-center">

                {/* footer seccion 1 */}
                <div className="w-auto h-auto flex justify-center items-center flex-col gap-4">
                    <h2>Social Media</h2>
                    <div className="w-auto h-auto flex justify-center items-center gap-7">
                        <a href="#"><i className='bx bxl-facebook social-media '></i></a>
                        <a href="#"><i className='bx bxl-instagram social-media' ></i></a>
                        <a href="#"><i className='bx bxl-twitter social-media' ></i></a>
                        
                    </div>
                </div>

                {/* footer seccion 2 */}
                <div className="flex justify-start items-start flex-col gap-4  max-md:justify-center max-md:items-center">
                    <h2>Contact information</h2>
                    <div className="flex justify-start flex-col font-light gap-1">
                        <div className="flex items-center justify-start gap-2 font-Lato">
                            <i className='bx bxs-map'></i>
                            <p>Crra12#34 a 567</p>
                        </div>
                        <div className="flex items-center justify-start gap-2 font-Lato">
                            <i className='bx bxs-phone'></i>
                            <p>+57 123456789</p>
                        </div>
                        <div className="flex items-center justify-start gap-2 font-Lato">
                            <i className='bx bxs-envelope'></i>
                            <p>continentalHotels@gmail.com</p>

                        </div>

                    </div>
                </div>
                {/* footer seccion 3 */}
                <div className="flex justify-start items-start flex-col gap-4 w-full max-md:justify-center max-md:items-center">
                    <h2>About Us</h2>
                    <p>We are more than a hotel; we are a destination in itself. Our commitment to excellence is reflected in every aspect of your stay.</p>
                </div>

                {/* footer seccion 4 */}
                <div className="flex justify-start items-start flex-col gap-4 max-md:w-full max-md:justify-center max-md:items-center">
                    <h2>Explore</h2>
                    <div className="flex justify-start items-start flex-col text-[14px] font-[300] gap-2 max-md:justify-center max-md:items-center">
                       <Link to={"/"} className="hover:underline hover:text-CGold duration-300">Home</Link>
                       <Link to= {"/rooms"} className="hover:underline hover:text-CGold duration-300">Rooms</Link>
                       <Link to={"/admin-page"} className="hover:underline hover:text-CGold duration-300">Admin</Link>
                       <Link to={"#"} className="hover:underline hover:text-CGold duration-300">Login</Link>
                       <Link to= {"/profile"} className='hover:text-CGold transition-all hover:scale-[1.06]'>Profile</Link>

                       <Link to={"#"} className="hover:underline hover:text-CGold duration-300">Register</Link>
                    </div>
                </div>

            </div>
            <p className="text-CWhite mt-2 font-semibold text-[10px]">Copyright&#169;2024</p>
        </footer>
    );
}
