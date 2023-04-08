import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault()
    console.log("Testando")
    setUserEmail(email)
    console.log(userEmail)
  }

  function limparEmail(e) {
    e.preventDefault()
    setUserEmail('')
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail..." />
        <button type="submit" onClick={enviarEmail} >
          Enviar-Email
        </button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional