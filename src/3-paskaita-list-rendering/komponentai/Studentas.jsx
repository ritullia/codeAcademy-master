import './styles.css'

export const Studentas = ({ studentas }) => {
  const { name, age, image, Id, surname, team } = studentas;

  return (
    <li>
      <div className="student-card-div">
        <img src={image} alt={name} />
        <p className='student-card-paragraph'>
          {name} {surname}, amzius: {age}
        </p>
      </div>
    </li>
  );
};
