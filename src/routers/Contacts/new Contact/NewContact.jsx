import './index.css'

const NewContact = () => {
  
  return (
    <div className='conteiner_newContact'>
        <h2>NewContact</h2>
        <form>
            <div className='image'>
                <input type="file" />
            </div>
            <div className='form_conteiner'>
                <div className="inputs name">
                   <input type="text" id="name" placeholder='Name'/> 
                </div>
                <div className="inputs apelido">
                    <input type="text" placeholder='Apelido' />
                </div>
                <div className="inputs empresa">
                    <input type="text" placeholder='Empresa' />
                </div>
                <div className="inputs titulo">
                    <input type="text" placeholder='Titulo' />
                </div>
                <div className="inputs telefone">
                    <input type="text" placeholder='Telefone' />
                    <select name="celular" id="celular">
                       <option value="celular">Celular</option> 
                       <option value="celular">Comercial</option> 
                       <option value="celular">Casa</option> 
                       <option value="celular">Principal</option> 
                       <option value="celular">Fax Comenrcial</option> 
                    </select>
                </div>
                <div className="inputs email">
                    <input type="email" placeholder='Email' />
                    <select name="email" id="email">
                       <option value="celular">Casa</option> 
                       <option value="celular">Comercial</option> 
                       <option value="celular">Outros</option> 
                       <option value="celular">Personalizado</option> 
                    </select>
                </div>
                
            </div>
            <div className='btns'>
                <button>Cancelar</button>                    
                <button>Salvar</button>                    
            </div>
        </form>
    </div>
  )
}

export default NewContact