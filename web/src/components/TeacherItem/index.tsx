import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/49029927?s=460&u=cc2da097857dc813379d21636e7a71a6d27802f5&v=4"
          alt="Valney Marinho"
        />
        <div>
          <strong>Valney Maniquinho</strong>
          <span>Manicagem</span>
        </div>
      </header>

      <p>
        Entusiasta da arte de manicar.
        <br />
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <br />O teor de manicagem deste indivíduo é elevadíssimo.
      </p>
      <footer>
        <p>
          Preço/hora:
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
