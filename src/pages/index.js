import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import { useSelector, useDispatch } from 'react-redux';

// ------- Redux store ---------------------------------
import { decrement, increment, } from 'redux/counter/counterSlice';
import { setLogin, setLogout } from 'redux/auth/auth';
//-------------------------------------------------------

export default function Home() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.authReducer)

  const data2 = useSelector((state) => state.counterReducer)

  //console.log(data2)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS with Tailwinds Css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='pt-10'>
        <h1 className={styles.title}>
          NextJS with Redux Toolkits
        </h1>


        <div className={styles.description}>

          <button className='p-2 mr-5 bg-blue-400 text-white rounded-lg px-5' onClick={() => dispatch(setLogin())}>Login user</button>
          <button className='p-2 mr-5 bg-red-400 text-white rounded-lg px-5' onClick={() => dispatch(setLogout())}>Logout</button>

          <p className='mb-5 mt-5'>Persist Redux State on page refresh</p>
          <p className='mb-5'>is Login : {data.isLogin ? 'YES login' : 'NOT login'} </p>
          <p>Userid : {data.userid ? '124567' : '----'} </p>
        </div>


        <div className={styles.description}>

          <button className='p-2 mr-5 bg-blue-400 text-white rounded-lg px-5' onClick={() => dispatch(increment())}>Increase Value</button>
          <button className='p-2 mr-5 bg-red-400 text-white rounded-lg px-5' onClick={() => dispatch(decrement())}>Decrease Value</button>

          <p className='mb-5 mt-5'>Not Persist Redux State</p>
          <p className='mb-5'>Counter value : {data2.value} </p>

        </div>

      </main>


    </div>
  )
}
