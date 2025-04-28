import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";


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
    mutation.mutate(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>АНКЕТА ГОСТЯ</h2>
        <p>Будем очень признательны, если вы сообщите нам о своем решении до 10.03.2025 года</p>

        <p>ВАШЕ ИМЯ И ФАМИЛИЯ</p>
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
          {...register('name', { required: 'Имя и фамилия обязательны' })}
        />
         {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <p>ЕСЛИ ПЛАНИРУЕТЕ ПРИЙТИ С ПАРОЙ, УКАЖИТЕ ИМЯ И ФАМИЛИЮ:</p>
        <input
          type="text"
          placeholder="Имя и фамилия пары"
          {...register('partnerName')}
        />
        {errors.partnerName && <p style={{ color: 'red' }}>{errors.partnerName.message}</p>}

        <p>УТОЧНИТЕ ВАШИ ПРЕДПОЧТЕНИЯ В АЛКОГОЛЕ:</p>
        {alcoholOptions.map((option) => (
          <label key={option} style={{ display: 'block' }}>
            <input
              type="checkbox"
              value={option}
              {...register('alcoholPreferences')}
            />
            {option}
          </label>
        ))}
        {errors.alcoholPreferences && (
          <p style={{ color: 'red' }}>Выберите хотя бы один алкогольный напиток</p>
        )}

        <p>Укажите свой вариант, если это необходимо</p>
        <input
          type="text"
          placeholder="Ваш вариант"
          {...register('customAlcohol')}
        />
        {errors.customAlcohol && <p style={{ color: 'red' }}>{errors.customAlcohol.message}</p>}

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Отправка...' : 'ОТПРАВИТЬ'}
        </button>
      </form>

      <h3>С ЛЮБОВЬЮ, ВИКТОР И ПОЛИНА!</h3>
    </section>
  );
};

export default Form;
