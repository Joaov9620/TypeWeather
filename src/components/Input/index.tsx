import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  isLoading?: boolean; //? =  propriedade opcional.
  //extends InputHTMLAttributes<HTMLInputElement> =  para usar as propriedades do input
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}