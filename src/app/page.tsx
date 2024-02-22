import styles from "./page.module.css";
import course from './course.json'

export default function Home() {
  return (
    <main className={styles.main}>
      {course.lessons.map((lesson) => {
        return <li key={lesson.name}>
          <h2>{lesson.title}</h2>
          <p>{lesson.shortSummary}</p>
        </li>
      })}
    </main>
  );
}
