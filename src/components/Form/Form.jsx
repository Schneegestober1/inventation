import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import styles from "../Form/form.module.scss"

const alcoholOptions = [
  'Вино красное полусладкое',
  'Вино красное сухое',
  'Вино белое полусладкое',
  'Вино белое сухое',
  'Шампанское',
  'Водка',
  'Коньяк',
  'Виски',
];

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors },} = useForm({
    defaultValues: {
      name: '',
      partnerName: '',
      alcoholPreferences: [],
      customAlcohol: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log('Отправка данных:', data);
    },
    onSuccess: () => {
      alert('Форма успешно отправлена!');
      reset();
    },
    onError: () => {
      alert('Произошла ошибка при отправке формы.');
    },
  });

  const onSubmit = (data) => {
    event.preventDefault();
    mutation.mutate(data);
  };

  return (
    <section className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>АНКЕТА ГОСТЯ</h2>
        <p className={styles.text1}>Будем очень признательны, если вы сообщите нам о своем решении до 10.03.2025 года</p>

        <p className={styles.title}>ВАШЕ ИМЯ И ФАМИЛИЯ</p>
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
          {...register('name', { required: 'Имя и фамилия обязательны' })}
          className={styles.input}
        />
         {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <p className={styles.title}>ЕСЛИ ПЛАНИРУЕТЕ ПРИЙТИ С ПАРОЙ, УКАЖИТЕ ИМЯ И ФАМИЛИЮ:</p>
        <input
          type="text"
          placeholder="Имя и фамилия пары"
          {...register('partnerName')}
          className={styles.input}
        />

        <p className={styles.title}>УТОЧНИТЕ ВАШИ ПРЕДПОЧТЕНИЯ В АЛКОГОЛЕ:</p>
        {alcoholOptions.map((option) => (
          <label key={option} className={styles.option}>
            <input
              type="checkbox"
              value={option}
              {...register('alcoholPreferences')}
            />
            {option}
          </label>
        ))}

        <p className={styles.title}>Укажите свой вариант, если это необходимо</p>
        <input
          type="text"
          placeholder="Ваш вариант"
          {...register('customAlcohol')}
          className={styles.input}
        />

        <div>
          <button type="submit" disabled={mutation.isPending} className={styles.button}>
            {mutation.isPending ? 'Отправка...' : 'ОТПРАВИТЬ'}
          </button>
        </div>
      </form>

      <h3 className={styles.title}>С ЛЮБОВЬЮ, <br /> ВИКТОР И ПОЛИНА!</h3>
    </section>
  );
};

export default Form;
