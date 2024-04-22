import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className="form_container">
      <h1>Deixe sua mensagem</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Assunto" />
        <textarea placeholder="Mensagem" rows={4}></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm