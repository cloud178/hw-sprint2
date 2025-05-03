import s from './Loader.module.css'
import loader from './assets/Loading.svg'

export const Loader = () => {
    return <img src={loader} alt="loading..." className={s.loader} />
}
