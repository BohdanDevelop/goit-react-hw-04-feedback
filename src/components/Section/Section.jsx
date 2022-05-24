import style from './Section.module.scss';

const Section = ({ children, title }) => {
  return (
    <section className={style.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
