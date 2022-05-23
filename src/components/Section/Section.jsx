import style from './Section.module.scss';

const Section = ({ children, title }) => {
  return (
    <section className={style.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
