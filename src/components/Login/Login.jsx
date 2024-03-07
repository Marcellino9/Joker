import './Login.css'
import {Link} from 'react-router-dom'
import HeroImg from "../../assets/enii.png";
import  { useState, useEffect } from 'react';
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'


const Login = () => {
    const myData ={
        username:'',
        password:''
    }
    const [error,setError]= useState(false)
    const [data,setData] = useState(myData)
    const handleChange = (e)=>{
        setData((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!data.username || !data.password){
            setError(true)
        }else{
            setError(false)
        }
    }

  return (

        <div className='loginPage flax' data-aos="fade-right"
        data-aos-delay="300">
            <div className='container flax' >

                <div className='videoDiv'>
                        <img
                        src={HeroImg}
                        alt=""
                        className=" vid" 
                    />
                    

                    <div className='footerDiv flax'>
                        <span className='text'>Vous n'avez pas encore de compte? </span>
                        <Link to={'/nouveau'}>
                            <button className='btn'>Aide</button>
                        </Link>
                    </div>
                </div>

                <div className='formDiv flax'>
                    <div className='headerDiv'>
                        <h3>Forger votre avenir!</h3>
                    </div>

                    <form action='' className='from grad'>
                        {error ? <span className='showMessage' id='error' >Veuiller remplir le formulaire</span> : ''}
                        <div className='inputDiv'>
                            <label htmlFor='username'>Nom d'utilisateur</label>
                            <div className='input flax'>
                                <FaUserShield className='icon'/>
                                <input type='text' id='username' placeholder='Nom utilisateur' onChange={(e)=> handleChange(e) }/>
                            </div>
                        </div>

                        <div className='inputDiv'>
                            <label htmlFor='password'>Mot de passe</label>
                            <div className='input flax'>
                                <BsFillShieldLockFill className='icon'/>
                                <input type='password' id='password' placeholder='Mot de passe' onChange={(e)=> handleChange(e)}/>
                            </div>
                        </div>

                        <button type='submit' className='btn flax' onClick={(e)=>handleSubmit(e)}>
                            <span>Se connecter</span>
                            <AiOutlineSwapRight className='iconn'/>
                        </button>

                        <span className='forgotPassword'>
                            Mot de passe oublier <a href=''>Click ici</a>
                        </span>


                    </form>
                </div>





            </div>

        </div>
  
  )
}


export default Login