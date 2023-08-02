import styles from './App.module.css'
import { useForm } from 'react-hook-form'
import { fieldsSchema } from './components/fields-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { sendFormData } from './components/send-from-data'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(fieldsSchema),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  })

  return (
    <div className={styles.app}>
      <form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
        {errors.email && (
          <div className={styles.errorLabel}>
            {errors.email?.message || 'Error!'}
          </div>
        )}
        <input type="email" placeholder="Почта" {...register('email')} />
        <input type="password" placeholder="Пароль" {...register('password')} />
        {errors.password && (
          <div className={styles.errorLabel}>
            {errors?.password?.message || 'Error!'}
          </div>
        )}
        <input
          type="password"
          placeholder="Повтор пароля"
          {...register('repeatPassword')}
        />
        {errors.repeatPassword && (
          <div className={styles.errorLabel}>
            {errors.repeatPassword?.message || 'Error!'}
          </div>
        )}
        <button
          className={styles.button}
          type="submit"
          disabled={errors.email || errors.password || errors.repeatPassword}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default App
