
import { ColorRing } from 'react-loader-spinner'
import css from './Loader.module.css'

export const Spinner = () => {
  return (
      <div className={css.SpinnerDiv}>
      <ColorRing />
    </div>
  );
};