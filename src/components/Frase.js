import styles from './Frase.module.css'

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p clssName={styles.fraseContent}> Este é um componente frase</p>
    </div>
  )
}
export default Frase