import './mainpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import mini1 from '../../imgs/minicars/1.jpg'
import mini2 from '../../imgs/minicars/2.webp'
import mini3 from '../../imgs/minicars/3.jpg'
import mini4 from '../../imgs/minicars/4.webp'
import {Button} from "react-bootstrap";
export default function MainPage(props) {
    return (
        <div style={{
            height: '100vh',
            width: '100vw'
        }}>

            <div className="container">
                <div className="row text-black">
                    <div className="col-md-10 col-xs-6">
                        <div className="jumbotron">
                            <h1 className="display-4 mt-3">Bike Rental Service!</h1>
                            <p className="lead">Bikes Are mor fun when its not yours.</p>
                        </div>
                    </div>
                    <div className="col-md-1 justify-content-end">
                        <div className="row">
                            <Button variant="primary" className="col mt-3">
                                <a href="/loginpage" className="text-black">LogIn</a>
                            </Button>
                            <Button variant="danger"  className="col mt-3">
                                <a href="/signup" className="text-black">SignUp</a>
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" style={{
                            background: 'teal',
                            height:'200px',
                            width:'500px'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">Type-1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" className="btn btn-success">Book</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card" style={{
                            background: 'teal',
                            height:'200px',
                            width:'500px'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">Type-2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" className="btn btn-success">Book</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mt-3" style={{
                            background: 'teal',
                            height:'190px',
                            width:'500px'
                        }}>
                            <div className="card-body text-color-card">
                                <h5 className="card-title">Type-3</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" className="btn btn-success">Book</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="card" style={{
                            background: 'teal',
                            height:'200px',
                            width:'500px'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">Type-4</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" className="btn btn-success">Book</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <Link to={"/about"}>
                            <Button variant="warning" className="col-md-12 text-center mt-3 text-black" size="lg">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
