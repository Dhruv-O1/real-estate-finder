import React, { useEffect, useState } from 'react'
import heroBg1 from '../../landing/assets/img/hero_bg_1.jpg';
import '../../landing/assets/fonts/icommon/style.css';
import '../../landing/assets/fonts/flaticon/flaticon.css';
import '../../landing/css/tiny-slider.css';
import '../../landing/css/aos.css';
import '../../landing/css/style.css';
import '../../landing/js/counter';
import '../../landing/js/navbar';
import '../../landing/js/tiny-slider';
import 'aos/dist/aos.css';
import 'tiny-slider/dist/tiny-slider.css';
import AOS from 'aos';
import axios from 'axios';
import { AdminNavbar } from '../../components/admin/AdminNavbar';
import { Bounce, toast } from 'react-toastify';


export const AllUser = () => {
    const [user, setuser] = useState([])

    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease',
          once: true,
          offset: 120
        });
        getAllUsers()
      }, []);

      const getAllUsers = async () => {
        const res = await axios.get("/user")
        console.log(res.data.data);
        setuser(res.data.data)

        
      }


      const deleteUser = async (id) => {
        const res = await axios.delete(`/user/${id}`)
        console.log(res);
        if (res.status == 204) {
          toast.success('🦄 User deleted Succesfully', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
        getAllUsers()
         
        
        
      }


  return (
    <div>
        <AdminNavbar/>
        <div
                className="hero page-inner overlay"
                style={{ backgroundImage: `url(${heroBg1})` }}
              >
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-9 text-center mt-5">
                      <h1 className="heading" data-aos="fade-up" data-aos-delay="200">
                        All Users
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <table className="table table-dark" >
                <thead>
                    <tr>
                        <td>ID</td>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Gender</th>
                        <th>Delete</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                {user?.map((user)=>{
                    return(
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.gender}</td>
                            <td><button onClick={() => {deleteUser(user._id)}}  className='btn btn-danger '>Delete</button></td>
                            
                            
                        </tr>
                    )
                })}

                </tbody>

            </table>


        
    </div>
  )
}