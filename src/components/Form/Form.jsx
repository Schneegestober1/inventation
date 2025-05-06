import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import styles from "../Form/form.module.scss"
import { useState } from "react";

const alcoholOptions = [
  'Вино красное полусладкое',
  'Вино белое полусладкое',
  'Вино белое сухое',
  'Шампанское',
  'Мартини',
  'Водка',
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const TOKEN = '7887069735:AAEB_Epe-U7b24Ek3mc-CWuHcC6Wu1CeEa4';
  const CHAT_ID = '@WedRustamBotRus';
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log('Отправка данных:', data);

      const message = `
      Новая анкета гостя:
      Имя: ${data.name}
      Пара: ${data.partnerName || 'Без пары'}
      Предпочтения в алкоголе: ${data.alcoholPreferences.length ? data.alcoholPreferences.join(', ') : 'Не выбрано'}
      Свой вариант: ${data.customAlcohol || 'Не указан'}`;

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        })
      })
      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения в Telegram');
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
    },
    onError: () => {
      alert('Произошла ошибка при отправке формы.');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <section className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>АНКЕТА ГОСТЯ</h2>
        <p className={styles.text1}>Будем очень признательны, если вы сообщите нам о своем решении до 25.07.2025 года</p>

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
              className={styles.realCheckbox}
            />
            <span className={styles.customCheckbox}></span>
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
          <button type="submit" disabled={mutation.isPending || isSubmitted}  className={`${styles.button} ${isSubmitted ? styles.disabledButton : ''}`}>
          {mutation.isPending
              ? 'Отправка...'
              : isSubmitted
                ? 'Отправлено, спасибо!'
                : 'ОТПРАВИТЬ'}
          </button>
        </div>
      </form>

      <h3 className={styles.title}>С ЛЮБОВЬЮ, <br /> РУСТАМ И ВАЛЕРИЯ!</h3>
    </section>
  );
};

export default Form;
