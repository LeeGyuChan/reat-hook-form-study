import { useState } from 'react';
import {useForm} from 'react-hook-form'

// interface Form {
//   name : string;
//   password: string;
// }


function App() {
 
  // const { register, handleSubmit } = useForm<Form>();
  // const [result, setResult] = useState('');
  // const onSubmit  = (data : Form) => setResult(JSON.stringify(data));
  // return(
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //       <input type="text" {...register('name')} placeholder='User Name'/>
  //       <input type="password" {...register('password')} placeholder='password'/>
  //       <input type="submit"/>
  //       <p>{result}</p>
  //   </form>
  // )

    // const {register, watch } = useForm();

    // const watchNickName = watch('nickname', 'Hong')

    // return (
    //   <form>
    //     <input type="text" placeholder='Nick Name' {...register('nickname')}/>
    //     <p>{watchNickName}</p>
    //   </form>
    // )

    interface Form {
      age : number;
    }


    const { register, handleSubmit, formState:{errors} } = useForm<Form>();
    const [result, setResult] = useState('');

    const onSubmit = (data: Form) => {
      setResult(JSON.stringify(data));
    }

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" placeholder='Age' {...register('age', {required:true, min:17, max:40})}/>
        {
          errors.age?.type === 'required' && (
            <span>Age is required</span>
          )
        }
        {
          errors.age?.type === 'min' && (
            <span>Minnum Age is 17</span>
          )
        }
        {
          errors.age?.type === 'max' && (
            <span>Maximum Age is 40</span>
          )
        }
        <input type="submit"/>
        <p>{result}</p>
      </form>

    )
}

export default App;
